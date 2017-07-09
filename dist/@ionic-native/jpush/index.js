var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var JPushPlugin = (function (_super) {
    __extends(JPushPlugin, _super);
    function JPushPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    JPushPlugin.prototype.functionName = function (event) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.init = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.stopPush = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.resumePush = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.isPushStopped = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setDebugMode = function (bl) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.getRegistrationID = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setTagsWithAlias = function (arg1, arg2) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setTags = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setAlias = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.getUserNotificationSettings = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.receiveMessageInAndroidCallback = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.openNotificationInAndroidCallback = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setStatisticsOpen = function (bl) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.reportNotificationOpened = function (id) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.clearAllNotification = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.clearNotificationById = function (id) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setPushTime = function (arg1, arg2, arg3) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setSilenceTime = function (arg1, arg2, arg3, arg4) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setBasicPushNotificationBuilder = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setCustomPushNotificationBuilder = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setLatestNotificationNum = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.addLocalNotification = function (arg1, arg2, arg3, arg4, arg5, arg6) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.removeLocalNotification = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.clearLocalNotifications = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.startJPushSDK = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setBadge = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.resetBadge = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setApplicationIconBadgeNumber = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.getApplicationIconBadgeNumber = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.addLocalNotificationForIOS = function (arg1, arg2, arg3, arg4, arg5) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.deleteLocalNotificationWithIdentifierKeyInIOS = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.clearAllLocalNotifications = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.startLogPageView = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.stopLogPageView = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.beginLogPageView = function (arg1, arg2) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setDebugModeFromIos = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setLogOFF = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setCrashLogON = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.setLocation = function (arg1, arg2) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.isPlatformIOS = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JPushPlugin.prototype.addDismissActions = function (arg1, arg2) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return JPushPlugin;
}(IonicNativePlugin));
JPushPlugin.decorators = [
    { type: Injectable },
];
/** @nocollapse */
JPushPlugin.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], JPushPlugin.prototype, "functionName", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "init", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "stopPush", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "resumePush", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "isPushStopped", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setDebugMode", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "getRegistrationID", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "setTagsWithAlias", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "setTags", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "setAlias", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "getUserNotificationSettings", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "receiveMessageInAndroidCallback", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "openNotificationInAndroidCallback", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setStatisticsOpen", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "reportNotificationOpened", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "clearAllNotification", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "clearNotificationById", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setPushTime", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setSilenceTime", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setBasicPushNotificationBuilder", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setCustomPushNotificationBuilder", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setLatestNotificationNum", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "addLocalNotification", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "removeLocalNotification", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "clearLocalNotifications", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "startJPushSDK", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setBadge", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "resetBadge", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setApplicationIconBadgeNumber", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JPushPlugin.prototype, "getApplicationIconBadgeNumber", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "addLocalNotificationForIOS", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "deleteLocalNotificationWithIdentifierKeyInIOS", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "clearAllLocalNotifications", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "startLogPageView", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "stopLogPageView", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "beginLogPageView", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setDebugModeFromIos", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setLogOFF", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setCrashLogON", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "setLocation", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "isPlatformIOS", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], JPushPlugin.prototype, "addDismissActions", null);
JPushPlugin = __decorate([
    Plugin({
        pluginName: 'jpush',
        plugin: 'jpush-phonegap-plugin',
        pluginRef: 'window.plugins.jPushPlugin',
        repo: 'https://github.com/jpush/jpush-phonegap-plugin',
        platforms: ['Android', 'iOS'],
        install: 'ionic cordova plugin add jpush-phonegap-plugin --variable APP_KEY=your_jpush_appkey',
        installVariables: ['your_jpush_appkey'],
    })
], JPushPlugin);
export { JPushPlugin };
//# sourceMappingURL=index.js.map