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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkAuth: () => (/* binding */ checkAuth),\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n\nasync function encode(payload) {\n    const iat = Math.floor(Date.now() / 1000);\n    const exp = iat + 60 * 60; // one hour\n    return new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT({\n        ...payload\n    }).setProtectedHeader({\n        alg: \"HS256\",\n        typ: \"JWT\"\n    }).setExpirationTime(exp).setIssuedAt(iat).setNotBefore(iat).sign(new TextEncoder().encode(secret));\n}\nasync function decode(token) {\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, new TextEncoder().encode(secret));\n    console.log(payload);\n    return payload;\n}\nfunction checkAuth(token) {\n    console.log(token);\n    try {\n        let verify = decode(token);\n        if (!verify) throw new Error();\n        console.log(\"part 1:\", token, verify);\n        return 1;\n    } catch (err) {\n        console.log(\"part 2\", token, err.message);\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbGliL2p3dC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJEO0FBRXBELGVBQWVFLE9BQU9DLE9BQVk7SUFDckMsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDQyxLQUFLQyxHQUFHLEtBQUs7SUFDcEMsTUFBTUMsTUFBTUwsTUFBTSxLQUFLLElBQUksV0FBVztJQUV0QyxPQUFPLElBQUlKLHlDQUFPQSxDQUFDO1FBQUUsR0FBR0csT0FBTztJQUFDLEdBQzNCTyxrQkFBa0IsQ0FBQztRQUFFQyxLQUFLO1FBQVNDLEtBQUs7SUFBTSxHQUM5Q0MsaUJBQWlCLENBQUNKLEtBQ2xCSyxXQUFXLENBQUNWLEtBQ1pXLFlBQVksQ0FBQ1gsS0FDYlksSUFBSSxDQUFDLElBQUlDLGNBQWNmLE1BQU0sQ0FBQ2dCO0FBQ3ZDO0FBRU8sZUFBZUMsT0FBT0MsS0FBYTtJQUN0QyxNQUFNLEVBQUVqQixPQUFPLEVBQUUsR0FBRyxNQUFNRiwrQ0FBU0EsQ0FBQ21CLE9BQU8sSUFBSUgsY0FBY2YsTUFBTSxDQUFDZ0I7SUFDcEVHLFFBQVFDLEdBQUcsQ0FBQ25CO0lBQ1osT0FBT0E7QUFDWDtBQUVPLFNBQVNvQixVQUFVSCxLQUFVO0lBQ2hDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osSUFBSTtRQUNBLElBQUlJLFNBQVNMLE9BQU9DO1FBQ3BCLElBQUksQ0FBQ0ksUUFBUSxNQUFNLElBQUlDO1FBQ3ZCSixRQUFRQyxHQUFHLENBQUMsV0FBV0YsT0FBT0k7UUFDOUIsT0FBTztJQUNYLEVBQUUsT0FBT0UsS0FBVTtRQUNmTCxRQUFRQyxHQUFHLENBQUMsVUFBVUYsT0FBT00sSUFBSUMsT0FBTztRQUN4QyxPQUFPO0lBQ1g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvand0LnRzP2VhMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5LCB0eXBlIEpXVFBheWxvYWQgfSBmcm9tICdqb3NlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuY29kZShwYXlsb2FkOiBhbnkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IGlhdCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgIGNvbnN0IGV4cCA9IGlhdCArIDYwICogNjA7IC8vIG9uZSBob3VyXG5cbiAgICByZXR1cm4gbmV3IFNpZ25KV1QoeyAuLi5wYXlsb2FkIH0pXG4gICAgICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6ICdIUzI1NicsIHR5cDogJ0pXVCcgfSlcbiAgICAgICAgLnNldEV4cGlyYXRpb25UaW1lKGV4cClcbiAgICAgICAgLnNldElzc3VlZEF0KGlhdClcbiAgICAgICAgLnNldE5vdEJlZm9yZShpYXQpXG4gICAgICAgIC5zaWduKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzZWNyZXQpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlY29kZSh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbiwgbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHNlY3JldCkpO1xuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpXG4gICAgcmV0dXJuIHBheWxvYWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F1dGgodG9rZW46IGFueSkge1xuICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ZXJpZnkgPSBkZWNvZGUodG9rZW4pXG4gICAgICAgIGlmICghdmVyaWZ5KSB0aHJvdyBuZXcgRXJyb3IoKVxuICAgICAgICBjb25zb2xlLmxvZyhcInBhcnQgMTpcIiwgdG9rZW4sIHZlcmlmeSlcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBhcnQgMlwiLCB0b2tlbiwgZXJyLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJTaWduSldUIiwiand0VmVyaWZ5IiwiZW5jb2RlIiwicGF5bG9hZCIsImlhdCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJleHAiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJ0eXAiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNldElzc3VlZEF0Iiwic2V0Tm90QmVmb3JlIiwic2lnbiIsIlRleHRFbmNvZGVyIiwic2VjcmV0IiwiZGVjb2RlIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwiY2hlY2tBdXRoIiwidmVyaWZ5IiwiRXJyb3IiLCJlcnIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./lib/jwt.ts\n");

/***/ })

});