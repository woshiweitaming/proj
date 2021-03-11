//
//  MBProgressHUD+Add.h
//  视频客户端
//
//  Created by mj on 13-4-18.
//  Copyright (c) 2013年 itcast. All rights reserved.
//

#import "MBProgressHUD.h"

@interface MBProgressHUD (Add)

//  操作成功时展现提示文本为text的HUD,当HUD消失时回调succesBlock
+ (void)showSuccessHudWithText:(NSString *)text finshed:(void(^)())succesBlock;


+ (void)showSuccessHudWithText:(NSString *)text;

//  操作失败时展现提示文本为text的HUD
+ (void)showFailuredHudWithText:(NSString *)text;

//+ (void)showProgressHudWithProgress:(CGFloat)progress beginningText:(NSString *)beginningText finishedText:(NSString *)finishedText finshed:(void(^)())succesBlock;

@end
