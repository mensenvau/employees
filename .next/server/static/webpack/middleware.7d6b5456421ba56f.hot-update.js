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

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/jwt */ \"(middleware)/./lib/jwt.ts\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n// middleware.ts\n\n\nlet arr = 0;\nfunction middleware(req) {\n    try {\n        let token = req.headers.get(\"token\");\n        console.log(arr++);\n        if (!(0,_lib_jwt__WEBPACK_IMPORTED_MODULE_0__.checkAuth)(token)) throw new Error(\"token expired!\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].next();\n    } catch (err) {\n        console.log(\"error: \", err.message);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            message: \"User not found!\"\n        }, {\n            status: 405\n        });\n    }\n}\nconst config = {\n    matcher: [\n        \"/api/branchs/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsZ0JBQWdCO0FBQ3NCO0FBQ0s7QUFHM0MsSUFBSUUsTUFBTTtBQUVILFNBQVNDLFdBQVdDLEdBQWdCO0lBQ3ZDLElBQUk7UUFDQSxJQUFJQyxRQUFhRCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUVqQ0MsUUFBUUMsR0FBRyxDQUFDUDtRQUNaLElBQUksQ0FBQ0YsbURBQVNBLENBQUNLLFFBQVEsTUFBTSxJQUFJSyxNQUFNO1FBRXZDLE9BQU9ULGtGQUFZQSxDQUFDVSxJQUFJO0lBQzVCLEVBQUUsT0FBT0MsS0FBVTtRQUNmSixRQUFRQyxHQUFHLENBQUMsV0FBV0csSUFBSUMsT0FBTztRQUNsQyxPQUFPWixrRkFBWUEsQ0FBQ2EsSUFBSSxDQUFDO1lBQUVELFNBQVM7UUFBa0IsR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDM0U7QUFDSjtBQUVPLE1BQU1DLFNBQVM7SUFDbEJDLFNBQVM7UUFBQztLQUF1QjtBQUNyQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaWRkbGV3YXJlLnRzXG5pbXBvcnQgeyBjaGVja0F1dGggfSBmcm9tICdAL2xpYi9qd3QnO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHR5cGUgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJztcblxubGV0IGFyciA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdG9rZW46IGFueSA9IHJlcS5oZWFkZXJzLmdldChcInRva2VuXCIpXG5cbiAgICAgICAgY29uc29sZS5sb2coYXJyKyspXG4gICAgICAgIGlmICghY2hlY2tBdXRoKHRva2VuKSkgdGhyb3cgbmV3IEVycm9yKFwidG9rZW4gZXhwaXJlZCFcIilcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmQhXCIgfSwgeyBzdGF0dXM6IDQwNSB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgbWF0Y2hlcjogWycvYXBpL2JyYW5jaHMvOnBhdGgqJyxdXG59Il0sIm5hbWVzIjpbImNoZWNrQXV0aCIsIk5leHRSZXNwb25zZSIsImFyciIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ0b2tlbiIsImhlYWRlcnMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJuZXh0IiwiZXJyIiwibWVzc2FnZSIsImpzb24iLCJzdGF0dXMiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});