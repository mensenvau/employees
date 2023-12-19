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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditOneTab: function() { return /* binding */ EditOneTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/request */ \"(app-pages-browser)/./lib/request.ts\");\n/* harmony import */ var _registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/registry/ui/separator */ \"(app-pages-browser)/./registry/ui/separator.tsx\");\n/* harmony import */ var _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/registry/ui/use-toast */ \"(app-pages-browser)/./registry/ui/use-toast.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/registry/ui/textarea */ \"(app-pages-browser)/./registry/ui/textarea.tsx\");\n/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/skeleton */ \"(app-pages-browser)/./components/skeleton.tsx\");\n/* harmony import */ var _registry_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/registry/ui/button */ \"(app-pages-browser)/./registry/ui/button.tsx\");\n/* harmony import */ var _registry_ui_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/registry/ui/input */ \"(app-pages-browser)/./registry/ui/input.tsx\");\n/* harmony import */ var _registry_ui_label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/registry/ui/label */ \"(app-pages-browser)/./registry/ui/label.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ EditOneTab auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction EditOneTab() {\n    var _item, _item1, _item2;\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams)();\n    const { toast } = (0,_registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"0\",\n        name: \"\"\n    });\n    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    let onChange = (e)=>{\n        setInput({\n            ...input,\n            [e.target.getAttribute(\"name\")]: e.target.value\n        });\n    };\n    let editOne = async ()=>{\n        setLoad(true);\n        setInput({\n            id: \"0\",\n            name: \"\"\n        });\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.postRequest)(\"branchs/one\", {\n            id: params.id,\n            arr: input\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't update data!\"\n            });\n        }\n        toast({\n            title: \"Wow! News.\",\n            description: \"Data success update!!!\"\n        });\n        await getOne();\n    };\n    let getOne = async ()=>{\n        var _res_data;\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.getRequest)(\"branchs/one/\" + params.id);\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setInput((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.arr) || []);\n        setLoad(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getOne();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor edit data! It is not possible to enter more than 250 characters in the title and 7000 characters in the information section.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {\n                className: \"my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton__WEBPACK_IMPORTED_MODULE_6__.SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 54,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-4 grid-cols-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_label__WEBPACK_IMPORTED_MODULE_9__.Label, {\n                                children: \"Name: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_input__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                placeholder: \"Name ... \",\n                                type: \"text\",\n                                value: input === null || input === void 0 ? void 0 : input.name,\n                                name: \"name\",\n                                lang: (_item = item) === null || _item === void 0 ? void 0 : _item.lang,\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                                placeholder: \"Type description here.\",\n                                value: ((_item1 = item) === null || _item1 === void 0 ? void 0 : _item1.description) || \"\",\n                                name: \"description\",\n                                lang: (_item2 = item) === null || _item2 === void 0 ? void 0 : _item2.lang,\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, input === null || input === void 0 ? void 0 : input.id, true, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            className: \"mt-2\",\n                            onClick: editOne,\n                            children: \"Edit Data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(EditOneTab, \"tFfj97U0Mu/KAmRjy6bvb6mmeYI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams,\n        _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = EditOneTab;\nvar _c;\n$RefreshReg$(_c, \"EditOneTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL2VkaXQtb25lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdEO0FBQ0o7QUFDRDtBQUNGO0FBQ0M7QUFDQztBQUNMO0FBQ0Y7QUFDQTtBQUNEO0FBR3BDLFNBQVNZO1FBNEN5RkMsT0FDM0JBLFFBQWtEQTs7SUEzQzVILE1BQU1DLFNBQVNILDJEQUFTQTtJQUN4QixNQUFNLEVBQUVJLEtBQUssRUFBRSxHQUFHWixnRUFBUUE7SUFDMUIsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFTO1FBQUVhLElBQUk7UUFBS0MsTUFBTTtJQUFHO0lBQy9ELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFFakMsSUFBSWlCLFdBQVcsQ0FBQ0M7UUFDWk4sU0FBUztZQUFFLEdBQUdELEtBQUs7WUFBRSxDQUFDTyxFQUFFQyxNQUFNLENBQUNDLFlBQVksQ0FBQyxRQUFRLEVBQUVGLEVBQUVDLE1BQU0sQ0FBQ0UsS0FBSztRQUFDO0lBQ3pFO0lBRUEsSUFBSUMsVUFBVTtRQUNWTixRQUFRO1FBQ1JKLFNBQVM7WUFBRUMsSUFBSTtZQUFLQyxNQUFNO1FBQUc7UUFDN0IsTUFBTVMsTUFBTyxNQUFNM0IseURBQVdBLENBQUMsZUFBZTtZQUFFaUIsSUFBSUosT0FBT0ksRUFBRTtZQUFFVyxLQUFLYjtRQUFNO1FBQzFFLElBQUlZLElBQUlFLEdBQUcsRUFBRTtZQUNULE9BQU9mLE1BQU07Z0JBQUVnQixTQUFTO2dCQUFlQyxPQUFPO2dCQUFnQ0MsYUFBYTtZQUFnQztRQUMvSDtRQUNBbEIsTUFBTTtZQUFFaUIsT0FBTztZQUFjQyxhQUFhO1FBQXlCO1FBQ25FLE1BQU1DO0lBQ1Y7SUFFQSxJQUFJQSxTQUFTO1lBS0FOO1FBSlQsTUFBTUEsTUFBTyxNQUFNNUIsd0RBQVVBLENBQUMsaUJBQWlCYyxPQUFPSSxFQUFFO1FBQ3hELElBQUlVLElBQUlFLEdBQUcsRUFBRTtZQUNULE9BQU9mLE1BQU07Z0JBQUVnQixTQUFTO2dCQUFlQyxPQUFPO2dCQUFnQ0MsYUFBYTtZQUE2QjtRQUM1SDtRQUNBaEIsU0FBU1csQ0FBQUEsZ0JBQUFBLDJCQUFBQSxZQUFBQSxJQUFLTyxJQUFJLGNBQVRQLGdDQUFBQSxVQUFXQyxHQUFHLEtBQUksRUFBRTtRQUM3QlIsUUFBUTtJQUNaO0lBRUFqQixnREFBU0EsQ0FBQztRQUFROEI7SUFBVSxHQUFHLEVBQUU7SUFFakMscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUVELFdBQVU7OEJBQVU7Ozs7Ozs7Ozs7OzBCQUUzQiw4REFBQ25DLDZEQUFTQTtnQkFBQ21DLFdBQVU7Ozs7OztZQUNwQmpCLHNCQUFRLDhEQUFDYiw0REFBVUE7Ozs7O1lBQ25CLENBQUNhLHNCQUNFLDhEQUFDZ0I7O2tDQUNHLDhEQUFDQTt3QkFBMkJDLFdBQVU7OzBDQUNsQyw4REFBQzNCLHFEQUFLQTswQ0FBRTs7Ozs7OzBDQUNSLDhEQUFDRCxxREFBS0E7Z0NBQUM4QixhQUFZO2dDQUFZQyxNQUFLO2dDQUFPZCxLQUFLLEVBQUVWLGtCQUFBQSw0QkFBQUEsTUFBT0csSUFBSTtnQ0FBRUEsTUFBSztnQ0FBT3NCLElBQUksR0FBRTVCLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTTRCLElBQUk7Z0NBQUVuQixVQUFVQTs7Ozs7OzBDQUN2Ryw4REFBQ2hCLDJEQUFRQTtnQ0FBQ2lDLGFBQVk7Z0NBQXlCYixPQUFPYixFQUFBQSxTQUFBQSxrQkFBQUEsNkJBQUFBLE9BQU1vQixXQUFXLEtBQUk7Z0NBQUlkLE1BQUs7Z0NBQWNzQixJQUFJLEdBQUU1QixTQUFBQSxrQkFBQUEsNkJBQUFBLE9BQU00QixJQUFJO2dDQUFFbkIsVUFBVUE7Ozs7Ozs7dUJBSHhITixrQkFBQUEsNEJBQUFBLE1BQU9FLEVBQUU7Ozs7O2tDQUtuQiw4REFBQ2tCO2tDQUNHLDRFQUFDNUIsdURBQU1BOzRCQUFDNkIsV0FBVTs0QkFBT0ssU0FBU2Y7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5FO0dBdERnQmY7O1FBRUdELHVEQUFTQTtRQUNOUiw0REFBUUE7OztLQUhkUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL2JyYW5jaHMvdGFicy9lZGl0LW9uZS50c3g/M2ZlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBnZXRSZXF1ZXN0LCBwb3N0UmVxdWVzdCB9IGZyb20gXCJAL2xpYi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9zZXBhcmF0b3JcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvdXNlLXRvYXN0XCI7XG5pbXBvcnQgeyBLZXksIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IFNrZWxldG9uVjEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3NrZWxldG9uXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvbGFiZWxcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IEJyYW5jaCB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdE9uZVRhYigpIHtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKVxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGU8QnJhbmNoPih7IGlkOiBcIjBcIiwgbmFtZTogXCJcIiB9KVxuICAgIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBsZXQgb25DaGFuZ2UgPSAoZTogYW55LCkgPT4ge1xuICAgICAgICBzZXRJbnB1dCh7IC4uLmlucHV0LCBbZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgbGV0IGVkaXRPbmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldExvYWQodHJ1ZSk7XG4gICAgICAgIHNldElucHV0KHsgaWQ6IFwiMFwiLCBuYW1lOiBcIlwiIH0pO1xuICAgICAgICBjb25zdCByZXMgPSAoYXdhaXQgcG9zdFJlcXVlc3QoXCJicmFuY2hzL29uZVwiLCB7IGlkOiBwYXJhbXMuaWQsIGFycjogaW5wdXQgfSkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3QoeyB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsIHRpdGxlOiBcIlVoIG9oISBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiwgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCB1cGRhdGUgZGF0YSFcIiB9KVxuICAgICAgICB9XG4gICAgICAgIHRvYXN0KHsgdGl0bGU6IFwiV293ISBOZXdzLlwiLCBkZXNjcmlwdGlvbjogXCJEYXRhIHN1Y2Nlc3MgdXBkYXRlISEhXCIgfSlcbiAgICAgICAgYXdhaXQgZ2V0T25lKCk7XG4gICAgfVxuXG4gICAgbGV0IGdldE9uZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IGdldFJlcXVlc3QoXCJicmFuY2hzL29uZS9cIiArIHBhcmFtcy5pZCkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3QoeyB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsIHRpdGxlOiBcIlVoIG9oISBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiwgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCBnZXQgZGF0YSFcIiB9KVxuICAgICAgICB9XG4gICAgICAgIHNldElucHV0KHJlcz8uZGF0YT8uYXJyIHx8IFtdKTtcbiAgICAgICAgc2V0TG9hZChmYWxzZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgZ2V0T25lKCk7IH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPiBEb2N0b3IgZWRpdCBkYXRhISBJdCBpcyBub3QgcG9zc2libGUgdG8gZW50ZXIgbW9yZSB0aGFuIDI1MCBjaGFyYWN0ZXJzIGluIHRoZSB0aXRsZSBhbmQgNzAwMCBjaGFyYWN0ZXJzIGluIHRoZSBpbmZvcm1hdGlvbiBzZWN0aW9uLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNlcGFyYXRvciBjbGFzc05hbWU9XCJteS00XCIgLz5cbiAgICAgICAgICAgIHtsb2FkICYmIDxTa2VsZXRvblYxIC8+fVxuICAgICAgICAgICAgeyFsb2FkICYmXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lucHV0Py5pZCBhcyBLZXl9IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgZ3JpZC1jb2xzLTEgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsID5OYW1lOiA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZSAuLi4gXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXQ/Lm5hbWV9IG5hbWU9XCJuYW1lXCIgbGFuZz17aXRlbT8ubGFuZ30gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIHBsYWNlaG9sZGVyPVwiVHlwZSBkZXNjcmlwdGlvbiBoZXJlLlwiIHZhbHVlPXtpdGVtPy5kZXNjcmlwdGlvbiB8fCBcIlwifSBuYW1lPVwiZGVzY3JpcHRpb25cIiBsYW5nPXtpdGVtPy5sYW5nfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtdC0yXCIgb25DbGljaz17ZWRpdE9uZX0+RWRpdCBEYXRhPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImdldFJlcXVlc3QiLCJwb3N0UmVxdWVzdCIsIlNlcGFyYXRvciIsInVzZVRvYXN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUZXh0YXJlYSIsIlNrZWxldG9uVjEiLCJCdXR0b24iLCJJbnB1dCIsIkxhYmVsIiwidXNlUGFyYW1zIiwiRWRpdE9uZVRhYiIsIml0ZW0iLCJwYXJhbXMiLCJ0b2FzdCIsImlucHV0Iiwic2V0SW5wdXQiLCJpZCIsIm5hbWUiLCJsb2FkIiwic2V0TG9hZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwiZWRpdE9uZSIsInJlcyIsImFyciIsImVyciIsInZhcmlhbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0T25lIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJsYW5nIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/edit-one.tsx\n"));

/***/ })

});