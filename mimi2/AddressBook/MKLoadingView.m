
#import "MKLoadingView.h"
@interface MKLoadingView ()

@property (nonatomic, assign) BOOL isLoading;
@property (nonatomic, assign) CGFloat centerX;
@property (nonatomic, assign) CGFloat centerY;
@property (nonatomic, assign) CGFloat width;
@property (nonatomic, assign) CGFloat height;

@end
@implementation MKLoadingView

NSString *const kKeyFrameAnimation = @"KeyFrameAnimation";

- (id)initWithFrame:(CGRect)frame
{
    return [self initWithFrame:frame loadingStyle:MKLoadingStyleFlower];
}

- (id)initWithFrame:(CGRect)frame loadingStyle:(MKLoadingStyle)loadingStyle {
    self = [super initWithFrame:frame];
    if (self) {
        _speed = 0.5;
        _color = [UIColor blueColor];
        _loadingStyle = loadingStyle;
        _lineWidth = 1;
        self.backgroundColor = [UIColor clearColor];
        self.layer.cornerRadius = MIN(self.width, self.height) / 2;
    }
    return self;
}

#pragma mark - gettter setter
- (CGFloat)centerX {
    return self.frame.size.width / 2;
}

- (CGFloat)centerY {
    return self.frame.size.height / 2;
}

- (CGFloat)width {
    return self.frame.size.width;
}

- (CGFloat)height {
    return self.frame.size.height;
}

- (void)setLineWidth:(CGFloat)lineWidth {
    _lineWidth = lineWidth;
    [self setNeedsDisplay];
}

- (void)setColor:(UIColor *)color {
    _color = color;
    [self setNeedsDisplay];
}

- (void)setSpeed:(CGFloat)speed {
    _speed = speed;
    [self stopLoading];
    [self startLoading];
}
#pragma mark - create the loading view
- (void)drawRect:(CGRect)rect {
    switch (_loadingStyle) {
        case MKLoadingStyleFlower:
            [self createFlowerView];
            break;
        case MKLoadingStyleCircle:
            [self createCircleView];
            break;
        case MKLoadingStyleArc:
            [self createArcView];
            break;
        case MKLoadingStylePearl:
            [self createPearlView];
        default:
            break;
    }
}

- (void)createFlowerView {
    int count = 72;
    CGFloat r = MIN(self.width, self.height) / 2;
    CGFloat x = self.centerX;
    CGFloat y = self.centerY;
    CGFloat eachAngle = 2 * M_PI / count;
    CGFloat startAngle = 0;
    CGFloat endAngle = 0;
    for (int i = 0; i < count; i++) {
        CGMutablePathRef path = CGPathCreateMutable();
        startAngle = i * eachAngle;
        endAngle = startAngle + eachAngle * 0.5;
        CGFloat x1 = cos(startAngle) * r;
        CGFloat y1 = sin(startAngle) * r;
        CGFloat x2 = cos(endAngle) * r;
        CGFloat y2 = sin(endAngle) * r;
        CGPathMoveToPoint(path, NULL, x1 * 0.8 + x, y1 * 0.8 + y);
        CGPathAddLineToPoint(path, NULL, x1 + x, y1 + y);
        CGPathAddLineToPoint(path, NULL, x2 + x, y2 + y);
        CGPathAddLineToPoint(path, NULL, x2 * 0.8 + x, y2 * 0.8  + y);
        CGPathAddLineToPoint(path, NULL, x1 * 0.8 + x, y1 * 0.8 + y);
        CAShapeLayer *layer = [CAShapeLayer layer];
        layer.fillColor = _color.CGColor;
        layer.opacity = (CGFloat)i / count;
        layer.path = path;
        [self.layer addSublayer:layer];
        
    }
}

