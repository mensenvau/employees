"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/branchs/[id]/page",{

/***/ "(app-pages-browser)/./app/dashboard/branchs/tabs/services.tsx":
/*!*************************************************!*\
  !*** ./app/dashboard/branchs/tabs/services.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HelpTab: function() { return /* binding */ HelpTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ HelpTab auto */ \nfunction HelpTab() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor services data and management.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-6 gap-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Select, {\n                            value: categoryId,\n                            onValueChange: onSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectTrigger, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectValue, {\n                                        placeholder: \"Select a category\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 16,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectContent, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectGroup, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectLabel, {\n                                                children: \"Category:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                                lineNumber: 20,\n                                                columnNumber: 33\n                                            }, this),\n                                            category && category.length > 0 && category.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectItem, {\n                                                    value: item.id,\n                                                    children: item === null || item === void 0 ? void 0 : item.name\n                                                }, item.id, false, {\n                                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                                    lineNumber: 22,\n                                                    columnNumber: 37\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            type: \"number\",\n                            className: \"col-span-2\",\n                            placeholder: \"Price ...\",\n                            value: price,\n                            onChange: onChange\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                            onClick: addServices,\n                            children: \"Create new\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 36,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCaption, {\n                        children: \"A list of your data.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    children: \"Category\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    className: \"text-right\",\n                                    children: \"Method\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableBody, {\n                        children: input.length > 0 && input.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        className: \"font-medium\",\n                                        children: item.id\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: item.price\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        className: \"text-right\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Badge, {\n                                            className: \"cursor-pointer\",\n                                            onClick: ()=>{\n                                                deleteServices(item.id);\n                                            },\n                                            children: [\n                                                \" Delete \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TrashIcon, {}, void 0, false, {\n                                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 123\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = HelpTab;\nvar _c;\n$RefreshReg$(_c, \"HelpTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL3NlcnZpY2VzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHTyxTQUFTQTtJQUVaLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFFRCxXQUFVOzhCQUFVOzs7Ozs7Ozs7OzswQkFHM0IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNFOzRCQUFPQyxPQUFPQzs0QkFBWUMsZUFBZUM7OzhDQUN0Qyw4REFBQ0M7OENBQ0csNEVBQUNDO3dDQUFZQyxhQUFZOzs7Ozs7Ozs7Ozs4Q0FFN0IsOERBQUNDOzhDQUNHLDRFQUFDQzs7MERBQ0csOERBQUNDOzBEQUFZOzs7Ozs7NENBQ1pDLFlBQVlBLFNBQVNDLE1BQU0sR0FBRyxLQUFLRCxTQUFTRSxHQUFHLENBQUMsQ0FBQ0MscUJBQzlDLDhEQUFDQztvREFBZ0NkLE9BQU9hLEtBQUtFLEVBQUU7OERBQUdGLGlCQUFBQSwyQkFBQUEsS0FBTUcsSUFBSTttREFBM0NILEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNNUMsOERBQUNuQjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ29COzRCQUFNQyxNQUFLOzRCQUFTckIsV0FBVTs0QkFBYVMsYUFBWTs0QkFBWU4sT0FBT21COzRCQUFPQyxVQUFVQTs7Ozs7Ozs7Ozs7a0NBRWhHLDhEQUFDeEI7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUN3Qjs0QkFBT0MsU0FBU0M7c0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSXJDQyxzQkFBUSw4REFBQ0M7Ozs7O1lBQ1QsQ0FBQ0Qsc0JBQ0UsOERBQUNFOztrQ0FDRyw4REFBQ0M7a0NBQWE7Ozs7OztrQ0FDZCw4REFBQ0M7a0NBQ0csNEVBQUNDOzs4Q0FDRyw4REFBQ0M7OENBQVU7Ozs7Ozs4Q0FDWCw4REFBQ0E7OENBQVU7Ozs7Ozs4Q0FDWCw4REFBQ0E7OENBQVU7Ozs7Ozs4Q0FDWCw4REFBQ0E7b0NBQVVqQyxXQUFVOzhDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHMUMsOERBQUNrQztrQ0FDSUMsTUFBTXJCLE1BQU0sR0FBRyxLQUFLcUIsTUFBTXBCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDNUIsOERBQUNnQjs7a0RBQ0csOERBQUNJO3dDQUFVcEMsV0FBVTtrREFBZWdCLEtBQUtFLEVBQUU7Ozs7OztrREFDM0MsOERBQUNrQjtrREFBV3BCLEtBQUtHLElBQUk7Ozs7OztrREFDckIsOERBQUNpQjtrREFBV3BCLEtBQUtNLEtBQUs7Ozs7OztrREFDdEIsOERBQUNjO3dDQUFVcEMsV0FBVTtrREFDakIsNEVBQUNxQzs0Q0FBTXJDLFdBQVU7NENBQWlCeUIsU0FBUztnREFBUWEsZUFBZXRCLEtBQUtFLEVBQUU7NENBQUU7O2dEQUFHOzhEQUFRLDhEQUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUxoRnZCLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjbEQ7S0E1RGdCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9icmFuY2hzL3RhYnMvc2VydmljZXMudHN4PzY3ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuXG5leHBvcnQgZnVuY3Rpb24gSGVscFRhYigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj4gRG9jdG9yIHNlcnZpY2VzIGRhdGEgYW5kIG1hbmFnZW1lbnQuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdhcC00IG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2NhdGVnb3J5SWR9IG9uVmFsdWVDaGFuZ2U9e29uU2VsZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIGNhdGVnb3J5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdExhYmVsPkNhdGVnb3J5OjwvU2VsZWN0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeSAmJiBjYXRlZ29yeS5sZW5ndGggPiAwICYmIGNhdGVnb3J5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0ga2V5PXtpdGVtLmlkIGFzIEtleX0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtPy5uYW1lfTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCIgPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIiBwbGFjZWhvbGRlcj1cIlByaWNlIC4uLlwiIHZhbHVlPXtwcmljZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthZGRTZXJ2aWNlc30+Q3JlYXRlIG5ldzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtsb2FkICYmIDxTa2VsZXRvblYxIC8+fVxuICAgICAgICAgICAgeyFsb2FkICYmXG4gICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDYXB0aW9uPkEgbGlzdCBvZiB5b3VyIGRhdGEuPC9UYWJsZUNhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPiM8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPkNhdGVnb3J5PC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5QcmljZTwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPk1ldGhvZDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dC5sZW5ndGggPiAwICYmIGlucHV0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2l0ZW0uaWQgYXMgS2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntpdGVtLmlkfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLm5hbWV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0ucHJpY2V9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4geyBkZWxldGVTZXJ2aWNlcyhpdGVtLmlkKSB9fT4gRGVsZXRlIDxUcmFzaEljb24gLz48L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJIZWxwVGFiIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIlNlbGVjdCIsInZhbHVlIiwiY2F0ZWdvcnlJZCIsIm9uVmFsdWVDaGFuZ2UiLCJvblNlbGVjdCIsIlNlbGVjdFRyaWdnZXIiLCJTZWxlY3RWYWx1ZSIsInBsYWNlaG9sZGVyIiwiU2VsZWN0Q29udGVudCIsIlNlbGVjdEdyb3VwIiwiU2VsZWN0TGFiZWwiLCJjYXRlZ29yeSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJTZWxlY3RJdGVtIiwiaWQiLCJuYW1lIiwiSW5wdXQiLCJ0eXBlIiwicHJpY2UiLCJvbkNoYW5nZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJhZGRTZXJ2aWNlcyIsImxvYWQiLCJTa2VsZXRvblYxIiwiVGFibGUiLCJUYWJsZUNhcHRpb24iLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93IiwiVGFibGVIZWFkIiwiVGFibGVCb2R5IiwiaW5wdXQiLCJUYWJsZUNlbGwiLCJCYWRnZSIsImRlbGV0ZVNlcnZpY2VzIiwiVHJhc2hJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/services.tsx\n"));

/***/ })

});