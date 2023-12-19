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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditOneTab: function() { return /* binding */ EditOneTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/request */ \"(app-pages-browser)/./lib/request.ts\");\n/* harmony import */ var _registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/registry/ui/separator */ \"(app-pages-browser)/./registry/ui/separator.tsx\");\n/* harmony import */ var _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/registry/ui/use-toast */ \"(app-pages-browser)/./registry/ui/use-toast.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/skeleton */ \"(app-pages-browser)/./components/skeleton.tsx\");\n/* harmony import */ var _registry_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/registry/ui/button */ \"(app-pages-browser)/./registry/ui/button.tsx\");\n/* harmony import */ var _registry_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/registry/ui/input */ \"(app-pages-browser)/./registry/ui/input.tsx\");\n/* harmony import */ var _registry_ui_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/registry/ui/label */ \"(app-pages-browser)/./registry/ui/label.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ EditOneTab auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction EditOneTab() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.useParams)();\n    const { toast } = (0,_registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"0\",\n        name: \"\"\n    });\n    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    let onChange = (e)=>{\n        setInput({\n            ...input,\n            [e.target.getAttribute(\"name\")]: e.target.value\n        });\n    };\n    let editOne = async ()=>{\n        setLoad(true);\n        setInput({\n            id: \"0\",\n            name: \"\"\n        });\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.postRequest)(\"branchs/one\", {\n            id: params.id,\n            arr: input\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't update data!\"\n            });\n        }\n        toast({\n            title: \"Wow! News.\",\n            description: \"Data success update!!!\"\n        });\n        await getOne();\n    };\n    let getOne = async ()=>{\n        var _res_data;\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.getRequest)(\"branchs/one/\" + params.id);\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setInput((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.arr) || []);\n        setLoad(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getOne();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor edit data! It is not possible to enter more than 250 characters in the title and 7000 characters in the information section.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {\n                className: \"my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton__WEBPACK_IMPORTED_MODULE_5__.SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 54,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-4 grid-cols-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_label__WEBPACK_IMPORTED_MODULE_8__.Label, {\n                                children: \"Name: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                placeholder: \"Name ... \",\n                                type: \"text\",\n                                value: input === null || input === void 0 ? void 0 : input.name,\n                                name: \"name\",\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                type: \"hiddin\",\n                                value: input === null || input === void 0 ? void 0 : input.id,\n                                name: \"name\",\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, input === null || input === void 0 ? void 0 : input.id, true, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            className: \"mt-2\",\n                            onClick: editOne,\n                            children: \"Edit Data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(EditOneTab, \"tFfj97U0Mu/KAmRjy6bvb6mmeYI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_9__.useParams,\n        _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = EditOneTab;\nvar _c;\n$RefreshReg$(_c, \"EditOneTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL2VkaXQtb25lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFd0Q7QUFDSjtBQUNEO0FBQ0Y7QUFFRTtBQUNMO0FBQ0Y7QUFDQTtBQUNEO0FBR3BDLFNBQVNXOztJQUVaLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVHLEtBQUssRUFBRSxHQUFHVixnRUFBUUE7SUFDMUIsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFTO1FBQUVXLElBQUk7UUFBS0MsTUFBTTtJQUFHO0lBQy9ELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVqQyxJQUFJZSxXQUFXLENBQUNDO1FBQ1pOLFNBQVM7WUFBRSxHQUFHRCxLQUFLO1lBQUUsQ0FBQ08sRUFBRUMsTUFBTSxDQUFDQyxZQUFZLENBQUMsUUFBUSxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUN6RTtJQUVBLElBQUlDLFVBQVU7UUFDVk4sUUFBUTtRQUNSSixTQUFTO1lBQUVDLElBQUk7WUFBS0MsTUFBTTtRQUFHO1FBQzdCLE1BQU1TLE1BQU8sTUFBTXpCLHlEQUFXQSxDQUFDLGVBQWU7WUFBRWUsSUFBSUosT0FBT0ksRUFBRTtZQUFFVyxLQUFLYjtRQUFNO1FBQzFFLElBQUlZLElBQUlFLEdBQUcsRUFBRTtZQUNULE9BQU9mLE1BQU07Z0JBQUVnQixTQUFTO2dCQUFlQyxPQUFPO2dCQUFnQ0MsYUFBYTtZQUFnQztRQUMvSDtRQUNBbEIsTUFBTTtZQUFFaUIsT0FBTztZQUFjQyxhQUFhO1FBQXlCO1FBQ25FLE1BQU1DO0lBQ1Y7SUFFQSxJQUFJQSxTQUFTO1lBS0FOO1FBSlQsTUFBTUEsTUFBTyxNQUFNMUIsd0RBQVVBLENBQUMsaUJBQWlCWSxPQUFPSSxFQUFFO1FBQ3hELElBQUlVLElBQUlFLEdBQUcsRUFBRTtZQUNULE9BQU9mLE1BQU07Z0JBQUVnQixTQUFTO2dCQUFlQyxPQUFPO2dCQUFnQ0MsYUFBYTtZQUE2QjtRQUM1SDtRQUNBaEIsU0FBU1csQ0FBQUEsZ0JBQUFBLDJCQUFBQSxZQUFBQSxJQUFLTyxJQUFJLGNBQVRQLGdDQUFBQSxVQUFXQyxHQUFHLEtBQUksRUFBRTtRQUM3QlIsUUFBUTtJQUNaO0lBRUFmLGdEQUFTQSxDQUFDO1FBQVE0QjtJQUFVLEdBQUcsRUFBRTtJQUVqQyxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBRUQsV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDakMsNkRBQVNBO2dCQUFDaUMsV0FBVTs7Ozs7O1lBQ3BCakIsc0JBQVEsOERBQUNaLDREQUFVQTs7Ozs7WUFDbkIsQ0FBQ1ksc0JBQ0UsOERBQUNnQjs7a0NBQ0csOERBQUNBO3dCQUEyQkMsV0FBVTs7MENBQ2xDLDhEQUFDMUIscURBQUtBOzBDQUFFOzs7Ozs7MENBQ1IsOERBQUNELHFEQUFLQTtnQ0FBQzZCLGFBQVk7Z0NBQVlDLE1BQUs7Z0NBQU9kLEtBQUssRUFBRVYsa0JBQUFBLDRCQUFBQSxNQUFPRyxJQUFJO2dDQUFFQSxNQUFLO2dDQUFPRyxVQUFVQTs7Ozs7OzBDQUNyRiw4REFBQ1oscURBQUtBO2dDQUFDOEIsTUFBSztnQ0FBU2QsS0FBSyxFQUFFVixrQkFBQUEsNEJBQUFBLE1BQU9FLEVBQUU7Z0NBQUVDLE1BQUs7Z0NBQU9HLFVBQVVBOzs7Ozs7O3VCQUh2RE4sa0JBQUFBLDRCQUFBQSxNQUFPRSxFQUFFOzs7OztrQ0FLbkIsOERBQUNrQjtrQ0FDRyw0RUFBQzNCLHVEQUFNQTs0QkFBQzRCLFdBQVU7NEJBQU9JLFNBQVNkO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRTtHQXREZ0JkOztRQUVHRCxzREFBU0E7UUFDTlAsNERBQVFBOzs7S0FIZFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9icmFuY2hzL3RhYnMvZWRpdC1vbmUudHN4PzNmZWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgZ2V0UmVxdWVzdCwgcG9zdFJlcXVlc3QgfSBmcm9tIFwiQC9saWIvcmVxdWVzdFwiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvc2VwYXJhdG9yXCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL3VzZS10b2FzdFwiO1xuaW1wb3J0IHsgS2V5LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBTa2VsZXRvblYxIH0gZnJvbSBcIkAvY29tcG9uZW50cy9za2VsZXRvblwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL2lucHV0XCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL2xhYmVsXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgeyBCcmFuY2ggfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRPbmVUYWIoKSB7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKVxuICAgIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KClcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlPEJyYW5jaD4oeyBpZDogXCIwXCIsIG5hbWU6IFwiXCIgfSlcbiAgICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgbGV0IG9uQ2hhbmdlID0gKGU6IGFueSwpID0+IHtcbiAgICAgICAgc2V0SW5wdXQoeyAuLi5pbnB1dCwgW2UudGFyZ2V0LmdldEF0dHJpYnV0ZShcIm5hbWVcIildOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH1cblxuICAgIGxldCBlZGl0T25lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXRMb2FkKHRydWUpO1xuICAgICAgICBzZXRJbnB1dCh7IGlkOiBcIjBcIiwgbmFtZTogXCJcIiB9KTtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IHBvc3RSZXF1ZXN0KFwiYnJhbmNocy9vbmVcIiwgeyBpZDogcGFyYW1zLmlkLCBhcnI6IGlucHV0IH0pKVxuICAgICAgICBpZiAocmVzLmVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvYXN0KHsgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiLCB0aXRsZTogXCJVaCBvaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsIGRlc2NyaXB0aW9uOiBcIlNvcnJ5LCB0aGUgY2FuJ3QgdXBkYXRlIGRhdGEhXCIgfSlcbiAgICAgICAgfVxuICAgICAgICB0b2FzdCh7IHRpdGxlOiBcIldvdyEgTmV3cy5cIiwgZGVzY3JpcHRpb246IFwiRGF0YSBzdWNjZXNzIHVwZGF0ZSEhIVwiIH0pXG4gICAgICAgIGF3YWl0IGdldE9uZSgpO1xuICAgIH1cblxuICAgIGxldCBnZXRPbmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IChhd2FpdCBnZXRSZXF1ZXN0KFwiYnJhbmNocy9vbmUvXCIgKyBwYXJhbXMuaWQpKVxuICAgICAgICBpZiAocmVzLmVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvYXN0KHsgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiLCB0aXRsZTogXCJVaCBvaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsIGRlc2NyaXB0aW9uOiBcIlNvcnJ5LCB0aGUgY2FuJ3QgZ2V0IGRhdGEhXCIgfSlcbiAgICAgICAgfVxuICAgICAgICBzZXRJbnB1dChyZXM/LmRhdGE/LmFyciB8fCBbXSk7XG4gICAgICAgIHNldExvYWQoZmFsc2UpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGdldE9uZSgpOyB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj4gRG9jdG9yIGVkaXQgZGF0YSEgSXQgaXMgbm90IHBvc3NpYmxlIHRvIGVudGVyIG1vcmUgdGhhbiAyNTAgY2hhcmFjdGVycyBpbiB0aGUgdGl0bGUgYW5kIDcwMDAgY2hhcmFjdGVycyBpbiB0aGUgaW5mb3JtYXRpb24gc2VjdGlvbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgY2xhc3NOYW1lPVwibXktNFwiIC8+XG4gICAgICAgICAgICB7bG9hZCAmJiA8U2tlbGV0b25WMSAvPn1cbiAgICAgICAgICAgIHshbG9hZCAmJlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbnB1dD8uaWQgYXMgS2V5fSBjbGFzc05hbWU9XCJncmlkIGdhcC00IGdyaWQtY29scy0xIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA+TmFtZTogPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWUgLi4uIFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0Py5uYW1lfSBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiaGlkZGluXCIgdmFsdWU9e2lucHV0Py5pZH0gbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtdC0yXCIgb25DbGljaz17ZWRpdE9uZX0+RWRpdCBEYXRhPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImdldFJlcXVlc3QiLCJwb3N0UmVxdWVzdCIsIlNlcGFyYXRvciIsInVzZVRvYXN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTa2VsZXRvblYxIiwiQnV0dG9uIiwiSW5wdXQiLCJMYWJlbCIsInVzZVBhcmFtcyIsIkVkaXRPbmVUYWIiLCJwYXJhbXMiLCJ0b2FzdCIsImlucHV0Iiwic2V0SW5wdXQiLCJpZCIsIm5hbWUiLCJsb2FkIiwic2V0TG9hZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInZhbHVlIiwiZWRpdE9uZSIsInJlcyIsImFyciIsImVyciIsInZhcmlhbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0T25lIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/edit-one.tsx\n"));

/***/ })

});