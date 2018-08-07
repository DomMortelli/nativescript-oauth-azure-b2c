"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("tns-core-modules/application");
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
exports.endsWith = endsWith;
function nsArrayToJSArray(a) {
    var arr = [];
    if ("undefined" !== typeof a) {
        var count = a.count;
        for (var i = 0; i < count; i++) {
            arr.push(a.objectAtIndex(i));
        }
    }
    return arr;
}
exports.nsArrayToJSArray = nsArrayToJSArray;
function newUUID(a, b) { for (b = a = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-')
    ; return b; }
exports.newUUID = newUUID;
var appSuspending = false;
application_1.on(application_1.suspendEvent, function () { appSuspending = true; });
application_1.on(application_1.resumeEvent, function () { appSuspending = false; });
function isAppSuspending() {
    return appSuspending;
}
exports.isAppSuspending = isAppSuspending;
