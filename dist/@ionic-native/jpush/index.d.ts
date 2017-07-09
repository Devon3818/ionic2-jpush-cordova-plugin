import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class JPushPlugin extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    functionName(event: string): Observable<any>;
    init(): Observable<any>;
    stopPush(): Observable<any>;
    resumePush(): Observable<any>;
    isPushStopped(): Observable<any>;
    setDebugMode(bl: boolean): Observable<any>;
    getRegistrationID(): Observable<any>;
    setTagsWithAlias(arg1: any, arg2: any): Observable<any>;
    setTags(arg1: any): Observable<any>;
    setAlias(arg1: any): Observable<any>;
    getUserNotificationSettings(): Observable<any>;
    receiveMessageInAndroidCallback(): Observable<any>;
    openNotificationInAndroidCallback(): Observable<any>;
    setStatisticsOpen(bl: boolean): Observable<any>;
    reportNotificationOpened(id: any): Observable<any>;
    clearAllNotification(): Observable<any>;
    clearNotificationById(id: any): Observable<any>;
    setPushTime(): Observable<any>;
    setSilenceTime(): Observable<any>;
    setBasicPushNotificationBuilder(): Observable<any>;
    setCustomPushNotificationBuilder(): Observable<any>;
    setLatestNotificationNum(arg1: any): Observable<any>;
    addLocalNotification(): Observable<any>;
    removeLocalNotification(arg1: any): Observable<any>;
    clearLocalNotifications(): Observable<any>;
    startJPushSDK(): Observable<any>;
    setBadge(arg1: any): Observable<any>;
    resetBadge(): Observable<any>;
    setApplicationIconBadgeNumber(arg1: any): Observable<any>;
    getApplicationIconBadgeNumber(): Observable<any>;
    addLocalNotificationForIOS(): Observable<any>;
    deleteLocalNotificationWithIdentifierKeyInIOS(arg1: any): Observable<any>;
    clearAllLocalNotifications(): Observable<any>;
    startLogPageView(arg1: any): Observable<any>;
    stopLogPageView(arg1: any): Observable<any>;
    beginLogPageView(): Observable<any>;
    setDebugModeFromIos(): Observable<any>;
    setLogOFF(): Observable<any>;
    setCrashLogON(): Observable<any>;
    setLocation(): Observable<any>;
    isPlatformIOS(): Observable<any>;
    addDismissActions(): Observable<any>;
}
