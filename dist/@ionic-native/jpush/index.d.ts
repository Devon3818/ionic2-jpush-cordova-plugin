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
    init(): Promise<any>;
    stopPush(): Promise<any>;
    resumePush(): Promise<any>;
    isPushStopped(): Promise<any>;
    setDebugMode(bl: boolean): void;
    getRegistrationID(): Promise<any>;
    setTagsWithAlias(arg1: any, arg2: any): Promise<any>;
    setTags(arg1: any): Promise<any>;
    setAlias(arg1: any): Promise<any>;
    getUserNotificationSettings(): Promise<any>;
    receiveMessageInAndroidCallback(): Promise<any>;
    openNotificationInAndroidCallback(): Promise<any>;
    setStatisticsOpen(bl: boolean): void;
    reportNotificationOpened(id: any): void;
    clearAllNotification(): void;
    clearNotificationById(id: any): void;
    setPushTime(arg1: any, arg2: any, arg3: any): void;
    setSilenceTime(arg1: any, arg2: any, arg3: any, arg4: any): void;
    setBasicPushNotificationBuilder(): void;
    setCustomPushNotificationBuilder(): void;
    setLatestNotificationNum(arg1: any): void;
    addLocalNotification(arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, arg6: any): void;
    removeLocalNotification(arg1: any): void;
    clearLocalNotifications(): void;
    startJPushSDK(): void;
    setBadge(arg1: any): void;
    resetBadge(): void;
    setApplicationIconBadgeNumber(arg1: any): void;
    getApplicationIconBadgeNumber(): Promise<any>;
    addLocalNotificationForIOS(arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): void;
    deleteLocalNotificationWithIdentifierKeyInIOS(arg1: any): void;
    clearAllLocalNotifications(): void;
    startLogPageView(arg1: any): void;
    stopLogPageView(arg1: any): void;
    beginLogPageView(arg1: any, arg2: any): void;
    setDebugModeFromIos(): void;
    setLogOFF(): void;
    setCrashLogON(): void;
    setLocation(arg1: any, arg2: any): void;
    isPlatformIOS(): void;
    addDismissActions(arg1: any, arg2: any): void;
}
