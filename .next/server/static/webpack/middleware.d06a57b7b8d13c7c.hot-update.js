"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./lib/jwt.ts":
/*!********************!*\
  !*** ./lib/jwt.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkAuth: () => (/* binding */ checkAuth),\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n\nasync function encode(payload) {\n    const iat = Math.floor(Date.now() / 1000);\n    const exp = iat + 60 * 60; // one hour\n    return new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT({\n        ...payload\n    }).setProtectedHeader({\n        alg: \"HS256\",\n        typ: \"JWT\"\n    }).setExpirationTime(exp).setIssuedAt(iat).setNotBefore(iat).sign(new TextEncoder().encode(process.env.KEY));\n}\nasync function decode(token) {\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, new TextEncoder().encode(process.env.KEY));\n    console.log(payload);\n    return payload;\n}\nfunction checkAuth(token) {\n    console.log(token);\n    try {\n        let verify = decode(token);\n        if (!verify) throw new Error();\n        console.log(\"part 1:\", token, verify);\n        return 1;\n    } catch (err) {\n        console.log(\"part 2\", token, err.message);\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbGliL2p3dC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJEO0FBRXBELGVBQWVFLE9BQU9DLE9BQVk7SUFDckMsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDQyxLQUFLQyxHQUFHLEtBQUs7SUFDcEMsTUFBTUMsTUFBTUwsTUFBTSxLQUFLLElBQUksV0FBVztJQUV0QyxPQUFPLElBQUlKLHlDQUFPQSxDQUFDO1FBQUUsR0FBR0csT0FBTztJQUFDLEdBQzNCTyxrQkFBa0IsQ0FBQztRQUFFQyxLQUFLO1FBQVNDLEtBQUs7SUFBTSxHQUM5Q0MsaUJBQWlCLENBQUNKLEtBQ2xCSyxXQUFXLENBQUNWLEtBQ1pXLFlBQVksQ0FBQ1gsS0FDYlksSUFBSSxDQUFDLElBQUlDLGNBQWNmLE1BQU0sQ0FBQ2dCLFFBQVFDLEdBQUcsQ0FBQ0MsR0FBRztBQUN0RDtBQUVPLGVBQWVDLE9BQU9DLEtBQWE7SUFDdEMsTUFBTSxFQUFFbkIsT0FBTyxFQUFFLEdBQUcsTUFBTUYsK0NBQVNBLENBQUNxQixPQUFPLElBQUlMLGNBQWNmLE1BQU0sQ0FBQ2dCLFFBQVFDLEdBQUcsQ0FBQ0MsR0FBRztJQUNuRkcsUUFBUUMsR0FBRyxDQUFDckI7SUFDWixPQUFPQTtBQUNYO0FBRU8sU0FBU3NCLFVBQVVILEtBQVU7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixJQUFJO1FBQ0EsSUFBSUksU0FBU0wsT0FBT0M7UUFDcEIsSUFBSSxDQUFDSSxRQUFRLE1BQU0sSUFBSUM7UUFDdkJKLFFBQVFDLEdBQUcsQ0FBQyxXQUFXRixPQUFPSTtRQUM5QixPQUFPO0lBQ1gsRUFBRSxPQUFPRSxLQUFVO1FBQ2ZMLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRixPQUFPTSxJQUFJQyxPQUFPO1FBQ3hDLE9BQU87SUFDWDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9qd3QudHM/ZWEyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWduSldULCBqd3RWZXJpZnksIHR5cGUgSldUUGF5bG9hZCB9IGZyb20gJ2pvc2UnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5jb2RlKHBheWxvYWQ6IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgaWF0ID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgY29uc3QgZXhwID0gaWF0ICsgNjAgKiA2MDsgLy8gb25lIGhvdXJcblxuICAgIHJldHVybiBuZXcgU2lnbkpXVCh7IC4uLnBheWxvYWQgfSlcbiAgICAgICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogJ0hTMjU2JywgdHlwOiAnSldUJyB9KVxuICAgICAgICAuc2V0RXhwaXJhdGlvblRpbWUoZXhwKVxuICAgICAgICAuc2V0SXNzdWVkQXQoaWF0KVxuICAgICAgICAuc2V0Tm90QmVmb3JlKGlhdClcbiAgICAgICAgLnNpZ24obmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHByb2Nlc3MuZW52LktFWSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVjb2RlKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgand0VmVyaWZ5KHRva2VuLCBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuS0VZKSk7XG4gICAgY29uc29sZS5sb2cocGF5bG9hZClcbiAgICByZXR1cm4gcGF5bG9hZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXV0aCh0b2tlbjogYW55KSB7XG4gICAgY29uc29sZS5sb2codG9rZW4pXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHZlcmlmeSA9IGRlY29kZSh0b2tlbilcbiAgICAgICAgaWYgKCF2ZXJpZnkpIHRocm93IG5ldyBFcnJvcigpXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFydCAxOlwiLCB0b2tlbiwgdmVyaWZ5KVxuICAgICAgICByZXR1cm4gMVxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFydCAyXCIsIHRva2VuLCBlcnIubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlNpZ25KV1QiLCJqd3RWZXJpZnkiLCJlbmNvZGUiLCJwYXlsb2FkIiwiaWF0IiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImV4cCIsInNldFByb3RlY3RlZEhlYWRlciIsImFsZyIsInR5cCIsInNldEV4cGlyYXRpb25UaW1lIiwic2V0SXNzdWVkQXQiLCJzZXROb3RCZWZvcmUiLCJzaWduIiwiVGV4dEVuY29kZXIiLCJwcm9jZXNzIiwiZW52IiwiS0VZIiwiZGVjb2RlIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwiY2hlY2tBdXRoIiwidmVyaWZ5IiwiRXJyb3IiLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./lib/jwt.ts\n");

/***/ })

});