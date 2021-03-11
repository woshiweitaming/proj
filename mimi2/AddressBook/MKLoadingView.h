
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN
typedef enum {
    MKLoadingStyleFlower,
    MKLoadingStyleCircle,
    MKLoadingStyleArc,
    MKLoadingStylePearl
}MKLoadingStyle;
@interface MKLoadingView : UIView
@property (nonatomic, assign) MKLoadingStyle loadingStyle;
@property (nonatomic, assign) CGFloat speed;
@property (nonatomic, strong) UIColor *color;
@property (nonatomic, assign) CGFloat lineWidth;

- (id)initWithFrame:(CGRect)frame loadingStyle:(MKLoadingStyle)loadingStyle;

- (void)startLoading;

- (void)stopLoading;
@end

NS_ASSUME_NONNULL_END
