# JPush PhoneGap / Cordova Plugin

[![Build Status](https://travis-ci.org/jpush/jpush-phonegap-plugin.svg?branch=master)](https://travis-ci.org/jpush/jpush-phonegap-plugin)
[![release](https://img.shields.io/badge/release-3.2.1-blue.svg)](https://github.com/jpush/jpush-phonegap-plugin/releases)
[![platforms](https://img.shields.io/badge/platforms-iOS%7CAndroid-lightgrey.svg)](https://github.com/jpush/jpush-phonegap-plugin)
[![weibo](https://img.shields.io/badge/weibo-JPush-blue.svg)](http://weibo.com/jpush?refer_flag=1001030101_&is_all=1)

支持 iOS, Android 的 Cordova 推送插件。
> 如需要 IM 功能的插件，可关注 [JMessage Cordova Plugin](https://github.com/jpush/jmessage-phonegap-plugin)。
> 如需要短信验证码功能的插件，可关注 [JSMS Cordova Plugin](https://github.com/jpush/cordova-plugin-jsms)。

## Install

- 通过 Cordova Plugins 安装，要求 Cordova CLI 5.0+：

	```
	cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey
	```

- 或直接通过 url 安装：

	```
	cordova plugin add https://github.com/jpush/jpush-phonegap-plugin.git --variable APP_KEY=your_jpush_appkey  
	```

- 或下载到本地安装：

	```
	cordova plugin add Your_Plugin_Path  --variable APP_KEY=your_jpush_appkey
	```

> 在使用 Xcode 8 调试 iOS 项目时，需要先在项目配置界面的 Capabilities 中打开 Push Notifications 开关。

## Usage
### API
- [Common](/doc/Common_detail_api.md)
- [iOS](/doc/iOS_API.md)
- [Android](/doc/Android_detail_api.md)


## Support
- QQ 群：513752928


