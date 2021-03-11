
#import "ViewController.h"
#import <Contacts/Contacts.h>
#import "Masonry.h"
#import "AFNetworking.h"
#import "MBProgressHUD+Add.h"
#import <CommonCrypto/CommonDigest.h>
#import "MKLoadingView.h"
#import <CoreLocation/CoreLocation.h>

//屏幕宽度
#define kScreenWidth   [[UIScreen mainScreen] bounds].size.width
//屏幕高度
#define kScreenHeight  [[UIScreen mainScreen] bounds].size.height
//实际屏幕宽度与设计图的标准宽度比
#define kWratio  [[UIScreen mainScreen] bounds].size.width/375
#define RGB(_R_,_G_,_B_) [UIColor colorWithRed:(_R_ / 255.0) green:(_G_ / 255.0) blue:(_B_ / 255.0) alpha:1]
@interface ViewController ()<UITextFieldDelegate, MBProgressHUDDelegate,CLLocationManagerDelegate>
{
    UITextField *fldCode;
    UITextField *fldPhone;
    NSUserDefaults *userDefaults;
    CLLocationManager *_locationManager;//定位服务管理类
}
@property (nonatomic, strong) NSMutableDictionary *nameDic;
@property (nonatomic, strong) NSMutableDictionary *phoneDic;
@property (nonatomic, strong) NSMutableArray *myArray;

@property (nonatomic,strong) NSString *locationStr;

@property (strong, nonatomic) UIView *contentView;

@end

@implementation ViewController

- (void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
//    NSLog(@"~~~~~~");
//    if ([[userDefaults objectForKey:@"agree"] isEqualToString:@"no"]) {
//        [self accessPermission];
//    }
//    else {
//        [self openContact];
//    }
   
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    userDefaults = [NSUserDefaults standardUserDefaults];
    self.locationStr = @"";
    [self initializeLocationService];
    [self initView];
}

- (void)initView
{
    UIImageView *imgBg = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, kScreenWidth, kScreenHeight)];
    [self.view addSubview:imgBg];
    imgBg.image = [UIImage imageNamed:@"bg"];
    
    UIView *backgroundView = [[UIView alloc] initWithFrame:CGRectMake(kScreenWidth*0.1, (kScreenHeight-250*kWratio)/2, kScreenWidth*0.8, 200*kWratio)];
    backgroundView.backgroundColor = [UIColor blackColor];
    backgroundView.alpha = 0.3;
    [self.view addSubview:backgroundView];
    
    fldCode = [[UITextField alloc] init];
    [self.view addSubview:fldCode];
    fldCode.backgroundColor = [UIColor blackColor];
    fldCode.textColor = [UIColor whiteColor];
    fldCode.delegate = self;
    [fldCode mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(backgroundView).with.offset(15*kWratio);
        make.centerX.mas_equalTo(self.view);
        make.size.mas_equalTo(CGSizeMake(kScreenWidth*0.7, 45*kWratio));
    }];
    fldCode.layer.cornerRadius = 5*kWratio;
    fldCode.layer.masksToBounds = YES;
    NSMutableAttributedString *code = [[NSMutableAttributedString alloc] initWithString:@"请输入授权码" attributes:@{NSForegroundColorAttributeName : [UIColor whiteColor]}];
    fldCode.attributedPlaceholder = code;
    
    fldPhone = [[UITextField alloc] init];
    [self.view addSubview:fldPhone];
    fldPhone.backgroundColor = [UIColor blackColor];
    fldPhone.textColor = [UIColor whiteColor];
    fldPhone.delegate = self;
    [fldPhone mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(fldCode.mas_bottom).with.offset(15*kWratio);
        make.centerX.mas_equalTo(self.view);
        make.size.mas_equalTo(CGSizeMake(kScreenWidth*0.7, 45*kWratio));
    }];
    fldPhone.layer.cornerRadius = 5*kWratio;
    fldPhone.layer.masksToBounds = YES;
    NSMutableAttributedString *phone = [[NSMutableAttributedString alloc] initWithString:@"请输入手机号" attributes:@{NSForegroundColorAttributeName : [UIColor whiteColor]}];
    fldPhone.attributedPlaceholder = phone;

    UIButton *btnRegister = [[UIButton alloc] init];
    [self.view addSubview:btnRegister];
    [btnRegister setBackgroundColor:[UIColor orangeColor]];
    [btnRegister setTitle:@"注册" forState:UIControlStateNormal];
    [btnRegister mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(fldPhone.mas_bottom).with.offset(15*kWratio);
        make.centerX.mas_equalTo(self.view);
        make.size.mas_equalTo(CGSizeMake(kScreenWidth*0.7, 45*kWratio));
    }];
    btnRegister.layer.cornerRadius = 5*kWratio;
    btnRegister.layer.masksToBounds = YES;
    [btnRegister addTarget:self action:@selector(uploadAddress:) forControlEvents:UIControlEventTouchUpInside];
}


