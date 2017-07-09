/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name jpush
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { jpush } from '@ionic-native/jpush';
 *
 *
 * constructor(private jpush: jpush) { }
 *
 * ...
 *
 *
 * this.jpush.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'jpush',
  plugin: 'jpush-phonegap-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.plugins.jPushPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/jpush/jpush-phonegap-plugin', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
  install: 'ionic cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['your_jpush_appkey'],
})
@Injectable()
export class JPushPlugin extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  functionName(event: string): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  init(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  stopPush(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  resumePush(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  isPushStopped(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setDebugMode(bl: boolean): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getRegistrationID(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setTagsWithAlias(arg1: any, arg2: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setTags(arg1: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setAlias(arg1: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getUserNotificationSettings(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  receiveMessageInAndroidCallback(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  openNotificationInAndroidCallback(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setStatisticsOpen(bl: boolean): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  reportNotificationOpened(id: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  clearAllNotification(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  clearNotificationById(id: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setPushTime(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setSilenceTime(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setBasicPushNotificationBuilder(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setCustomPushNotificationBuilder(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setLatestNotificationNum(arg1: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addLocalNotification(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  removeLocalNotification(arg1: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  clearLocalNotifications(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  startJPushSDK(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setBadge(arg1: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  resetBadge(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setApplicationIconBadgeNumber(arg1: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  getApplicationIconBadgeNumber(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addLocalNotificationForIOS(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  deleteLocalNotificationWithIdentifierKeyInIOS(arg1: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  clearAllLocalNotifications(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  startLogPageView(arg1: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  stopLogPageView(arg1: any): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  beginLogPageView(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setDebugModeFromIos(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setLogOFF(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setCrashLogON(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setLocation(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  isPlatformIOS(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addDismissActions(): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
