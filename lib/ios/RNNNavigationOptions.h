#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface RNNNavigationOptions : NSObject

@property (nonatomic, strong) NSNumber* topBarBackgroundColor;
@property (nonatomic, strong) NSNumber* topBarTextColor;
@property (nonatomic, strong) NSNumber* statusBarHidden;
@property (nonatomic, strong) NSString* title;
@property (nonatomic, strong) NSNumber* screenBackgroundColor;
@property (nonatomic, strong) NSString* topBarTextFontFamily;
@property (nonatomic, strong) NSNumber* topBarHidden;

-(instancetype)initWithDict:(NSDictionary *)navigationOptions;

-(void)apply:(UIViewController*)viewController;
-(void)setOptionsDynamically:(NSDictionary*)dynamicOptions;

@end