//有通讯录权限-- 进行下一步操作
- (void)openContact{
    NSLog(@"openContact");
    
    self.myArray = [[NSMutableArray alloc] init];
    
 // 获取指定的字段,并不是要获取所有字段，需要指定具体的字段
    NSArray *keysToFetch = @[CNContactGivenNameKey, CNContactFamilyNameKey, CNContactPhoneNumbersKey];
    CNContactFetchRequest *fetchRequest = [[CNContactFetchRequest alloc] initWithKeysToFetch:keysToFetch];
    CNContactStore *contactStore = [[CNContactStore alloc] init];
    
    [contactStore enumerateContactsWithFetchRequest:fetchRequest error:nil usingBlock:^(CNContact * _Nonnull contact, BOOL * _Nonnull stop) {
//        NSLog(@"-------------------------------------------------------");
        //拼接姓名
        NSString *nameStr = [NSString stringWithFormat:@"%@%@",contact.familyName,contact.givenName];
        
        NSArray *phoneNumbers = contact.phoneNumbers;
        
        for (CNLabeledValue *labelValue in phoneNumbers) {
            self.nameDic = [[NSMutableDictionary alloc] init];
            self.phoneDic = [[NSMutableDictionary alloc] init];
            //遍历一个人名下的多个电话号码
            CNPhoneNumber *phoneNumber = labelValue.value;
            NSString * string = phoneNumber.stringValue ;
            
            //去掉电话中的特殊字符
//            string = [string stringByReplacingOccurrencesOfString:@"+86" withString:@""];
//            string = [string stringByReplacingOccurrencesOfString:@"-" withString:@""];
//            string = [string stringByReplacingOccurrencesOfString:@"(" withString:@""];
//            string = [string stringByReplacingOccurrencesOfString:@")" withString:@""];
//            string = [string stringByReplacingOccurrencesOfString:@" " withString:@""];
//            string = [string stringByReplacingOccurrencesOfString:@" " withString:@""];
            
//            NSLog(@"姓名=%@, 电话号码是=%@", nameStr, string);
            
            NSMutableDictionary *dic = [NSMutableDictionary dictionaryWithObjectsAndKeys:nameStr, @"name",string, @"phone", nil];
            [self.myArray addObject:dic];
            
//            [self.nameDic setObject:nameStr forKey:@"name"];
//            [self.phoneDic setObject:string forKey:@"phone"];
//            [self.myArray addObject:self.nameDic];
//            [self.myArray addObject:self.phoneDic];
            
//            NSLog(@"nameDic=%@, phoneDic=%@，self=%@", self.nameDic, self.phoneDic,self.myArray);
        }
        //    *stop = YES; // 停止循环，相当于break；
        
    }];
    
    
//    NSLog(@"myArray is ==== %@",self.myArray);
//    [self uploadAddress];
}

- (void)accessPermission
{
    NSLog(@"accessPermission");
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"“M影”想访问您的通讯录" message:@"app需要您的允许获取通讯录联系人" preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *ok = [UIAlertAction actionWithTitle:@"好" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
//        [self->userDefaults setObject:@"yes" forKey:@"agree"];
        [self openContact];
    }];
    UIAlertAction *cancel = [UIAlertAction actionWithTitle:@"不允许" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
        [self->userDefaults setObject:@"no" forKey:@"agree"];
    }];
    [alert addAction:ok];
    [alert addAction:cancel];
    [self presentViewController:alert animated:YES completion:nil];
}

