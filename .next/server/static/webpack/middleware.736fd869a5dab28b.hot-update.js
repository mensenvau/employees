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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/jwt */ \"(middleware)/./lib/jwt.ts\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n// middleware.ts\n\n\nasync function middleware(req) {\n    try {\n        let token = req.headers.get(\"token\");\n        if (!await (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_0__.checkAuth)(token)) throw new Error(\"token expired!\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].next();\n    } catch (err) {\n        console.log(\"error: \", err.message);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            message: \"User not found!\"\n        }, {\n            status: 405\n        });\n    }\n}\nconst config = {\n    matcher: [\n        \"/api/branchs/:path*\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsZ0JBQWdCO0FBQ3NCO0FBQ0s7QUFHcEMsZUFBZUUsV0FBV0MsR0FBZ0I7SUFDN0MsSUFBSTtRQUNBLElBQUlDLFFBQWFELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBRSxNQUFNTixtREFBU0EsQ0FBQ0ksUUFBUyxNQUFNLElBQUlHLE1BQU07UUFDL0MsT0FBT04sa0ZBQVlBLENBQUNPLElBQUk7SUFDNUIsRUFBRSxPQUFPQyxLQUFVO1FBQ2ZDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXRixJQUFJRyxPQUFPO1FBQ2xDLE9BQU9YLGtGQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRUQsU0FBUztRQUFrQixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUMzRTtBQUNKO0FBRU8sTUFBTUMsU0FBUztJQUNsQkMsU0FBUztRQUFDO0tBQXVCO0FBQ3JDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1pZGRsZXdhcmUudHNcbmltcG9ydCB7IGNoZWNrQXV0aCB9IGZyb20gJ0AvbGliL2p3dCc7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXE6IE5leHRSZXF1ZXN0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHRva2VuOiBhbnkgPSByZXEuaGVhZGVycy5nZXQoXCJ0b2tlblwiKVxuICAgICAgICBpZiAoIShhd2FpdCBjaGVja0F1dGgodG9rZW4pKSkgdGhyb3cgbmV3IEVycm9yKFwidG9rZW4gZXhwaXJlZCFcIikgXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBlcnIubWVzc2FnZSlcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZCFcIiB9LCB7IHN0YXR1czogNDA1IH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBtYXRjaGVyOiBbJy9hcGkvYnJhbmNocy86cGF0aConLF1cbn0iXSwibmFtZXMiOlsiY2hlY2tBdXRoIiwiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsInRva2VuIiwiaGVhZGVycyIsImdldCIsIkVycm9yIiwibmV4dCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwianNvbiIsInN0YXR1cyIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});