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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ServicesTab: function() { return /* binding */ ServicesTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ ServicesTab auto */ \nvar _s = $RefreshSig$();\nfunction ServicesTab() {\n    _s();\n    const params = useParams();\n    const { toast } = useToast();\n    const [input, setInput] = useState([]);\n    const [category, setCategory] = useState([]);\n    const [categoryId, setCategoryID] = useState(\"\");\n    const [load, setLoad] = useState(true);\n    const [price, setPrice] = useState(0);\n    let onChange = (e)=>{\n        setPrice(e.target.value);\n    };\n    let onSelect = (e)=>{\n        setCategoryID(e);\n    };\n    let getServices = async ()=>{\n        var _res_data;\n        setLoad(true);\n        const res = await postRequest(\"/data/services/\", {\n            foreign_id: params.id,\n            type: \"doctor\"\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setInput((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.arr) || []);\n        setLoad(false);\n    };\n    let deleteServices = async (id)=>{\n        const res = await postRequest(\"/data/services/delete\", {\n            id\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't delete data!\"\n            });\n        }\n        getServices();\n    };\n    let addServices = async ()=>{\n        const res = await postRequest(\"/data/services/add\", {\n            foreign_id: params.id,\n            type: \"doctor\",\n            category_id: categoryId,\n            price\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't add data!\"\n            });\n        }\n        setPrice(0);\n        setCategoryID(\"\");\n        await getServices();\n    };\n    let getListCategory = async ()=>{\n        var _res_data;\n        const res = await getRequest(\"/data/category\", {});\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setCategory((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.category) || []);\n    };\n    useEffect(()=>{\n        getServices();\n        getListCategory();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor services data and management.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Separator, {\n                className: \"my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-6 gap-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Select, {\n                            value: categoryId,\n                            onValueChange: onSelect,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectTrigger, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectValue, {\n                                        placeholder: \"Select a category\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectContent, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectGroup, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectLabel, {\n                                                children: \"Category:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 33\n                                            }, this),\n                                            category && category.length > 0 && category.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectItem, {\n                                                    value: item.id,\n                                                    children: item === null || item === void 0 ? void 0 : item.name\n                                                }, item.id, false, {\n                                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 37\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            type: \"number\",\n                            className: \"col-span-2\",\n                            placeholder: \"Price ...\",\n                            value: price,\n                            onChange: onChange\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                            onClick: addServices,\n                            children: \"Create new\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 100,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCaption, {\n                        children: \"A list of your data.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    children: \"#\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    children: \"Category\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    children: \"Price\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableHead, {\n                                    className: \"text-right\",\n                                    children: \"Method\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableBody, {\n                        children: input.length > 0 && input.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        className: \"font-medium\",\n                                        children: item.id\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        children: item.price\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TableCell, {\n                                        className: \"text-right\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Badge, {\n                                            className: \"cursor-pointer\",\n                                            onClick: ()=>{\n                                                deleteServices(item.id);\n                                            },\n                                            children: [\n                                                \" Delete \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TrashIcon, {}, void 0, false, {\n                                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 123\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n                lineNumber: 102,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/services.tsx\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n}\n_s(ServicesTab, \"C1R4+nROasS369dsjbwGgu3lJ1U=\", true);\n_c = ServicesTab;\nvar _c;\n$RefreshReg$(_c, \"ServicesTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL3NlcnZpY2VzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR08sU0FBU0E7O0lBQ1osTUFBTUMsU0FBU0M7SUFDZixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQztJQUNsQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0MsU0FBb0IsRUFBRTtJQUNoRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0YsU0FBcUIsRUFBRTtJQUN2RCxNQUFNLENBQUNHLFlBQVlDLGNBQWMsR0FBR0osU0FBUztJQUM3QyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sU0FBUztJQUNqQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsU0FBUztJQUVuQyxJQUFJUyxXQUFXLENBQUNDO1FBQWFGLFNBQVNFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUFFO0lBQ3RELElBQUlDLFdBQVcsQ0FBQ0g7UUFBYU4sY0FBY007SUFBRztJQUU5QyxJQUFJSSxjQUFjO1lBVUxDO1FBVFRULFFBQVE7UUFDUixNQUFNUyxNQUFPLE1BQU1DLFlBQVksbUJBQW1CO1lBQUVDLFlBQVl2QixPQUFPd0IsRUFBRTtZQUFFQyxNQUFNO1FBQVM7UUFDMUYsSUFBSUosSUFBSUssR0FBRyxFQUFFO1lBQ1QsT0FBT3hCLE1BQU07Z0JBQ1R5QixTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxhQUFhO1lBQ2pCO1FBQ0o7UUFDQXhCLFNBQVNnQixDQUFBQSxnQkFBQUEsMkJBQUFBLFlBQUFBLElBQUtTLElBQUksY0FBVFQsZ0NBQUFBLFVBQVdVLEdBQUcsS0FBSSxFQUFFO1FBQzdCbkIsUUFBUTtJQUNaO0lBRUEsSUFBSW9CLGlCQUFpQixPQUFPUjtRQUN4QixNQUFNSCxNQUFPLE1BQU1DLFlBQVkseUJBQXlCO1lBQUVFO1FBQUc7UUFDN0QsSUFBSUgsSUFBSUssR0FBRyxFQUFFO1lBQ1QsT0FBT3hCLE1BQU07Z0JBQ1R5QixTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxhQUFhO1lBQ2pCO1FBQ0o7UUFDQVQ7SUFDSjtJQUVBLElBQUlhLGNBQWM7UUFDZCxNQUFNWixNQUFPLE1BQU1DLFlBQVksc0JBQXNCO1lBQUVDLFlBQVl2QixPQUFPd0IsRUFBRTtZQUFFQyxNQUFNO1lBQVVTLGFBQWF6QjtZQUFZSTtRQUFNO1FBQzdILElBQUlRLElBQUlLLEdBQUcsRUFBRTtZQUNULE9BQU94QixNQUFNO2dCQUNUeUIsU0FBUztnQkFDVEMsT0FBTztnQkFDUEMsYUFBYTtZQUNqQjtRQUNKO1FBQ0FmLFNBQVM7UUFDVEosY0FBYztRQUNkLE1BQU1VO0lBQ1Y7SUFFQSxJQUFJZSxrQkFBa0I7WUFTTmQ7UUFSWixNQUFNQSxNQUFPLE1BQU1lLFdBQVcsa0JBQWtCLENBQUM7UUFDakQsSUFBSWYsSUFBSUssR0FBRyxFQUFFO1lBQ1QsT0FBT3hCLE1BQU07Z0JBQ1R5QixTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxhQUFhO1lBQ2pCO1FBQ0o7UUFDQXJCLFlBQVlhLENBQUFBLGdCQUFBQSwyQkFBQUEsWUFBQUEsSUFBS1MsSUFBSSxjQUFUVCxnQ0FBQUEsVUFBV2QsUUFBUSxLQUFJLEVBQUU7SUFDekM7SUFFQThCLFVBQVU7UUFBUWpCO1FBQWVlO0lBQW1CLEdBQUcsRUFBRTtJQUV6RCxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBRUQsV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDRTtnQkFBVUYsV0FBVTs7Ozs7OzBCQUNyQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0c7NEJBQU94QixPQUFPVDs0QkFBWWtDLGVBQWV4Qjs7OENBQ3RDLDhEQUFDeUI7OENBQ0csNEVBQUNDO3dDQUFZQyxhQUFZOzs7Ozs7Ozs7Ozs4Q0FFN0IsOERBQUNDOzhDQUNHLDRFQUFDQzs7MERBQ0csOERBQUNDOzBEQUFZOzs7Ozs7NENBQ1oxQyxZQUFZQSxTQUFTMkMsTUFBTSxHQUFHLEtBQUszQyxTQUFTNEMsR0FBRyxDQUFDLENBQUNDLHFCQUM5Qyw4REFBQ0M7b0RBQWdDbkMsT0FBT2tDLEtBQUs1QixFQUFFOzhEQUFHNEIsaUJBQUFBLDJCQUFBQSxLQUFNRSxJQUFJO21EQUEzQ0YsS0FBSzVCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNNUMsOERBQUNjO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDZ0I7NEJBQU05QixNQUFLOzRCQUFTYyxXQUFVOzRCQUFhTyxhQUFZOzRCQUFZNUIsT0FBT0w7NEJBQU9FLFVBQVVBOzs7Ozs7Ozs7OztrQ0FFaEcsOERBQUN1Qjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2lCOzRCQUFPQyxTQUFTeEI7c0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSXJDdEIsc0JBQVEsOERBQUMrQzs7Ozs7WUFDVCxDQUFDL0Msc0JBQ0UsOERBQUNnRDs7a0NBQ0csOERBQUNDO2tDQUFhOzs7Ozs7a0NBQ2QsOERBQUNDO2tDQUNHLDRFQUFDQzs7OENBQ0csOERBQUNDOzhDQUFVOzs7Ozs7OENBQ1gsOERBQUNBOzhDQUFVOzs7Ozs7OENBQ1gsOERBQUNBOzhDQUFVOzs7Ozs7OENBQ1gsOERBQUNBO29DQUFVeEIsV0FBVTs4Q0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzFDLDhEQUFDeUI7a0NBQ0k1RCxNQUFNOEMsTUFBTSxHQUFHLEtBQUs5QyxNQUFNK0MsR0FBRyxDQUFDLENBQUNDLHFCQUM1Qiw4REFBQ1U7O2tEQUNHLDhEQUFDRzt3Q0FBVTFCLFdBQVU7a0RBQWVhLEtBQUs1QixFQUFFOzs7Ozs7a0RBQzNDLDhEQUFDeUM7a0RBQVdiLEtBQUtFLElBQUk7Ozs7OztrREFDckIsOERBQUNXO2tEQUFXYixLQUFLdkMsS0FBSzs7Ozs7O2tEQUN0Qiw4REFBQ29EO3dDQUFVMUIsV0FBVTtrREFDakIsNEVBQUMyQjs0Q0FBTTNCLFdBQVU7NENBQWlCa0IsU0FBUztnREFBUXpCLGVBQWVvQixLQUFLNUIsRUFBRTs0Q0FBRTs7Z0RBQUc7OERBQVEsOERBQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBTGhGZixLQUFLNUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNsRDtHQTVIZ0J6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL2JyYW5jaHMvdGFicy9zZXJ2aWNlcy50c3g/NjdkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG4gXG5leHBvcnQgZnVuY3Rpb24gU2VydmljZXNUYWIoKSB7XG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcbiAgICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxTZXJ2aWNlW10+KFtdKVxuICAgIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGU8Q2F0ZWdvcnlbXT4oW10pXG4gICAgY29uc3QgW2NhdGVnb3J5SWQsIHNldENhdGVnb3J5SURdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcblxuICAgIGxldCBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHsgc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpIH1cbiAgICBsZXQgb25TZWxlY3QgPSAoZTogYW55KSA9PiB7IHNldENhdGVnb3J5SUQoZSkgfVxuXG4gICAgbGV0IGdldFNlcnZpY2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRMb2FkKHRydWUpO1xuICAgICAgICBjb25zdCByZXMgPSAoYXdhaXQgcG9zdFJlcXVlc3QoXCIvZGF0YS9zZXJ2aWNlcy9cIiwgeyBmb3JlaWduX2lkOiBwYXJhbXMuaWQsIHR5cGU6IFwiZG9jdG9yXCIgfSkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVaCBvaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCBnZXQgZGF0YSFcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBzZXRJbnB1dChyZXM/LmRhdGE/LmFyciB8fCBbXSk7XG4gICAgICAgIHNldExvYWQoZmFsc2UpO1xuICAgIH1cblxuICAgIGxldCBkZWxldGVTZXJ2aWNlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IChhd2FpdCBwb3N0UmVxdWVzdChcIi9kYXRhL3NlcnZpY2VzL2RlbGV0ZVwiLCB7IGlkIH0pKVxuICAgICAgICBpZiAocmVzLmVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvYXN0KHtcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVWggb2ghIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNvcnJ5LCB0aGUgY2FuJ3QgZGVsZXRlIGRhdGEhXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZ2V0U2VydmljZXMoKTtcbiAgICB9XG5cbiAgICBsZXQgYWRkU2VydmljZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IChhd2FpdCBwb3N0UmVxdWVzdChcIi9kYXRhL3NlcnZpY2VzL2FkZFwiLCB7IGZvcmVpZ25faWQ6IHBhcmFtcy5pZCwgdHlwZTogXCJkb2N0b3JcIiwgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5SWQsIHByaWNlIH0pKVxuICAgICAgICBpZiAocmVzLmVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvYXN0KHtcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVWggb2ghIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNvcnJ5LCB0aGUgY2FuJ3QgYWRkIGRhdGEhXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0UHJpY2UoMClcbiAgICAgICAgc2V0Q2F0ZWdvcnlJRChcIlwiKVxuICAgICAgICBhd2FpdCBnZXRTZXJ2aWNlcygpO1xuICAgIH1cblxuICAgIGxldCBnZXRMaXN0Q2F0ZWdvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IChhd2FpdCBnZXRSZXF1ZXN0KFwiL2RhdGEvY2F0ZWdvcnlcIiwge30pKVxuICAgICAgICBpZiAocmVzLmVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvYXN0KHtcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVWggb2ghIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNvcnJ5LCB0aGUgY2FuJ3QgZ2V0IGRhdGEhXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2F0ZWdvcnkocmVzPy5kYXRhPy5jYXRlZ29yeSB8fCBbXSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgZ2V0U2VydmljZXMoKTsgZ2V0TGlzdENhdGVnb3J5KCk7IH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj4gRG9jdG9yIHNlcnZpY2VzIGRhdGEgYW5kIG1hbmFnZW1lbnQuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2VwYXJhdG9yIGNsYXNzTmFtZT1cIm15LTRcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdhcC00IG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2NhdGVnb3J5SWR9IG9uVmFsdWVDaGFuZ2U9e29uU2VsZWN0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIGNhdGVnb3J5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdExhYmVsPkNhdGVnb3J5OjwvU2VsZWN0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeSAmJiBjYXRlZ29yeS5sZW5ndGggPiAwICYmIGNhdGVnb3J5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0ga2V5PXtpdGVtLmlkIGFzIEtleX0gdmFsdWU9e2l0ZW0uaWR9PntpdGVtPy5uYW1lfTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCIgPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIiBwbGFjZWhvbGRlcj1cIlByaWNlIC4uLlwiIHZhbHVlPXtwcmljZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthZGRTZXJ2aWNlc30+Q3JlYXRlIG5ldzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtsb2FkICYmIDxTa2VsZXRvblYxIC8+fVxuICAgICAgICAgICAgeyFsb2FkICYmXG4gICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDYXB0aW9uPkEgbGlzdCBvZiB5b3VyIGRhdGEuPC9UYWJsZUNhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPiM8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPkNhdGVnb3J5PC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5QcmljZTwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPk1ldGhvZDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbnB1dC5sZW5ndGggPiAwICYmIGlucHV0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2l0ZW0uaWQgYXMgS2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntpdGVtLmlkfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpdGVtLm5hbWV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2l0ZW0ucHJpY2V9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4geyBkZWxldGVTZXJ2aWNlcyhpdGVtLmlkKSB9fT4gRGVsZXRlIDxUcmFzaEljb24gLz48L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJTZXJ2aWNlc1RhYiIsInBhcmFtcyIsInVzZVBhcmFtcyIsInRvYXN0IiwidXNlVG9hc3QiLCJpbnB1dCIsInNldElucHV0IiwidXNlU3RhdGUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiY2F0ZWdvcnlJZCIsInNldENhdGVnb3J5SUQiLCJsb2FkIiwic2V0TG9hZCIsInByaWNlIiwic2V0UHJpY2UiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU2VsZWN0IiwiZ2V0U2VydmljZXMiLCJyZXMiLCJwb3N0UmVxdWVzdCIsImZvcmVpZ25faWQiLCJpZCIsInR5cGUiLCJlcnIiLCJ2YXJpYW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGEiLCJhcnIiLCJkZWxldGVTZXJ2aWNlcyIsImFkZFNlcnZpY2VzIiwiY2F0ZWdvcnlfaWQiLCJnZXRMaXN0Q2F0ZWdvcnkiLCJnZXRSZXF1ZXN0IiwidXNlRWZmZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIlNlcGFyYXRvciIsIlNlbGVjdCIsIm9uVmFsdWVDaGFuZ2UiLCJTZWxlY3RUcmlnZ2VyIiwiU2VsZWN0VmFsdWUiLCJwbGFjZWhvbGRlciIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RHcm91cCIsIlNlbGVjdExhYmVsIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIlNlbGVjdEl0ZW0iLCJuYW1lIiwiSW5wdXQiLCJCdXR0b24iLCJvbkNsaWNrIiwiU2tlbGV0b25WMSIsIlRhYmxlIiwiVGFibGVDYXB0aW9uIiwiVGFibGVIZWFkZXIiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIkJhZGdlIiwiVHJhc2hJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/services.tsx\n"));

/***/ })

});