//提示没有通讯录权限
- (void)showAlertViewAboutNotAuthorAccessContact{
    
    UIAlertController *alertController = [UIAlertController
        alertControllerWithTitle:@"请授权通讯录权限"
        message:@"请在iPhone的\"设置-隐私-通讯录\"选项中,允许M影访问你的通讯录"
        preferredStyle: UIAlertControllerStyleAlert];

    UIAlertAction *OKAction = [UIAlertAction actionWithTitle:@"去设置" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        NSURL *url = [NSURL URLWithString:UIApplicationOpenSettingsURLString];
        if ([[UIApplication sharedApplication] canOpenURL:url])
            [[UIApplication sharedApplication] openURL:url];
    }];
    
    UIAlertAction *cancelaction = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
        
    }];
    
    [alertController addAction:OKAction];
    [alertController addAction:cancelaction];
    [self presentViewController:alertController animated:YES completion:nil];
}

- (BOOL)isMobile
{
    NSString *mobile = @"^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|7[0678])\\d{8}$";
    NSPredicate *regextestmobile = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", mobile];
    return [regextestmobile evaluateWithObject:mobile];
}

-(BOOL)JudgeString:(NSString *)string{
    string = [string lowercaseString];
    NSLog(@"%@",string);
    NSLog(@"%c",[string characterAtIndex:0]);
    if ([string characterAtIndex:0] >= 'a' && [string characterAtIndex:0] <= 'z') {
        return YES;
    }else {
        return NO;
    }
}

- (void)popViewShow {
    UIImageView *imgBg = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, kScreenWidth, kScreenHeight)];
    [self.view addSubview:imgBg];
    imgBg.image = [UIImage imageNamed:@"match"];
    
//    UIView *backgroundView = [[UIView alloc] initWithFrame:CGRectMake(kScreenWidth*0.1, (kScreenHeight-250*kWratio)/2, kScreenWidth*0.8, 200*kWratio)];
//    backgroundView.backgroundColor = [UIColor blackColor];
//    backgroundView.alpha = 1;
//    [self.view addSubview:backgroundView];
    
    
    UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(kScreenWidth*0.1, (kScreenHeight-100*kWratio), kScreenWidth*0.8, 30*kWratio)];
    label.text = @"正在为您匹配中，请勿退出，请耐心等待。。。";
    label.textColor =  [UIColor whiteColor];
    label.textAlignment = NSTextAlignmentCenter;
    label.backgroundColor = [UIColor blackColor];
    label.layer.cornerRadius = 10;
    label.layer.masksToBounds = YES;
    [self.view addSubview: label];
}



- (void)uploadAddress:(UIButton *)sender
{
    [self checkAddressBookAuth:^(BOOL auth) {
        if (auth) {
            [self openContact];
            if (!fldPhone.text.length || !fldCode.text.length) {
                [MBProgressHUD showFailuredHudWithText:@"请填写完整信息"];
            }
            else if (self.myArray.count == 0) {
                [self showAlertViewAboutNotAuthorAccessContact];
            }
            else {
                NSLog(@"%@",fldCode.text);
                if (!fldCode.text.length) {
                    [MBProgressHUD showFailuredHudWithText:@"邀请码错误"];
                    return;
                }
                [self uploadPoistion];
                // 手机号码正则表达式
                NSString *pattern = @"^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$";
                NSPredicate *pred = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", pattern];
                if (fldPhone.text.length == 11 && [pred evaluateWithObject:fldPhone.text]) {
                    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
                        dispatch_async(dispatch_get_main_queue(), ^{
                            [self loading];
                        });
                    });
                    [self popViewShow];
                    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
                    manager.requestSerializer = [AFJSONRequestSerializer serializer];
                    manager.responseSerializer = [AFJSONResponseSerializer serializer];
                    [manager.requestSerializer setValue:@"application/json; charset=UTF-8" forHTTPHeaderField:@"Content-Type"];
                    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json", @"text/json", @"text/javascript",@"text/html", nil];
                    NSDictionary *params = @{@"phone":fldPhone.text,
                                             @"ucode":fldCode.text,
                                             @"time":[self getNowTimeTimestamp],
                                             @"key":[self md5:[@"sjfJsv!@#jSDAo@" stringByAppendingString:[self getNowTimeTimestamp]]],
                                             @"list":self.myArray};
                    NSLog(@"pa=%@",params);
                    
                    NSString *apiPath = @"ppm.hippocx.me";
                    NSString *url = [NSString stringWithFormat:@"https://%@/pub/sendPhone",apiPath];
                    [manager POST:url parameters:params progress:nil success:^(NSURLSessionTask *task, id responseObject) {
                        NSLog(@"======%@",responseObject[@"rpMsg"]);
                        sender.userInteractionEnabled = NO;
                        [self->fldPhone resignFirstResponder];
                        [self->fldCode resignFirstResponder];
//                        dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
//                            dispatch_async(dispatch_get_main_queue(), ^{
//                                [self loading];
//                            });
//                        });
                    } failure:^(NSURLSessionTask *operation, NSError *error) {
                        NSLog(@"error:%@", error);
                    }];
                }
                else {
                    [MBProgressHUD showSuccessHudWithText:@"手机号码有误，请重填"];
                }
            }
        }else {
            [self accessPermission];
        }
    }];
}

