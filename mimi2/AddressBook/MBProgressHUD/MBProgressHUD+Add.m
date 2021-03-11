//
//  MBProgressHUD+Add.m
//  视频客户端
//
//  Created by mj on 13-4-18.
//  Copyright (c) 2013年 itcast. All rights reserved.
//

#import "MBProgressHUD+Add.h"

@implementation MBProgressHUD (Add)

+ (void)showSuccessHudWithText:(NSString *)text finshed:(void(^)())succesBlock {
    MBProgressHUD *hud = [[MBProgressHUD alloc] initWithWindow:[[UIApplication sharedApplication] keyWindow]];
    hud.mode = MBProgressHUDModeCustomView;
    hud.customView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:(@"tabar_discovery")]];
    [[[UIApplication sharedApplication] keyWindow] addSubview:hud];
    hud.detailsLabelText = text;
    [hud show:YES];
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        [ hud showAnimated:YES whileExecutingBlock:^{
        } completionBlock:^{
            succesBlock(nil);
        }];
    });
}

+ (void)showSuccessHudWithText:(NSString *)text {
    MBProgressHUD *hud = [[MBProgressHUD alloc] initWithWindow:[[UIApplication sharedApplication] keyWindow]];
    hud.mode = MBProgressHUDModeCustomView;
    hud.customView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:(@"tabar_discovery")]];
    [[[UIApplication sharedApplication] keyWindow] addSubview:hud];
    hud.labelText = text;
    [hud show:YES];
    [hud hide:YES afterDelay:1];
}

+ (void)showFailuredHudWithText:(NSString *)text {
    MBProgressHUD *hud = [[MBProgressHUD alloc] initWithWindow:[[UIApplication sharedApplication] keyWindow]];
    hud.mode = MBProgressHUDModeCustomView;
    hud.customView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:(@"tabar_discovery")]];
    [[[UIApplication sharedApplication] keyWindow] addSubview:hud];
    hud.labelText = text;
    [hud show:YES];
    [hud hide:YES afterDelay:1];
}

//+ (void)showProgressHudWithProgress:(CGFloat)progress beginningText:(NSString *)beginningText finishedText:(NSString *)finishedText finshed:(void(^)())succesBlock {
//    MBProgressHUD *hud = [[MBProgressHUD alloc] initWithWindow:[[UIApplication sharedApplication] keyWindow]];
//    UIProgressView *progressView = [[UIProgressView alloc] initWithFrame:CGRectMake(0, 0, 200, 20)];
//    hud.customView = progressView;
//    hud.mode = MBProgressHUDModeCustomView;
//    [[[UIApplication sharedApplication] keyWindow] addSubview:hud];
//    [hud show:YES];
//    hud.labelText = beginningText;
//    while (progressView.progress == 1) {
//        hud.labelText = finishedText;
//        [hud hide:YES afterDelay:kDuration];
//        succesBlock();
//        return;
//    }
//}

@end
