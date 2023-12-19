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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ServicesTab: function() { return /* binding */ ServicesTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ ServicesTab auto */ \nvar _s = $RefreshSig$();\nfunction ServicesTab() {\n    _s();\n    let deleteServices = async (id)=>{\n        const res = await postRequest(\"/data/services/delete\", {\n            id\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't delete data!\"\n            });\n        }\n        getServices();\n    };\n    let addServices = async ()=>{\n        const res = await postRequest(\"/data/services/add\", {\n            foreign_id: params.id,\n            type: \"doctor\",\n            category_id: categoryId,\n            price\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't add data!\"\n            });\n        }\n        setPrice(0);\n        setCategoryID(\"\");\n        await getServices();\n    };\n    let getListCategory = async ()=>{\n        var _res_data;\n        const res = await getRequest(\"/data/category\", {});\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setCategory((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.category) || []);\n    };\n    useEffect(()=>{\n        getServices();\n        getListCategory();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor services data and management.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Separator, {\n                className: \"my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-6 gap-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Select, {\n                            value: categoryId,\n                            onValueChange: onSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectTrigger, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectValue, {\n                                        placeholder: \"Select a category\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectContent, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectGroup, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectLabel, {\n                                                children: \"Category:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 33\n                                            }, this),\n                                            category && category.length > 0 && category.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectItem, {\n                                                    value: item.id,\n                                                    children: item === null || item === void 0 ? void 0 : item.name\n                                                }, item.id, false, {\n                                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 37\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            type: \"number\",\n                            className: \"col-span-2\",\n                            placeholder: \"Price ...\",\n                            value: price,\n                            onChange: onChange\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                            onClick: addServices,\n                            children: \"Create new\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 76,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCaption, {\n                        children: \"A list of your data.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    children: \"Category\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    className: \"text-right\",\n                                    children: \"Method\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableBody, {\n                        children: input.length > 0 && input.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        className: \"font-medium\",\n                                        children: item.id\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: item.price\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        className: \"text-right\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Badge, {\n                                            className: \"cursor-pointer\",\n                                            onClick: ()=>{\n                                                deleteServices(item.id);\n                                            },\n                                            children: [\n                                                \" Delete \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TrashIcon, {}, void 0, false, {\n                                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 123\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 78,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(ServicesTab, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = ServicesTab;\nvar _c;\n$RefreshReg$(_c, \"ServicesTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL3NlcnZpY2VzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR08sU0FBU0E7O0lBRVosSUFBSUMsaUJBQWlCLE9BQU9DO1FBQ3hCLE1BQU1DLE1BQU8sTUFBTUMsWUFBWSx5QkFBeUI7WUFBRUY7UUFBRztRQUM3RCxJQUFJQyxJQUFJRSxHQUFHLEVBQUU7WUFDVCxPQUFPQyxNQUFNO2dCQUNUQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxhQUFhO1lBQ2pCO1FBQ0o7UUFDQUM7SUFDSjtJQUVBLElBQUlDLGNBQWM7UUFDZCxNQUFNUixNQUFPLE1BQU1DLFlBQVksc0JBQXNCO1lBQUVRLFlBQVlDLE9BQU9YLEVBQUU7WUFBRVksTUFBTTtZQUFVQyxhQUFhQztZQUFZQztRQUFNO1FBQzdILElBQUlkLElBQUlFLEdBQUcsRUFBRTtZQUNULE9BQU9DLE1BQU07Z0JBQ1RDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLGFBQWE7WUFDakI7UUFDSjtRQUNBUyxTQUFTO1FBQ1RDLGNBQWM7UUFDZCxNQUFNVDtJQUNWO0lBRUEsSUFBSVUsa0JBQWtCO1lBU05qQjtRQVJaLE1BQU1BLE1BQU8sTUFBTWtCLFdBQVcsa0JBQWtCLENBQUM7UUFDakQsSUFBSWxCLElBQUlFLEdBQUcsRUFBRTtZQUNULE9BQU9DLE1BQU07Z0JBQ1RDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLGFBQWE7WUFDakI7UUFDSjtRQUNBYSxZQUFZbkIsQ0FBQUEsZ0JBQUFBLDJCQUFBQSxZQUFBQSxJQUFLb0IsSUFBSSxjQUFUcEIsZ0NBQUFBLFVBQVdxQixRQUFRLEtBQUksRUFBRTtJQUN6QztJQUVBQyxVQUFVO1FBQVFmO1FBQWVVO0lBQW1CLEdBQUcsRUFBRTtJQUV6RCxxQkFDSSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBRUQsV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDRTtnQkFBVUYsV0FBVTs7Ozs7OzBCQUNyQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0c7NEJBQU9DLE9BQU9mOzRCQUFZZ0IsZUFBZUM7OzhDQUN0Qyw4REFBQ0M7OENBQ0csNEVBQUNDO3dDQUFZQyxhQUFZOzs7Ozs7Ozs7Ozs4Q0FFN0IsOERBQUNDOzhDQUNHLDRFQUFDQzs7MERBQ0csOERBQUNDOzBEQUFZOzs7Ozs7NENBQ1pmLFlBQVlBLFNBQVNnQixNQUFNLEdBQUcsS0FBS2hCLFNBQVNpQixHQUFHLENBQUMsQ0FBQ0MscUJBQzlDLDhEQUFDQztvREFBZ0NaLE9BQU9XLEtBQUt4QyxFQUFFOzhEQUFHd0MsaUJBQUFBLDJCQUFBQSxLQUFNRSxJQUFJO21EQUEzQ0YsS0FBS3hDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNNUMsOERBQUN3Qjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2tCOzRCQUFNL0IsTUFBSzs0QkFBU2EsV0FBVTs0QkFBYVMsYUFBWTs0QkFBWUwsT0FBT2Q7NEJBQU82QixVQUFVQTs7Ozs7Ozs7Ozs7a0NBRWhHLDhEQUFDcEI7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNvQjs0QkFBT0MsU0FBU3JDO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztZQUlyQ3NDLHNCQUFRLDhEQUFDQzs7Ozs7WUFDVCxDQUFDRCxzQkFDRSw4REFBQ0U7O2tDQUNHLDhEQUFDQztrQ0FBYTs7Ozs7O2tDQUNkLDhEQUFDQztrQ0FDRyw0RUFBQ0M7OzhDQUNHLDhEQUFDQzs4Q0FBVTs7Ozs7OzhDQUNYLDhEQUFDQTs4Q0FBVTs7Ozs7OzhDQUNYLDhEQUFDQTs4Q0FBVTs7Ozs7OzhDQUNYLDhEQUFDQTtvQ0FBVTVCLFdBQVU7OENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUcxQyw4REFBQzZCO2tDQUNJQyxNQUFNakIsTUFBTSxHQUFHLEtBQUtpQixNQUFNaEIsR0FBRyxDQUFDLENBQUNDLHFCQUM1Qiw4REFBQ1k7O2tEQUNHLDhEQUFDSTt3Q0FBVS9CLFdBQVU7a0RBQWVlLEtBQUt4QyxFQUFFOzs7Ozs7a0RBQzNDLDhEQUFDd0Q7a0RBQVdoQixLQUFLRSxJQUFJOzs7Ozs7a0RBQ3JCLDhEQUFDYztrREFBV2hCLEtBQUt6QixLQUFLOzs7Ozs7a0RBQ3RCLDhEQUFDeUM7d0NBQVUvQixXQUFVO2tEQUNqQiw0RUFBQ2dDOzRDQUFNaEMsV0FBVTs0Q0FBaUJxQixTQUFTO2dEQUFRL0MsZUFBZXlDLEtBQUt4QyxFQUFFOzRDQUFFOztnREFBRzs4REFBUSw4REFBQzBEOzs7Ozs7Ozs7Ozs7Ozs7OzsrQkFMaEZsQixLQUFLeEMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNsRDtHQXBHZ0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL3NlcnZpY2VzLnRzeD82N2QwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFNlcnZpY2VzVGFiKCkge1xuXG4gICAgbGV0IGRlbGV0ZVNlcnZpY2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IHBvc3RSZXF1ZXN0KFwiL2RhdGEvc2VydmljZXMvZGVsZXRlXCIsIHsgaWQgfSkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVaCBvaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCBkZWxldGUgZGF0YSFcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBnZXRTZXJ2aWNlcygpO1xuICAgIH1cblxuICAgIGxldCBhZGRTZXJ2aWNlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IHBvc3RSZXF1ZXN0KFwiL2RhdGEvc2VydmljZXMvYWRkXCIsIHsgZm9yZWlnbl9pZDogcGFyYW1zLmlkLCB0eXBlOiBcImRvY3RvclwiLCBjYXRlZ29yeV9pZDogY2F0ZWdvcnlJZCwgcHJpY2UgfSkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVaCBvaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCBhZGQgZGF0YSFcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBzZXRQcmljZSgwKVxuICAgICAgICBzZXRDYXRlZ29yeUlEKFwiXCIpXG4gICAgICAgIGF3YWl0IGdldFNlcnZpY2VzKCk7XG4gICAgfVxuXG4gICAgbGV0IGdldExpc3RDYXRlZ29yeSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IGdldFJlcXVlc3QoXCIvZGF0YS9jYXRlZ29yeVwiLCB7fSkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVaCBvaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCBnZXQgZGF0YSFcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBzZXRDYXRlZ29yeShyZXM/LmRhdGE/LmNhdGVnb3J5IHx8IFtdKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBnZXRTZXJ2aWNlcygpOyBnZXRMaXN0Q2F0ZWdvcnkoKTsgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPiBEb2N0b3Igc2VydmljZXMgZGF0YSBhbmQgbWFuYWdlbWVudC48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgY2xhc3NOYW1lPVwibXktNFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ2FwLTQgbWItNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiID5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17Y2F0ZWdvcnlJZH0gb25WYWx1ZUNoYW5nZT17b25TZWxlY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFZhbHVlIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgY2F0ZWdvcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0TGFiZWw+Q2F0ZWdvcnk6PC9TZWxlY3RMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5ICYmIGNhdGVnb3J5Lmxlbmd0aCA+IDAgJiYgY2F0ZWdvcnkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBrZXk9e2l0ZW0uaWQgYXMgS2V5fSB2YWx1ZT17aXRlbS5pZH0+e2l0ZW0/Lm5hbWV9PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdEdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiIHBsYWNlaG9sZGVyPVwiUHJpY2UgLi4uXCIgdmFsdWU9e3ByaWNlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCIgPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FkZFNlcnZpY2VzfT5DcmVhdGUgbmV3PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2xvYWQgJiYgPFNrZWxldG9uVjEgLz59XG4gICAgICAgICAgICB7IWxvYWQgJiZcbiAgICAgICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNhcHRpb24+QSBsaXN0IG9mIHlvdXIgZGF0YS48L1RhYmxlQ2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+IzwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+Q2F0ZWdvcnk8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlByaWNlPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+TWV0aG9kPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0Lmxlbmd0aCA+IDAgJiYgaW5wdXQubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aXRlbS5pZCBhcyBLZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2l0ZW0uaWR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0ubmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57aXRlbS5wcmljZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB7IGRlbGV0ZVNlcnZpY2VzKGl0ZW0uaWQpIH19PiBEZWxldGUgPFRyYXNoSWNvbiAvPjwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlNlcnZpY2VzVGFiIiwiZGVsZXRlU2VydmljZXMiLCJpZCIsInJlcyIsInBvc3RSZXF1ZXN0IiwiZXJyIiwidG9hc3QiLCJ2YXJpYW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldFNlcnZpY2VzIiwiYWRkU2VydmljZXMiLCJmb3JlaWduX2lkIiwicGFyYW1zIiwidHlwZSIsImNhdGVnb3J5X2lkIiwiY2F0ZWdvcnlJZCIsInByaWNlIiwic2V0UHJpY2UiLCJzZXRDYXRlZ29yeUlEIiwiZ2V0TGlzdENhdGVnb3J5IiwiZ2V0UmVxdWVzdCIsInNldENhdGVnb3J5IiwiZGF0YSIsImNhdGVnb3J5IiwidXNlRWZmZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIlNlcGFyYXRvciIsIlNlbGVjdCIsInZhbHVlIiwib25WYWx1ZUNoYW5nZSIsIm9uU2VsZWN0IiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwicGxhY2Vob2xkZXIiLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0R3JvdXAiLCJTZWxlY3RMYWJlbCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJTZWxlY3RJdGVtIiwibmFtZSIsIklucHV0Iiwib25DaGFuZ2UiLCJCdXR0b24iLCJvbkNsaWNrIiwibG9hZCIsIlNrZWxldG9uVjEiLCJUYWJsZSIsIlRhYmxlQ2FwdGlvbiIsIlRhYmxlSGVhZGVyIiwiVGFibGVSb3ciLCJUYWJsZUhlYWQiLCJUYWJsZUJvZHkiLCJpbnB1dCIsIlRhYmxlQ2VsbCIsIkJhZGdlIiwiVHJhc2hJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/services.tsx\n"));

/***/ })

});