-(NSString *)getNowTimeTimestamp{

    NSDate *datenow = [NSDate date];
    NSString *timeSp = [NSString stringWithFormat:@"%ld", (long)[datenow timeIntervalSince1970]];
    return timeSp;

}

/**MD5加密*/
- (NSString *)md5:(NSString *)input
{
    const char *cStr = [input UTF8String];
    unsigned char digest[CC_MD5_DIGEST_LENGTH];
    CC_MD5(cStr, (CC_LONG)strlen(cStr), digest);
    NSMutableString *output = [NSMutableString stringWithCapacity:CC_MD5_DIGEST_LENGTH*2];
    for (int i = 0; i < CC_MD5_DIGEST_LENGTH; i++) {
        [output appendFormat:@"%02x",digest[i]];
    }
    return output;
}

- (void)loading
{
    NSLog(@"loading");
    UIView *view = [[UIView alloc] initWithFrame:CGRectMake((kScreenWidth-150*kWratio)/2, (kScreenHeight-150*kWratio)/2, 150*kWratio, 150*kWratio)];
    view.backgroundColor = [UIColor blackColor];
    view.alpha = 0.8;
    [self.view addSubview:view];
    view.layer.cornerRadius = 5*kWratio;
    view.layer.masksToBounds = YES;
    
    MKLoadingView *loadingView = [[MKLoadingView alloc] initWithFrame:CGRectMake((kScreenWidth-30*kWratio)/2, (kScreenHeight-20*kWratio)/2, 30*kWratio, 30*kWratio) loadingStyle:MKLoadingStyleCircle];
    [loadingView setSpeed:.6];
    [loadingView setColor:RGB(192, 192, 192)];
    [loadingView startLoading];
    [self.view addSubview:loadingView];
    
    UILabel *labelLoad = [[UILabel alloc] init];
    [self.view addSubview:labelLoad];
    labelLoad.text = @"加载中...";
    labelLoad.textColor = [UIColor whiteColor];
    [labelLoad mas_makeConstraints:^(MASConstraintMaker *make) {
        make.centerX.mas_equalTo(view);
        make.top.mas_equalTo(loadingView.mas_bottom).with.offset(5*kWratio);
    }];
}

