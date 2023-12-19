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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditOneTab: function() { return /* binding */ EditOneTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/request */ \"(app-pages-browser)/./lib/request.ts\");\n/* harmony import */ var _registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/registry/ui/separator */ \"(app-pages-browser)/./registry/ui/separator.tsx\");\n/* harmony import */ var _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/registry/ui/use-toast */ \"(app-pages-browser)/./registry/ui/use-toast.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/registry/ui/textarea */ \"(app-pages-browser)/./registry/ui/textarea.tsx\");\n/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/skeleton */ \"(app-pages-browser)/./components/skeleton.tsx\");\n/* harmony import */ var _registry_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/registry/ui/button */ \"(app-pages-browser)/./registry/ui/button.tsx\");\n/* harmony import */ var _registry_ui_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/registry/ui/input */ \"(app-pages-browser)/./registry/ui/input.tsx\");\n/* harmony import */ var _registry_ui_label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/registry/ui/label */ \"(app-pages-browser)/./registry/ui/label.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ EditOneTab auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction EditOneTab() {\n    var _item, _item1;\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams)();\n    const { toast } = (0,_registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"0\",\n        name: \"\"\n    });\n    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    let onChange = (e)=>{\n        setInput({\n            ...input,\n            [e.target.getAttribute(\"name\")]: e.target.value\n        });\n    };\n    let editOne = async ()=>{\n        setLoad(true);\n        setInput({\n            id: \"0\",\n            name: \"\"\n        });\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.postRequest)(\"branchs/one\", {\n            id: params.id,\n            arr: input\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't update data!\"\n            });\n        }\n        toast({\n            title: \"Wow! News.\",\n            description: \"Data success update!!!\"\n        });\n        await getOne();\n    };\n    let getOne = async ()=>{\n        var _res_data;\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.getRequest)(\"branchs/one/\" + params.id);\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setInput((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.arr) || []);\n        setLoad(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getOne();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor edit data! It is not possible to enter more than 250 characters in the title and 7000 characters in the information section.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {\n                className: \"my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton__WEBPACK_IMPORTED_MODULE_6__.SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 54,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-4 grid-cols-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_label__WEBPACK_IMPORTED_MODULE_9__.Label, {\n                                children: \"Name: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_input__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                placeholder: \"Name ... \",\n                                type: \"text\",\n                                value: input === null || input === void 0 ? void 0 : input.name,\n                                name: \"name\",\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_input__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                placeholder: \"Name ... \",\n                                type: \"text\",\n                                value: input === null || input === void 0 ? void 0 : input.name,\n                                name: \"name\",\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                                placeholder: \"Type description here.\",\n                                value: ((_item = item) === null || _item === void 0 ? void 0 : _item.description) || \"\",\n                                name: \"description\",\n                                lang: (_item1 = item) === null || _item1 === void 0 ? void 0 : _item1.lang,\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, input === null || input === void 0 ? void 0 : input.id, true, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            className: \"mt-2\",\n                            onClick: editOne,\n                            children: \"Edit Data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(EditOneTab, \"tFfj97U0Mu/KAmRjy6bvb6mmeYI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams,\n        _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = EditOneTab;\nvar _c;\n$RefreshReg$(_c, \"EditOneTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL2VkaXQtb25lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdEO0FBQ0o7QUFDRDtBQUNGO0FBQ0M7QUFDQztBQUNMO0FBQ0Y7QUFDQTtBQUNEO0FBR3BDLFNBQVNZO1FBOEM4REMsT0FBa0RBOztJQTVDNUgsTUFBTUMsU0FBU0gsMkRBQVNBO0lBQ3hCLE1BQU0sRUFBRUksS0FBSyxFQUFFLEdBQUdaLGdFQUFRQTtJQUMxQixNQUFNLENBQUNhLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQVM7UUFBRWEsSUFBSTtRQUFLQyxNQUFNO0lBQUc7SUFDL0QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVqQyxJQUFJaUIsV0FBVyxDQUFDQztRQUNaTixTQUFTO1lBQUUsR0FBR0QsS0FBSztZQUFFLENBQUNPLEVBQUVDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFDekU7SUFFQSxJQUFJQyxVQUFVO1FBQ1ZOLFFBQVE7UUFDUkosU0FBUztZQUFFQyxJQUFJO1lBQUtDLE1BQU07UUFBRztRQUM3QixNQUFNUyxNQUFPLE1BQU0zQix5REFBV0EsQ0FBQyxlQUFlO1lBQUVpQixJQUFJSixPQUFPSSxFQUFFO1lBQUVXLEtBQUtiO1FBQU07UUFDMUUsSUFBSVksSUFBSUUsR0FBRyxFQUFFO1lBQ1QsT0FBT2YsTUFBTTtnQkFBRWdCLFNBQVM7Z0JBQWVDLE9BQU87Z0JBQWdDQyxhQUFhO1lBQWdDO1FBQy9IO1FBQ0FsQixNQUFNO1lBQUVpQixPQUFPO1lBQWNDLGFBQWE7UUFBeUI7UUFDbkUsTUFBTUM7SUFDVjtJQUVBLElBQUlBLFNBQVM7WUFLQU47UUFKVCxNQUFNQSxNQUFPLE1BQU01Qix3REFBVUEsQ0FBQyxpQkFBaUJjLE9BQU9JLEVBQUU7UUFDeEQsSUFBSVUsSUFBSUUsR0FBRyxFQUFFO1lBQ1QsT0FBT2YsTUFBTTtnQkFBRWdCLFNBQVM7Z0JBQWVDLE9BQU87Z0JBQWdDQyxhQUFhO1lBQTZCO1FBQzVIO1FBQ0FoQixTQUFTVyxDQUFBQSxnQkFBQUEsMkJBQUFBLFlBQUFBLElBQUtPLElBQUksY0FBVFAsZ0NBQUFBLFVBQVdDLEdBQUcsS0FBSSxFQUFFO1FBQzdCUixRQUFRO0lBQ1o7SUFFQWpCLGdEQUFTQSxDQUFDO1FBQVE4QjtJQUFVLEdBQUcsRUFBRTtJQUVqQyxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBRUQsV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDbkMsNkRBQVNBO2dCQUFDbUMsV0FBVTs7Ozs7O1lBQ3BCakIsc0JBQVEsOERBQUNiLDREQUFVQTs7Ozs7WUFDbkIsQ0FBQ2Esc0JBQ0UsOERBQUNnQjs7a0NBQ0csOERBQUNBO3dCQUEyQkMsV0FBVTs7MENBQ2xDLDhEQUFDM0IscURBQUtBOzBDQUFFOzs7Ozs7MENBQ1IsOERBQUNELHFEQUFLQTtnQ0FBQzhCLGFBQVk7Z0NBQVlDLE1BQUs7Z0NBQU9kLEtBQUssRUFBRVYsa0JBQUFBLDRCQUFBQSxNQUFPRyxJQUFJO2dDQUFFQSxNQUFLO2dDQUFPRyxVQUFVQTs7Ozs7OzBDQUNyRiw4REFBQ2IscURBQUtBO2dDQUFDOEIsYUFBWTtnQ0FBWUMsTUFBSztnQ0FBT2QsS0FBSyxFQUFFVixrQkFBQUEsNEJBQUFBLE1BQU9HLElBQUk7Z0NBQUVBLE1BQUs7Z0NBQU9HLFVBQVVBOzs7Ozs7MENBQ3JGLDhEQUFDaEIsMkRBQVFBO2dDQUFDaUMsYUFBWTtnQ0FBeUJiLE9BQU9iLEVBQUFBLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTW9CLFdBQVcsS0FBSTtnQ0FBSWQsTUFBSztnQ0FBY3NCLElBQUksR0FBRTVCLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTTRCLElBQUk7Z0NBQUVuQixVQUFVQTs7Ozs7Ozt1QkFKeEhOLGtCQUFBQSw0QkFBQUEsTUFBT0UsRUFBRTs7Ozs7a0NBTW5CLDhEQUFDa0I7a0NBQ0csNEVBQUM1Qix1REFBTUE7NEJBQUM2QixXQUFVOzRCQUFPSyxTQUFTZjtzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkU7R0F2RGdCZjs7UUFFR0QsdURBQVNBO1FBQ05SLDREQUFRQTs7O0tBSGRTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL2VkaXQtb25lLnRzeD8zZmVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IGdldFJlcXVlc3QsIHBvc3RSZXF1ZXN0IH0gZnJvbSBcIkAvbGliL3JlcXVlc3RcIjtcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL3NlcGFyYXRvclwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS91c2UtdG9hc3RcIjtcbmltcG9ydCB7IEtleSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgU2tlbGV0b25WMSB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2tlbGV0b25cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9sYWJlbFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgQnJhbmNoIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0T25lVGFiKCkge1xuXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcbiAgICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxCcmFuY2g+KHsgaWQ6IFwiMFwiLCBuYW1lOiBcIlwiIH0pXG4gICAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGxldCBvbkNoYW5nZSA9IChlOiBhbnksKSA9PiB7XG4gICAgICAgIHNldElucHV0KHsgLi4uaW5wdXQsIFtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICB9XG5cbiAgICBsZXQgZWRpdE9uZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0TG9hZCh0cnVlKTtcbiAgICAgICAgc2V0SW5wdXQoeyBpZDogXCIwXCIsIG5hbWU6IFwiXCIgfSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IChhd2FpdCBwb3N0UmVxdWVzdChcImJyYW5jaHMvb25lXCIsIHsgaWQ6IHBhcmFtcy5pZCwgYXJyOiBpbnB1dCB9KSlcbiAgICAgICAgaWYgKHJlcy5lcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2FzdCh7IHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIiwgdGl0bGU6IFwiVWggb2ghIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiLCBkZXNjcmlwdGlvbjogXCJTb3JyeSwgdGhlIGNhbid0IHVwZGF0ZSBkYXRhIVwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgdG9hc3QoeyB0aXRsZTogXCJXb3chIE5ld3MuXCIsIGRlc2NyaXB0aW9uOiBcIkRhdGEgc3VjY2VzcyB1cGRhdGUhISFcIiB9KVxuICAgICAgICBhd2FpdCBnZXRPbmUoKTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0T25lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSAoYXdhaXQgZ2V0UmVxdWVzdChcImJyYW5jaHMvb25lL1wiICsgcGFyYW1zLmlkKSlcbiAgICAgICAgaWYgKHJlcy5lcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2FzdCh7IHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIiwgdGl0bGU6IFwiVWggb2ghIFNvbWV0aGluZyB3ZW50IHdyb25nLlwiLCBkZXNjcmlwdGlvbjogXCJTb3JyeSwgdGhlIGNhbid0IGdldCBkYXRhIVwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0SW5wdXQocmVzPy5kYXRhPy5hcnIgfHwgW10pO1xuICAgICAgICBzZXRMb2FkKGZhbHNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBnZXRPbmUoKTsgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+IERvY3RvciBlZGl0IGRhdGEhIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBlbnRlciBtb3JlIHRoYW4gMjUwIGNoYXJhY3RlcnMgaW4gdGhlIHRpdGxlIGFuZCA3MDAwIGNoYXJhY3RlcnMgaW4gdGhlIGluZm9ybWF0aW9uIHNlY3Rpb24uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2VwYXJhdG9yIGNsYXNzTmFtZT1cIm15LTRcIiAvPlxuICAgICAgICAgICAge2xvYWQgJiYgPFNrZWxldG9uVjEgLz59XG4gICAgICAgICAgICB7IWxvYWQgJiZcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5wdXQ/LmlkIGFzIEtleX0gY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBncmlkLWNvbHMtMSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgPk5hbWU6IDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOYW1lIC4uLiBcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dD8ubmFtZX0gbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOYW1lIC4uLiBcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dD8ubmFtZX0gbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJUeXBlIGRlc2NyaXB0aW9uIGhlcmUuXCIgdmFsdWU9e2l0ZW0/LmRlc2NyaXB0aW9uIHx8IFwiXCJ9IG5hbWU9XCJkZXNjcmlwdGlvblwiIGxhbmc9e2l0ZW0/Lmxhbmd9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm10LTJcIiBvbkNsaWNrPXtlZGl0T25lfT5FZGl0IERhdGE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiZ2V0UmVxdWVzdCIsInBvc3RSZXF1ZXN0IiwiU2VwYXJhdG9yIiwidXNlVG9hc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRleHRhcmVhIiwiU2tlbGV0b25WMSIsIkJ1dHRvbiIsIklucHV0IiwiTGFiZWwiLCJ1c2VQYXJhbXMiLCJFZGl0T25lVGFiIiwiaXRlbSIsInBhcmFtcyIsInRvYXN0IiwiaW5wdXQiLCJzZXRJbnB1dCIsImlkIiwibmFtZSIsImxvYWQiLCJzZXRMb2FkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJlZGl0T25lIiwicmVzIiwiYXJyIiwiZXJyIiwidmFyaWFudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnZXRPbmUiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImxhbmciLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/edit-one.tsx\n"));

/***/ })

});