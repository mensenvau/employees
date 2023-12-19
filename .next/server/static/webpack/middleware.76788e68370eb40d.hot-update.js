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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/jwt */ \"(middleware)/./lib/jwt.ts\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n// middleware.ts\n\n\nlet arr = 0;\nfunction middleware(req) {\n    try {\n        let token = req.headers.get(\"token\");\n        if (!(0,_lib_jwt__WEBPACK_IMPORTED_MODULE_0__.checkAuth)(token)) throw new Error(\"token expired!\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].next();\n    } catch (err) {\n        console.log(\"error: \", err.message);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            message: \"User not found!\"\n        }, {\n            status: 405\n        });\n    }\n}\nconst config = {\n    matcher: [\n        \"/api/branchs/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsZ0JBQWdCO0FBQ3NCO0FBQ0s7QUFHM0MsSUFBSUUsTUFBTTtBQUNILFNBQVNDLFdBQVdDLEdBQWdCO0lBQ3ZDLElBQUk7UUFDQSxJQUFJQyxRQUFhRCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUNqQyxJQUFJLENBQUNQLG1EQUFTQSxDQUFDSyxRQUFRLE1BQU0sSUFBSUcsTUFBTTtRQUN2QyxPQUFPUCxrRkFBWUEsQ0FBQ1EsSUFBSTtJQUM1QixFQUFFLE9BQU9DLEtBQVU7UUFDZkMsUUFBUUMsR0FBRyxDQUFDLFdBQVdGLElBQUlHLE9BQU87UUFDbEMsT0FBT1osa0ZBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFRCxTQUFTO1FBQWtCLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQzNFO0FBQ0o7QUFFTyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO1FBQUM7S0FBdUI7QUFDckMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbWlkZGxld2FyZS50c1xuaW1wb3J0IHsgY2hlY2tBdXRoIH0gZnJvbSAnQC9saWIvand0JztcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbmxldCBhcnIgPSAwOyBcbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdG9rZW46IGFueSA9IHJlcS5oZWFkZXJzLmdldChcInRva2VuXCIpIFxuICAgICAgICBpZiAoIWNoZWNrQXV0aCh0b2tlbikpIHRocm93IG5ldyBFcnJvcihcInRva2VuIGV4cGlyZWQhXCIpXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBlcnIubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZCFcIiB9LCB7IHN0YXR1czogNDA1IH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBtYXRjaGVyOiBbJy9hcGkvYnJhbmNocy86cGF0aConLF1cbn0iXSwibmFtZXMiOlsiY2hlY2tBdXRoIiwiTmV4dFJlc3BvbnNlIiwiYXJyIiwibWlkZGxld2FyZSIsInJlcSIsInRva2VuIiwiaGVhZGVycyIsImdldCIsIkVycm9yIiwibmV4dCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwianNvbiIsInN0YXR1cyIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});