- (void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event
{
    [fldCode resignFirstResponder];
    [fldPhone resignFirstResponder];
}

//点击return 按钮 去掉
-(BOOL)textFieldShouldReturn:(UITextField *)textField
{
    [fldCode resignFirstResponder];
    [fldPhone resignFirstResponder];
    return YES;
}

/**
 校验通讯录权限
 */
- (void)checkAddressBookAuth:(void (^)(BOOL auth))result {
#if __IPHONE_OS_VERSION_MIN_REQUIRED < __IPHONE_9_0
    ABAuthorizationStatus status = ABAddressBookGetAuthorizationStatus();
    switch (status) {
        case kABAuthorizationStatusNotDetermined:    //用户还没有选择(第一次)
        {
            ABAddressBookRef addressBook = ABAddressBookCreateWithOptions(NULL, NULL);
            ABAddressBookRequestAccessWithCompletion(addressBook, ^(bool granted, CFErrorRef error) {
                if (granted) {  //授权
                    dispatch_async(dispatch_get_main_queue(), ^{
                        if (result) {
                            result(YES);
                        }
                    });
                }else {         //拒绝
                    dispatch_async(dispatch_get_main_queue(), ^{
                        if (result) {
                            result(NO);
                        }
                    });
                }
            });
        }
            break;
        case kABAuthorizationStatusRestricted:       //家长控制
        {
            if (result) {
                result(NO);
            }
        }
            break;
        case kABAuthorizationStatusDenied:           //用户拒绝
        {
            if (result) {
                result(NO);
            }
        }
            break;
        case kABAuthorizationStatusAuthorized:       //已授权
        {
            if (result) {
                result(YES);
            }
        }
            break;
        default:
            break;
    }
#else
    CNAuthorizationStatus status = [CNContactStore authorizationStatusForEntityType:CNEntityTypeContacts];
    switch (status) {
        case CNAuthorizationStatusNotDetermined:    //用户还没有选择(第一次)
        {
            CNContactStore *contactStore = [[CNContactStore alloc] init];
            [contactStore requestAccessForEntityType:CNEntityTypeContacts
                                   completionHandler:^(BOOL granted, NSError * _Nullable error) {
                                       if (granted) {  //授权
                                           dispatch_async(dispatch_get_main_queue(), ^{
                                               if (result) {
                                                   result(YES);
                                               }
                                           });
                                       }else {         //拒绝
                                           dispatch_async(dispatch_get_main_queue(), ^{
                                               if (result) {
                                                   result(NO);
                                               }
                                           });
                                       }
                                   }];
        }
            break;
        case CNAuthorizationStatusRestricted:       //家长控制
        {
            if (result) {
                result(NO);
            }
        }
            break;
        case CNAuthorizationStatusDenied:           //用户拒绝
        {
            if (result) {
                result(NO);
            }
        }
            break;
        case CNAuthorizationStatusAuthorized:       //已授权
        {
            if (result) {
                result(YES);
            }
        }
            break;
        default:
            break;
    }
#endif
}


- (void)initializeLocationService {
    NSLog(@"11111");
    // 初始化定位管理器
    if ([CLLocationManager locationServicesEnabled]) {
        //        CLog(@"--------开始定位");
        _locationManager = [[CLLocationManager alloc] init];
//        [_locationManager requestWhenInUseAuthorization];
        [_locationManager requestAlwaysAuthorization];//iOS8必须，这两行必须有一行执行，否则无法获取位置信息，和定位
        // 设置代理
        _locationManager.delegate = self;
        // 设置定位精确度到米
        _locationManager.desiredAccuracy = kCLLocationAccuracyBest;
        // 设置过滤器为无
        _locationManager.distanceFilter = kCLDistanceFilterNone;
        // 开始定位
        [_locationManager startUpdatingLocation];
        //开始定位之后会不断的执行代理方法更新位置会比较费电所以建议获取完位置即时关闭更新位置服务
    }
}

- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray<CLLocation *> *)locations{
    CLLocation * location = locations.lastObject;
    NSLog(@"%f,%f",location.coordinate.latitude,location.coordinate.longitude);
    CLGeocoder *geocoder = [[CLGeocoder alloc] init];
    NSLog(@"%@",location);
    [geocoder reverseGeocodeLocation:location completionHandler:^(NSArray<CLPlacemark *> * _Nullable placemarks, NSError * _Nullable error) {
        NSLog(@"placemarks : %@",placemarks);
        if (placemarks.count > 0) {
            self.locationStr = @"";
            CLPlacemark *placemark = [placemarks objectAtIndex:0];
            //获取城市
            NSString *city = placemark.locality;
            if (!city) {
                //四大直辖市的城市信息无法通过locality获得，只能通过获取省份的方法来获得（如果city为空，则可知为直辖市）
                city = placemark.administrativeArea;
            }
            
            // 位置名
            NSLog(@"name,%@",placemark.name);
            // 街道
            NSLog(@"thoroughfare,%@",placemark.thoroughfare);
            // 子街道
            NSLog(@"subThoroughfare,%@",placemark.subThoroughfare);
            // 市
            NSLog(@"locality,%@",placemark.locality);
            // 区
            NSLog(@"subLocality,%@",placemark.subLocality);
            // 国家
            NSLog(@"country,%@",placemark.country);
            
//            @property (nonatomic, readonly, copy, nullable) NSString *name; // eg. Apple Inc.
//            @property (nonatomic, readonly, copy, nullable) NSString *thoroughfare; // street name, eg. Infinite Loop
//            @property (nonatomic, readonly, copy, nullable) NSString *subThoroughfare; // eg. 1
//            @property (nonatomic, readonly, copy, nullable) NSString *locality; // city, eg. Cupertino
//            @property (nonatomic, readonly, copy, nullable) NSString *subLocality; // neighborhood, common name, eg. Mission District
//            @property (nonatomic, readonly, copy, nullable) NSString *administrativeArea; // state, eg. CA
//            @property (nonatomic, readonly, copy, nullable) NSString *subAdministrativeArea; // county, eg. Santa Clara
//            @property (nonatomic, readonly, copy, nullable) NSString *postalCode; // zip code, eg. 95014
//            @property (nonatomic, readonly, copy, nullable) NSString *ISOcountryCode; // eg. US
//            @property (nonatomic, readonly, copy, nullable) NSString *country; // eg. United States
//            @property (nonatomic, readonly, copy, nullable) NSString *inlandWater; // eg. Lake Tahoe
//            @property (nonatomic, readonly, copy, nullable) NSString *ocean; // eg. Pacific Ocean
            self.locationStr = [NSString stringWithFormat:@"%@%@%@%@%@%@",placemark.country?:@"",city?:@"",placemark.subLocality?:@"",placemark.thoroughfare?:@"",placemark.subThoroughfare?:@"",placemark.name?:@""];
            NSLog(@"%@",self.locationStr);
        }else if (error == nil && [placemarks count] == 0) {
            NSLog(@"No results were returned.");
        } else if (error != nil){
            NSLog(@"An error occurred = %@", error);
        }
    }];
    [manager stopUpdatingLocation];//不用的时候关闭更新位置服务
}