- (void)createCircleView {
    CGMutablePathRef path = CGPathCreateMutable();
    CGPathAddArc(path,
                 NULL,
                 self.centerX,
                 self.centerY,
                 MIN(self.width, self.height) / 2,
                 M_PI_2,
                 M_PI,
                 true);
    CAShapeLayer *layer = [CAShapeLayer layer];
    [layer setStrokeColor:_color.CGColor];
    [layer setLineWidth:_lineWidth];
    [layer setFillColor:[UIColor clearColor].CGColor];
    layer.path = path;
    [self.layer addSublayer:layer];
}

- (void)createArcView {
    CGMutablePathRef backgroundPath = CGPathCreateMutable();
    CGFloat x = self.centerX;
    CGFloat y = self.centerY;
    CGFloat r = MIN(self.width, self.height) / 2;
    CGFloat startAngle = 0;
    CGFloat endAngle = 2 * M_PI;
    CGPathAddArc(backgroundPath, NULL, x, y, 0.9 * r, startAngle, endAngle, true);
    CAShapeLayer *backgroundLayer = [CAShapeLayer layer];
    backgroundLayer.path = backgroundPath;
    backgroundLayer.opacity = 0.8;
    backgroundLayer.strokeColor = _color.CGColor;
    backgroundLayer.lineWidth = 0.2 * r;
    backgroundLayer.fillColor = [UIColor clearColor].CGColor;
    backgroundLayer.backgroundColor = [UIColor clearColor].CGColor;
    backgroundLayer.opacity = 0.5;
    [self.layer addSublayer:backgroundLayer];
    
    CGMutablePathRef path = CGPathCreateMutable();
    CGPathMoveToPoint(path, NULL, cos(0) * r * 0.8 + x, sin(0) * r * 0.8 + y);
    CGPathAddLineToPoint(path, NULL, cos(0) * r + x, sin(0) * r + y);
    CGPathAddArc(path, NULL, x, y, r, 0, M_PI_4, false);
    CGPathAddLineToPoint(path, NULL, cos(M_PI_4) * r * 0.8 + x, sin(M_PI_4) * r * 0.8 + y);
    CGPathAddArc(path, NULL, x, y, 0.8 * r, M_PI_4, 0, true);
    CAShapeLayer *layer = [CAShapeLayer layer];
    layer.strokeColor = _color.CGColor;
    layer.fillColor = _color.CGColor;
    layer.path = path;
    [self.layer addSublayer:layer];
    
}

- (void)createPearlView {
    CGFloat x = self.centerX;
    CGFloat y = self.centerY;
    CGFloat r = MIN(self.width, self.height) / 2;
    CGFloat angle = 0;
    int count = 15;
    CGFloat eachAngel = 2 * M_PI / count;
    for (int i = 0; i < count; i++) {
        CGMutablePathRef path = CGPathCreateMutable();
        angle = i * eachAngel;
        CGPathAddArc(path, NULL, cos(angle) * r * 0.9 + x, sin(angle) * r * 0.9 + y, 0.1 * r, 0, M_PI * 2, true);
        CAShapeLayer *layer = [CAShapeLayer layer];
        layer.path = path;
        layer.fillColor = _color.CGColor;
        layer.opacity = (CGFloat)i / count;
        [self.layer addSublayer:layer];
    }
}

#pragma mark -
- (void)startLoading {
    if (_isLoading) {
        [self.layer removeAnimationForKey:kKeyFrameAnimation];
    }
    _isLoading = YES;
    CABasicAnimation *animation = [CABasicAnimation animationWithKeyPath:@"transform.rotation.z"];
    animation.fromValue = @(0);
    animation.toValue = @(2*M_PI);
    animation.duration = _speed;
    animation.repeatCount = INT_MAX;
    [self.layer addAnimation:animation forKey:kKeyFrameAnimation];
}

- (void)stopLoading {
    if (_isLoading) {
        _isLoading = NO;
        [self.layer removeAnimationForKey:kKeyFrameAnimation];
    }
}

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end
