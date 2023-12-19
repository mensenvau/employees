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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkAuth: () => (/* binding */ checkAuth),\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n\nasync function encode(payload, secret1) {\n    const iat = Math.floor(Date.now() / 1000);\n    const exp = iat + 60 * 60; // one hour\n    return new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT({\n        ...payload\n    }).setProtectedHeader({\n        alg: \"HS256\",\n        typ: \"JWT\"\n    }).setExpirationTime(exp).setIssuedAt(iat).setNotBefore(iat).sign(new TextEncoder().encode(secret1));\n}\nasync function decode(token) {\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, new TextEncoder().encode(secret));\n    console.log(payload);\n    return payload;\n}\nfunction checkAuth(token) {\n    console.log(token);\n    try {\n        let verify = decode(token);\n        if (!verify) throw new Error();\n        console.log(\"part 1:\", token, verify);\n        return 1;\n    } catch (err) {\n        console.log(\"part 2\", token, err.message);\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbGliL2p3dC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJEO0FBRXBELGVBQWVFLE9BQU9DLE9BQVksRUFBRUMsT0FBYztJQUNyRCxNQUFNQyxNQUFNQyxLQUFLQyxLQUFLLENBQUNDLEtBQUtDLEdBQUcsS0FBSztJQUNwQyxNQUFNQyxNQUFNTCxNQUFNLEtBQUssSUFBSSxXQUFXO0lBRXRDLE9BQU8sSUFBSUwseUNBQU9BLENBQUM7UUFBRSxHQUFHRyxPQUFPO0lBQUMsR0FDM0JRLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7UUFBU0MsS0FBSztJQUFNLEdBQzlDQyxpQkFBaUIsQ0FBQ0osS0FDbEJLLFdBQVcsQ0FBQ1YsS0FDWlcsWUFBWSxDQUFDWCxLQUNiWSxJQUFJLENBQUMsSUFBSUMsY0FBY2hCLE1BQU0sQ0FBQ0U7QUFDdkM7QUFFTyxlQUFlZSxPQUFPQyxLQUFhO0lBQ3RDLE1BQU0sRUFBRWpCLE9BQU8sRUFBRSxHQUFHLE1BQU1GLCtDQUFTQSxDQUFDbUIsT0FBTyxJQUFJRixjQUFjaEIsTUFBTSxDQUFDRTtJQUNwRWlCLFFBQVFDLEdBQUcsQ0FBQ25CO0lBQ1osT0FBT0E7QUFDWDtBQUVPLFNBQVNvQixVQUFVSCxLQUFVO0lBQ2hDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osSUFBSTtRQUNBLElBQUlJLFNBQVNMLE9BQU9DO1FBQ3BCLElBQUksQ0FBQ0ksUUFBUSxNQUFNLElBQUlDO1FBQ3ZCSixRQUFRQyxHQUFHLENBQUMsV0FBV0YsT0FBT0k7UUFDOUIsT0FBTztJQUNYLEVBQUUsT0FBT0UsS0FBVTtRQUNmTCxRQUFRQyxHQUFHLENBQUMsVUFBVUYsT0FBT00sSUFBSUMsT0FBTztRQUN4QyxPQUFPO0lBQ1g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvand0LnRzP2VhMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5LCB0eXBlIEpXVFBheWxvYWQgfSBmcm9tICdqb3NlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuY29kZShwYXlsb2FkOiBhbnksIHNlY3JldDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBpYXQgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgICBjb25zdCBleHAgPSBpYXQgKyA2MCAqIDYwOyAvLyBvbmUgaG91clxuXG4gICAgcmV0dXJuIG5ldyBTaWduSldUKHsgLi4ucGF5bG9hZCB9KVxuICAgICAgICAuc2V0UHJvdGVjdGVkSGVhZGVyKHsgYWxnOiAnSFMyNTYnLCB0eXA6ICdKV1QnIH0pXG4gICAgICAgIC5zZXRFeHBpcmF0aW9uVGltZShleHApXG4gICAgICAgIC5zZXRJc3N1ZWRBdChpYXQpXG4gICAgICAgIC5zZXROb3RCZWZvcmUoaWF0KVxuICAgICAgICAuc2lnbihuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc2VjcmV0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWNvZGUodG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkodG9rZW4sIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzZWNyZXQpKTtcbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxuICAgIHJldHVybiBwYXlsb2FkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBdXRoKHRva2VuOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyh0b2tlbilcbiAgICB0cnkge1xuICAgICAgICBsZXQgdmVyaWZ5ID0gZGVjb2RlKHRva2VuKVxuICAgICAgICBpZiAoIXZlcmlmeSkgdGhyb3cgbmV3IEVycm9yKClcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJ0IDE6XCIsIHRva2VuLCB2ZXJpZnkpXG4gICAgICAgIHJldHVybiAxXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJ0IDJcIiwgdG9rZW4sIGVyci5tZXNzYWdlKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiU2lnbkpXVCIsImp3dFZlcmlmeSIsImVuY29kZSIsInBheWxvYWQiLCJzZWNyZXQiLCJpYXQiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiZXhwIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwidHlwIiwic2V0RXhwaXJhdGlvblRpbWUiLCJzZXRJc3N1ZWRBdCIsInNldE5vdEJlZm9yZSIsInNpZ24iLCJUZXh0RW5jb2RlciIsImRlY29kZSIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImNoZWNrQXV0aCIsInZlcmlmeSIsIkVycm9yIiwiZXJyIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./lib/jwt.ts\n");

/***/ })

});