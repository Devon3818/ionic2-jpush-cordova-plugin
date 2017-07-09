# @Ionic-Native-Cordova-Plugin

支持 iOS, Android 的 Cordova 极光推送插件( ionic2/3  @ionic-native📦封装)。

## Install

- 通过 Cordova Plugins 安装，要求 Cordova CLI 5.0+：

	```
	ionic cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey
	```

- 或直接通过 url 安装：

	```
	ionic cordova plugin add https://github.com/jpush/jpush-phonegap-plugin.git --variable APP_KEY=your_jpush_appkey  
	```


## Usage
### API
- [Common](/doc/Common_detail_api.md)
- [iOS](/doc/iOS_API.md)
- [Android](/doc/Android_detail_api.md)

# Usage

The dist directory will contain a sub directory @ionic-native with all the packages compiled in there. Copy the package(s) you created/modified to your app's node_modules under the @ionic-native directory. (e.g. cp -r dist/@ionic-native/plugin-name ../my-app/node_modules/@ionic-native/).

⚠️⚠️ 将 dist/@ionic-native 的 jpush文件夹复制到 ionic2项目的 node_modules/@ionic-native/ 下

```
Add Plugins to Your App's Module

After installing a plugin’s package, add it to your app’s NgModule.


...

import { JPushPlugin } from '@ionic-native/jpush';

...

@NgModule({
  ...

  providers: [
    ...
    JPushPlugin
    ...
  ]
  ...
})
export class AppModule { }

```

```
import { JPushPlugin } from '@ionic-native/jpush';

constructor(public jpush: JPushPlugin) {
	this.init();
	//延迟执行，等极光完全初始化
	setTimeout(()=>{
		this.setAlias( "Alias" );
	},300)
}

init(){
    //初始化极光
    this.jpush.init();
    
    //收到通知时会触发该事件。
    document.addEventListener("jpush.receiveNotification", function (event) {
        alert( JSON.stringify( event ) );
    }, false);
    
}

//绑定别名
setAlias( Alias : string ){
	jpush.setAlias( Alias ).then((res)=>{
        	alert( JSON.stringify(res) );
      	}).catch((err)=>{
        	alert( JSON.stringify(err) );
      	});
}

............

...


```

## Support
- QQ 群：513752928


