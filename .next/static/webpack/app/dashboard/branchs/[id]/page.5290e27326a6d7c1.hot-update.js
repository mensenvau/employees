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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditOneTab: function() { return /* binding */ EditOneTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/request */ \"(app-pages-browser)/./lib/request.ts\");\n/* harmony import */ var _registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/registry/ui/separator */ \"(app-pages-browser)/./registry/ui/separator.tsx\");\n/* harmony import */ var _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/registry/ui/use-toast */ \"(app-pages-browser)/./registry/ui/use-toast.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/registry/ui/textarea */ \"(app-pages-browser)/./registry/ui/textarea.tsx\");\n/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/skeleton */ \"(app-pages-browser)/./components/skeleton.tsx\");\n/* harmony import */ var _registry_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/registry/ui/button */ \"(app-pages-browser)/./registry/ui/button.tsx\");\n/* harmony import */ var _registry_ui_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/registry/ui/input */ \"(app-pages-browser)/./registry/ui/input.tsx\");\n/* harmony import */ var _registry_ui_label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/registry/ui/label */ \"(app-pages-browser)/./registry/ui/label.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ EditOneTab auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction EditOneTab() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams)();\n    const { toast } = (0,_registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"0\",\n        name: \"\"\n    });\n    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    let onChange = (e)=>{\n        setInput({\n            ...input,\n            [e.target.getAttribute(\"name\")]: e.target.value\n        });\n    };\n    let editOne = async ()=>{\n        setLoad(true);\n        setInput([]);\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.postRequest)(\"/doctors/one\", {\n            id: params.id,\n            arr: input\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't update data!\"\n            });\n        }\n        toast({\n            title: \"Wow! News.\",\n            description: \"Data success update!!!\"\n        });\n        await getOne();\n    };\n    let getOne = async ()=>{\n        var _res_data;\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.getRequest)(\"/doctors/one/\" + params.id);\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setInput((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.arr) || []);\n        setLoad(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getOne();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor edit data! It is not possible to enter more than 250 characters in the title and 7000 characters in the information section.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {\n                className: \"my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton__WEBPACK_IMPORTED_MODULE_6__.SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 65,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    (input === null || input === void 0 ? void 0 : input.length) > 0 && input.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid gap-4 grid-cols-1 mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_label__WEBPACK_IMPORTED_MODULE_9__.Label, {\n                                    children: [\n                                        \"for \",\n                                        item === null || item === void 0 ? void 0 : item.lang,\n                                        \": \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_input__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                    placeholder: \"Name ... \",\n                                    type: \"text\",\n                                    value: item === null || item === void 0 ? void 0 : item.name,\n                                    name: \"name\",\n                                    lang: item === null || item === void 0 ? void 0 : item.lang,\n                                    onChange: onChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                                    placeholder: \"Type description here.\",\n                                    value: (item === null || item === void 0 ? void 0 : item.description) || \"\",\n                                    name: \"description\",\n                                    lang: item === null || item === void 0 ? void 0 : item.lang,\n                                    onChange: onChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, item === null || item === void 0 ? void 0 : item.lang, true, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 25\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            className: \"mt-2\",\n                            onClick: editOne,\n                            children: \"Edit Data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 67,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(EditOneTab, \"tFfj97U0Mu/KAmRjy6bvb6mmeYI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams,\n        _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = EditOneTab;\nvar _c;\n$RefreshReg$(_c, \"EditOneTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL2VkaXQtb25lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdEO0FBQ0o7QUFDRDtBQUNGO0FBQ0M7QUFDQztBQUNMO0FBQ0Y7QUFDQTtBQUNEO0FBR3BDLFNBQVNZOztJQUVaLE1BQU1DLFNBQVNGLDJEQUFTQTtJQUN4QixNQUFNLEVBQUVHLEtBQUssRUFBRSxHQUFHWCxnRUFBUUE7SUFDMUIsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFTO1FBQUVZLElBQUk7UUFBS0MsTUFBTTtJQUFHO0lBQy9ELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUVqQyxJQUFJZ0IsV0FBVyxDQUFDQztRQUNaTixTQUFTO1lBQUUsR0FBR0QsS0FBSztZQUFFLENBQUNPLEVBQUVDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFDekU7SUFFQSxJQUFJQyxVQUFVO1FBQ1ZOLFFBQVE7UUFDUkosU0FBUyxFQUFFO1FBQ1gsTUFBTVcsTUFBTyxNQUFNMUIseURBQVdBLENBQUMsZ0JBQWdCO1lBQUVnQixJQUFJSixPQUFPSSxFQUFFO1lBQUVXLEtBQUtiO1FBQU07UUFDM0UsSUFBSVksSUFBSUUsR0FBRyxFQUFFO1lBQ1QsT0FBT2YsTUFBTTtnQkFDVGdCLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLGFBQWE7WUFDakI7UUFDSjtRQUNBbEIsTUFBTTtZQUNGaUIsT0FBTztZQUNQQyxhQUFhO1FBQ2pCO1FBQ0EsTUFBTUM7SUFDVjtJQUVBLElBQUlBLFNBQVM7WUFTQU47UUFSVCxNQUFNQSxNQUFPLE1BQU0zQix3REFBVUEsQ0FBQyxrQkFBa0JhLE9BQU9JLEVBQUU7UUFDekQsSUFBSVUsSUFBSUUsR0FBRyxFQUFFO1lBQ1QsT0FBT2YsTUFBTTtnQkFDVGdCLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLGFBQWE7WUFDakI7UUFDSjtRQUNBaEIsU0FBU1csQ0FBQUEsZ0JBQUFBLDJCQUFBQSxZQUFBQSxJQUFLTyxJQUFJLGNBQVRQLGdDQUFBQSxVQUFXQyxHQUFHLEtBQUksRUFBRTtRQUM3QlIsUUFBUTtJQUNaO0lBRUFoQixnREFBU0EsQ0FBQztRQUFRNkI7SUFBVSxHQUFHLEVBQUU7SUFFakMscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUVELFdBQVU7OEJBQVU7Ozs7Ozs7Ozs7OzBCQUUzQiw4REFBQ2xDLDZEQUFTQTtnQkFBQ2tDLFdBQVU7Ozs7OztZQUNwQmpCLHNCQUFRLDhEQUFDWiw0REFBVUE7Ozs7O1lBQ25CLENBQUNZLHNCQUNFLDhEQUFDZ0I7O29CQUNJcEIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPdUIsTUFBTSxJQUFHLEtBQUt2QixNQUFNd0IsR0FBRyxDQUFDLENBQUNDLHFCQUM3Qiw4REFBQ0w7NEJBQTRCQyxXQUFVOzs4Q0FDbkMsOERBQUMxQixxREFBS0E7O3dDQUFFO3dDQUFLOEIsaUJBQUFBLDJCQUFBQSxLQUFNQyxJQUFJO3dDQUFDOzs7Ozs7OzhDQUN4Qiw4REFBQ2hDLHFEQUFLQTtvQ0FBQ2lDLGFBQVk7b0NBQVlDLE1BQUs7b0NBQU9sQixLQUFLLEVBQUVlLGlCQUFBQSwyQkFBQUEsS0FBTXRCLElBQUk7b0NBQUVBLE1BQUs7b0NBQU91QixJQUFJLEVBQUVELGlCQUFBQSwyQkFBQUEsS0FBTUMsSUFBSTtvQ0FBRXBCLFVBQVVBOzs7Ozs7OENBQ3RHLDhEQUFDZiwyREFBUUE7b0NBQUNvQyxhQUFZO29DQUF5QmpCLE9BQU9lLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVIsV0FBVyxLQUFJO29DQUFJZCxNQUFLO29DQUFjdUIsSUFBSSxFQUFFRCxpQkFBQUEsMkJBQUFBLEtBQU1DLElBQUk7b0NBQUVwQixVQUFVQTs7Ozs7OzsyQkFIeEhtQixpQkFBQUEsMkJBQUFBLEtBQU1DLElBQUk7Ozs7O2tDQU14Qiw4REFBQ047a0NBQ0csNEVBQUMzQix1REFBTUE7NEJBQUM0QixXQUFVOzRCQUFPUSxTQUFTbEI7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5FO0dBbkVnQmQ7O1FBRUdELHVEQUFTQTtRQUNOUiw0REFBUUE7OztLQUhkUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL2JyYW5jaHMvdGFicy9lZGl0LW9uZS50c3g/M2ZlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBnZXRSZXF1ZXN0LCBwb3N0UmVxdWVzdCB9IGZyb20gXCJAL2xpYi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9zZXBhcmF0b3JcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvdXNlLXRvYXN0XCI7XG5pbXBvcnQgeyBLZXksIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IFNrZWxldG9uVjEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3NrZWxldG9uXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvbGFiZWxcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IEJyYW5jaCB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdE9uZVRhYigpIHtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKVxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGU8QnJhbmNoPih7IGlkOiBcIjBcIiwgbmFtZTogXCJcIiB9KVxuICAgIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBsZXQgb25DaGFuZ2UgPSAoZTogYW55LCkgPT4ge1xuICAgICAgICBzZXRJbnB1dCh7IC4uLmlucHV0LCBbZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgbGV0IGVkaXRPbmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldExvYWQodHJ1ZSk7XG4gICAgICAgIHNldElucHV0KFtdKTtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IHBvc3RSZXF1ZXN0KFwiL2RvY3RvcnMvb25lXCIsIHsgaWQ6IHBhcmFtcy5pZCwgYXJyOiBpbnB1dCB9KSlcbiAgICAgICAgaWYgKHJlcy5lcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2FzdCh7XG4gICAgICAgICAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVoIG9oISBTb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTb3JyeSwgdGhlIGNhbid0IHVwZGF0ZSBkYXRhIVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIldvdyEgTmV3cy5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGEgc3VjY2VzcyB1cGRhdGUhISFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCBnZXRPbmUoKTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0T25lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSAoYXdhaXQgZ2V0UmVxdWVzdChcIi9kb2N0b3JzL29uZS9cIiArIHBhcmFtcy5pZCkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVaCBvaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCBnZXQgZGF0YSFcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBzZXRJbnB1dChyZXM/LmRhdGE/LmFyciB8fCBbXSk7XG4gICAgICAgIHNldExvYWQoZmFsc2UpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGdldE9uZSgpOyB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj4gRG9jdG9yIGVkaXQgZGF0YSEgSXQgaXMgbm90IHBvc3NpYmxlIHRvIGVudGVyIG1vcmUgdGhhbiAyNTAgY2hhcmFjdGVycyBpbiB0aGUgdGl0bGUgYW5kIDcwMDAgY2hhcmFjdGVycyBpbiB0aGUgaW5mb3JtYXRpb24gc2VjdGlvbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgY2xhc3NOYW1lPVwibXktNFwiIC8+XG4gICAgICAgICAgICB7bG9hZCAmJiA8U2tlbGV0b25WMSAvPn1cbiAgICAgICAgICAgIHshbG9hZCAmJlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtpbnB1dD8ubGVuZ3RoID4gMCAmJiBpbnB1dC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtPy5sYW5nIGFzIEtleX0gY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBncmlkLWNvbHMtMSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsID5mb3Ige2l0ZW0/Lmxhbmd9OiA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWUgLi4uIFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2l0ZW0/Lm5hbWV9IG5hbWU9XCJuYW1lXCIgbGFuZz17aXRlbT8ubGFuZ30gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlR5cGUgZGVzY3JpcHRpb24gaGVyZS5cIiB2YWx1ZT17aXRlbT8uZGVzY3JpcHRpb24gfHwgXCJcIn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgbGFuZz17aXRlbT8ubGFuZ30gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtdC0yXCIgb25DbGljaz17ZWRpdE9uZX0+RWRpdCBEYXRhPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImdldFJlcXVlc3QiLCJwb3N0UmVxdWVzdCIsIlNlcGFyYXRvciIsInVzZVRvYXN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUZXh0YXJlYSIsIlNrZWxldG9uVjEiLCJCdXR0b24iLCJJbnB1dCIsIkxhYmVsIiwidXNlUGFyYW1zIiwiRWRpdE9uZVRhYiIsInBhcmFtcyIsInRvYXN0IiwiaW5wdXQiLCJzZXRJbnB1dCIsImlkIiwibmFtZSIsImxvYWQiLCJzZXRMb2FkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJlZGl0T25lIiwicmVzIiwiYXJyIiwiZXJyIiwidmFyaWFudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnZXRPbmUiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJsYW5nIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/edit-one.tsx\n"));

/***/ })

});