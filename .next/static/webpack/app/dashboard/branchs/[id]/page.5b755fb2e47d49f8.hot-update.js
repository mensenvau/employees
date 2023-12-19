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

/***/ "(app-pages-browser)/./app/dashboard/branchs/tabs/edit-one.tsx":
/*!*************************************************!*\
  !*** ./app/dashboard/branchs/tabs/edit-one.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditOneTab: function() { return /* binding */ EditOneTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/request */ \"(app-pages-browser)/./lib/request.ts\");\n/* harmony import */ var _registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/registry/ui/separator */ \"(app-pages-browser)/./registry/ui/separator.tsx\");\n/* harmony import */ var _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/registry/ui/use-toast */ \"(app-pages-browser)/./registry/ui/use-toast.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/registry/ui/textarea */ \"(app-pages-browser)/./registry/ui/textarea.tsx\");\n/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/skeleton */ \"(app-pages-browser)/./components/skeleton.tsx\");\n/* harmony import */ var _registry_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/registry/ui/button */ \"(app-pages-browser)/./registry/ui/button.tsx\");\n/* harmony import */ var _registry_ui_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/registry/ui/input */ \"(app-pages-browser)/./registry/ui/input.tsx\");\n/* harmony import */ var _registry_ui_label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/registry/ui/label */ \"(app-pages-browser)/./registry/ui/label.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ EditOneTab auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction EditOneTab() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams)();\n    const { toast } = (0,_registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"0\",\n        name: \"\"\n    });\n    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    let onChange = (e)=>{\n        setInput({\n            ...input,\n            [e.target.getAttribute(\"name\")]: e.target.value\n        });\n    };\n    let editOne = async ()=>{\n        setLoad(true);\n        setInput({\n            id: \"0\",\n            name: \"\"\n        });\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.postRequest)(\"/doctors/one\", {\n            id: params.id,\n            arr: input\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't update data!\"\n            });\n        }\n        toast({\n            title: \"Wow! News.\",\n            description: \"Data success update!!!\"\n        });\n        await getOne();\n    };\n    let getOne = async ()=>{\n        var _res_data;\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.getRequest)(\"/doctors/one/\" + params.id);\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setInput((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.arr) || []);\n        setLoad(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getOne();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor edit data! It is not possible to enter more than 250 characters in the title and 7000 characters in the information section.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {\n                className: \"my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton__WEBPACK_IMPORTED_MODULE_6__.SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 54,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    (input === null || input === void 0 ? void 0 : input.length) > 0 && input.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid gap-4 grid-cols-1 mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_label__WEBPACK_IMPORTED_MODULE_9__.Label, {\n                                    children: [\n                                        \"for \",\n                                        item === null || item === void 0 ? void 0 : item.lang,\n                                        \": \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_input__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                    placeholder: \"Name ... \",\n                                    type: \"text\",\n                                    value: item === null || item === void 0 ? void 0 : item.name,\n                                    name: \"name\",\n                                    lang: item === null || item === void 0 ? void 0 : item.lang,\n                                    onChange: onChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                                    placeholder: \"Type description here.\",\n                                    value: (item === null || item === void 0 ? void 0 : item.description) || \"\",\n                                    name: \"description\",\n                                    lang: item === null || item === void 0 ? void 0 : item.lang,\n                                    onChange: onChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, item === null || item === void 0 ? void 0 : item.lang, true, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            className: \"mt-2\",\n                            onClick: editOne,\n                            children: \"Edit Data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(EditOneTab, \"tFfj97U0Mu/KAmRjy6bvb6mmeYI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams,\n        _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = EditOneTab;\nvar _c;\n$RefreshReg$(_c, \"EditOneTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL2VkaXQtb25lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdEO0FBQ0o7QUFDRDtBQUNGO0FBQ0M7QUFDQztBQUNMO0FBQ0Y7QUFDQTtBQUNEO0FBR3BDLFNBQVNZOztJQUVaLE1BQU1DLFNBQVNGLDJEQUFTQTtJQUN4QixNQUFNLEVBQUVHLEtBQUssRUFBRSxHQUFHWCxnRUFBUUE7SUFDMUIsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFTO1FBQUVZLElBQUk7UUFBS0MsTUFBTTtJQUFHO0lBQy9ELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUVqQyxJQUFJZ0IsV0FBVyxDQUFDQztRQUNaTixTQUFTO1lBQUUsR0FBR0QsS0FBSztZQUFFLENBQUNPLEVBQUVDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFDekU7SUFFQSxJQUFJQyxVQUFVO1FBQ1ZOLFFBQVE7UUFDUkosU0FBUztZQUFFQyxJQUFJO1lBQUtDLE1BQU07UUFBRztRQUM3QixNQUFNUyxNQUFPLE1BQU0xQix5REFBV0EsQ0FBQyxnQkFBZ0I7WUFBRWdCLElBQUlKLE9BQU9JLEVBQUU7WUFBRVcsS0FBS2I7UUFBTTtRQUMzRSxJQUFJWSxJQUFJRSxHQUFHLEVBQUU7WUFDVCxPQUFPZixNQUFNO2dCQUFFZ0IsU0FBUztnQkFBZUMsT0FBTztnQkFBZ0NDLGFBQWE7WUFBZ0M7UUFDL0g7UUFDQWxCLE1BQU07WUFBRWlCLE9BQU87WUFBY0MsYUFBYTtRQUF5QjtRQUNuRSxNQUFNQztJQUNWO0lBRUEsSUFBSUEsU0FBUztZQUtBTjtRQUpULE1BQU1BLE1BQU8sTUFBTTNCLHdEQUFVQSxDQUFDLGtCQUFrQmEsT0FBT0ksRUFBRTtRQUN6RCxJQUFJVSxJQUFJRSxHQUFHLEVBQUU7WUFDVCxPQUFPZixNQUFNO2dCQUFFZ0IsU0FBUztnQkFBZUMsT0FBTztnQkFBZ0NDLGFBQWE7WUFBNkI7UUFDNUg7UUFDQWhCLFNBQVNXLENBQUFBLGdCQUFBQSwyQkFBQUEsWUFBQUEsSUFBS08sSUFBSSxjQUFUUCxnQ0FBQUEsVUFBV0MsR0FBRyxLQUFJLEVBQUU7UUFDN0JSLFFBQVE7SUFDWjtJQUVBaEIsZ0RBQVNBLENBQUM7UUFBUTZCO0lBQVUsR0FBRyxFQUFFO0lBRWpDLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFFRCxXQUFVOzhCQUFVOzs7Ozs7Ozs7OzswQkFFM0IsOERBQUNsQyw2REFBU0E7Z0JBQUNrQyxXQUFVOzs7Ozs7WUFDcEJqQixzQkFBUSw4REFBQ1osNERBQVVBOzs7OztZQUNuQixDQUFDWSxzQkFDRSw4REFBQ2dCOztvQkFDSXBCLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT3VCLE1BQU0sSUFBRyxLQUFLdkIsTUFBTXdCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDN0IsOERBQUNMOzRCQUE0QkMsV0FBVTs7OENBQ25DLDhEQUFDMUIscURBQUtBOzt3Q0FBRTt3Q0FBSzhCLGlCQUFBQSwyQkFBQUEsS0FBTUMsSUFBSTt3Q0FBQzs7Ozs7Ozs4Q0FDeEIsOERBQUNoQyxxREFBS0E7b0NBQUNpQyxhQUFZO29DQUFZQyxNQUFLO29DQUFPbEIsS0FBSyxFQUFFZSxpQkFBQUEsMkJBQUFBLEtBQU10QixJQUFJO29DQUFFQSxNQUFLO29DQUFPdUIsSUFBSSxFQUFFRCxpQkFBQUEsMkJBQUFBLEtBQU1DLElBQUk7b0NBQUVwQixVQUFVQTs7Ozs7OzhDQUN0Ryw4REFBQ2YsMkRBQVFBO29DQUFDb0MsYUFBWTtvQ0FBeUJqQixPQUFPZSxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1SLFdBQVcsS0FBSTtvQ0FBSWQsTUFBSztvQ0FBY3VCLElBQUksRUFBRUQsaUJBQUFBLDJCQUFBQSxLQUFNQyxJQUFJO29DQUFFcEIsVUFBVUE7Ozs7Ozs7MkJBSHhIbUIsaUJBQUFBLDJCQUFBQSxLQUFNQyxJQUFJOzs7OztrQ0FNeEIsOERBQUNOO2tDQUNHLDRFQUFDM0IsdURBQU1BOzRCQUFDNEIsV0FBVTs0QkFBT1EsU0FBU2xCO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRTtHQXhEZ0JkOztRQUVHRCx1REFBU0E7UUFDTlIsNERBQVFBOzs7S0FIZFMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9icmFuY2hzL3RhYnMvZWRpdC1vbmUudHN4PzNmZWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgZ2V0UmVxdWVzdCwgcG9zdFJlcXVlc3QgfSBmcm9tIFwiQC9saWIvcmVxdWVzdFwiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvc2VwYXJhdG9yXCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL3VzZS10b2FzdFwiO1xuaW1wb3J0IHsgS2V5LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBTa2VsZXRvblYxIH0gZnJvbSBcIkAvY29tcG9uZW50cy9za2VsZXRvblwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL2lucHV0XCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL2xhYmVsXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgeyBCcmFuY2ggfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRPbmVUYWIoKSB7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKVxuICAgIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KClcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlPEJyYW5jaD4oeyBpZDogXCIwXCIsIG5hbWU6IFwiXCIgfSlcbiAgICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgbGV0IG9uQ2hhbmdlID0gKGU6IGFueSwpID0+IHtcbiAgICAgICAgc2V0SW5wdXQoeyAuLi5pbnB1dCwgW2UudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm5hbWVcIildOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cblxuICAgIGxldCBlZGl0T25lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRMb2FkKHRydWUpO1xuICAgICAgICBzZXRJbnB1dCh7IGlkOiBcIjBcIiwgbmFtZTogXCJcIiB9KTtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IHBvc3RSZXF1ZXN0KFwiL2RvY3RvcnMvb25lXCIsIHsgaWQ6IHBhcmFtcy5pZCwgYXJyOiBpbnB1dCB9KSlcbiAgICAgICAgaWYgKHJlcy5lcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2FzdCh7IHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIiwgdGl0bGU6IFwiVWggb2ghIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiLCBkZXNjcmlwdGlvbjogXCJTb3JyeSwgdGhlIGNhbid0IHVwZGF0ZSBkYXRhIVwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgdG9hc3QoeyB0aXRsZTogXCJXb3chIE5ld3MuXCIsIGRlc2NyaXB0aW9uOiBcIkRhdGEgc3VjY2VzcyB1cGRhdGUhISFcIiB9KVxuICAgICAgICBhd2FpdCBnZXRPbmUoKTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0T25lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSAoYXdhaXQgZ2V0UmVxdWVzdChcIi9kb2N0b3JzL29uZS9cIiArIHBhcmFtcy5pZCkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3QoeyB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsIHRpdGxlOiBcIlVoIG9oISBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiwgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCBnZXQgZGF0YSFcIiB9KVxuICAgICAgICB9XG4gICAgICAgIHNldElucHV0KHJlcz8uZGF0YT8uYXJyIHx8IFtdKTtcbiAgICAgICAgc2V0TG9hZChmYWxzZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgZ2V0T25lKCk7IH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPiBEb2N0b3IgZWRpdCBkYXRhISBJdCBpcyBub3QgcG9zc2libGUgdG8gZW50ZXIgbW9yZSB0aGFuIDI1MCBjaGFyYWN0ZXJzIGluIHRoZSB0aXRsZSBhbmQgNzAwMCBjaGFyYWN0ZXJzIGluIHRoZSBpbmZvcm1hdGlvbiBzZWN0aW9uLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNlcGFyYXRvciBjbGFzc05hbWU9XCJteS00XCIgLz5cbiAgICAgICAgICAgIHtsb2FkICYmIDxTa2VsZXRvblYxIC8+fVxuICAgICAgICAgICAgeyFsb2FkICYmXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge2lucHV0Py5sZW5ndGggPiAwICYmIGlucHV0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0/LmxhbmcgYXMgS2V5fSBjbGFzc05hbWU9XCJncmlkIGdhcC00IGdyaWQtY29scy0xIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgPmZvciB7aXRlbT8ubGFuZ306IDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZSAuLi4gXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17aXRlbT8ubmFtZX0gbmFtZT1cIm5hbWVcIiBsYW5nPXtpdGVtPy5sYW5nfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIHBsYWNlaG9sZGVyPVwiVHlwZSBkZXNjcmlwdGlvbiBoZXJlLlwiIHZhbHVlPXtpdGVtPy5kZXNjcmlwdGlvbiB8fCBcIlwifSBuYW1lPVwiZGVzY3JpcHRpb25cIiBsYW5nPXtpdGVtPy5sYW5nfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm10LTJcIiBvbkNsaWNrPXtlZGl0T25lfT5FZGl0IERhdGE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiZ2V0UmVxdWVzdCIsInBvc3RSZXF1ZXN0IiwiU2VwYXJhdG9yIiwidXNlVG9hc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRleHRhcmVhIiwiU2tlbGV0b25WMSIsIkJ1dHRvbiIsIklucHV0IiwiTGFiZWwiLCJ1c2VQYXJhbXMiLCJFZGl0T25lVGFiIiwicGFyYW1zIiwidG9hc3QiLCJpbnB1dCIsInNldElucHV0IiwiaWQiLCJuYW1lIiwibG9hZCIsInNldExvYWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImVkaXRPbmUiLCJyZXMiLCJhcnIiLCJlcnIiLCJ2YXJpYW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldE9uZSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImxhbmciLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/edit-one.tsx\n"));

/***/ })

});