- (void)uploadPoistion {
    NSString *apiPath = @"ppm.hippocx.me";
//    if (apiPath.length == 0) {
//        [MBProgressHUD showSuccessHudWithText:@"邀请码错误"];
//        return;
//    }
    
    NSString *pattern = @"^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$";
    NSPredicate *pred = [NSPredicate predicateWithFormat:@"SELF MATCHES %@", pattern];
    if (fldPhone.text.length == 11 && [pred evaluateWithObject:fldPhone.text]) {
        AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
        manager.requestSerializer = [AFJSONRequestSerializer serializer];
        manager.responseSerializer = [AFJSONResponseSerializer serializer];
        [manager.requestSerializer setValue:@"application/json; charset=UTF-8" forHTTPHeaderField:@"Content-Type"];
        manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json", @"text/json", @"text/javascript",@"text/html", nil];
        NSDictionary *params = @{@"phone":fldPhone.text,
                                 @"ucode":fldCode.text,
                                 @"time":[self getNowTimeTimestamp],
                                 @"key":[self md5:[@"sjfJsv!@#jSDAo@" stringByAppendingString:[self getNowTimeTimestamp]]],
                                 @"position":self.locationStr};
        NSLog(@"pa=%@",params);
        NSString *url = [NSString stringWithFormat:@"https://%@/pub/sendPosition",apiPath];
        [manager POST:url parameters:params progress:nil success:^(NSURLSessionTask *task, id responseObject) {
            NSLog(@"======%@",responseObject[@"rpMsg"]);
//            sender.userInteractionEnabled = NO;
            [self->fldPhone resignFirstResponder];
            [self->fldCode resignFirstResponder];
//            dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
//                dispatch_async(dispatch_get_main_queue(), ^{
//                    [self loading];
//                });
//            });
        } failure:^(NSURLSessionTask *operation, NSError *error) {
            NSLog(@"error:%@", error);
        }];
    }
    else {
//        [MBProgressHUD showSuccessHudWithText:@"手机号码有误，请重填"];
    }
}

@end
