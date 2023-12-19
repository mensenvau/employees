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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditOneTab: function() { return /* binding */ EditOneTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/request */ \"(app-pages-browser)/./lib/request.ts\");\n/* harmony import */ var _registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/registry/ui/separator */ \"(app-pages-browser)/./registry/ui/separator.tsx\");\n/* harmony import */ var _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/registry/ui/use-toast */ \"(app-pages-browser)/./registry/ui/use-toast.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/registry/ui/textarea */ \"(app-pages-browser)/./registry/ui/textarea.tsx\");\n/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/skeleton */ \"(app-pages-browser)/./components/skeleton.tsx\");\n/* harmony import */ var _registry_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/registry/ui/button */ \"(app-pages-browser)/./registry/ui/button.tsx\");\n/* harmony import */ var _registry_ui_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/registry/ui/input */ \"(app-pages-browser)/./registry/ui/input.tsx\");\n/* harmony import */ var _registry_ui_label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/registry/ui/label */ \"(app-pages-browser)/./registry/ui/label.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ EditOneTab auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction EditOneTab() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams)();\n    const { toast } = (0,_registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id\n    });\n    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    let onChange = (e)=>{\n        let nv = input.map((item)=>{\n            if (item.lang == e.target.getAttribute(\"lang\")) return {\n                ...item,\n                [e.target.name]: e.target.value\n            };\n            return item;\n        });\n        setInput(nv);\n    };\n    let editOne = async ()=>{\n        setLoad(true);\n        setInput([]);\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.postRequest)(\"/doctors/one\", {\n            id: params.id,\n            arr: input\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't update data!\"\n            });\n        }\n        toast({\n            title: \"Wow! News.\",\n            description: \"Data success update!!!\"\n        });\n        await getOne();\n    };\n    let getOne = async ()=>{\n        var _res_data;\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.getRequest)(\"/doctors/one/\" + params.id);\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setInput((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.arr) || []);\n        setLoad(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getOne();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor edit data! It is not possible to enter more than 250 characters in the title and 7000 characters in the information section.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {\n                className: \"my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton__WEBPACK_IMPORTED_MODULE_6__.SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 69,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    (input === null || input === void 0 ? void 0 : input.length) > 0 && input.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid gap-4 grid-cols-1 mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_label__WEBPACK_IMPORTED_MODULE_9__.Label, {\n                                    children: [\n                                        \"for \",\n                                        item === null || item === void 0 ? void 0 : item.lang,\n                                        \": \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_input__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                    placeholder: \"Name ... \",\n                                    type: \"text\",\n                                    value: item === null || item === void 0 ? void 0 : item.name,\n                                    name: \"name\",\n                                    lang: item === null || item === void 0 ? void 0 : item.lang,\n                                    onChange: onChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                                    placeholder: \"Type description here.\",\n                                    value: (item === null || item === void 0 ? void 0 : item.description) || \"\",\n                                    name: \"description\",\n                                    lang: item === null || item === void 0 ? void 0 : item.lang,\n                                    onChange: onChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, item === null || item === void 0 ? void 0 : item.lang, true, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            className: \"mt-2\",\n                            onClick: editOne,\n                            children: \"Edit Data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n_s(EditOneTab, \"vdS9sdcpIQ8CIex4UN7dZU/hD+c=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_10__.useParams,\n        _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = EditOneTab;\nvar _c;\n$RefreshReg$(_c, \"EditOneTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL2VkaXQtb25lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdEO0FBQ0o7QUFDRDtBQUNGO0FBQ0M7QUFDQztBQUNMO0FBQ0Y7QUFDQTtBQUNEO0FBR3BDLFNBQVNZOztJQUVaLE1BQU1DLFNBQVNGLDJEQUFTQTtJQUN4QixNQUFNLEVBQUVHLEtBQUssRUFBRSxHQUFHWCxnRUFBUUE7SUFDMUIsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFXO1FBQUNZO0lBQUU7SUFDaEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO0lBRWpDLElBQUllLFdBQVcsQ0FBQ0M7UUFDWixJQUFJQyxLQUFLUCxNQUFNUSxHQUFHLENBQUMsQ0FBQ0M7WUFDaEIsSUFBSUEsS0FBS0MsSUFBSSxJQUFJSixFQUFFSyxNQUFNLENBQUNDLFlBQVksQ0FBQyxTQUFTLE9BQU87Z0JBQUUsR0FBR0gsSUFBSTtnQkFBRSxDQUFDSCxFQUFFSyxNQUFNLENBQUNFLElBQUksQ0FBQyxFQUFFUCxFQUFFSyxNQUFNLENBQUNHLEtBQUs7WUFBQztZQUNsRyxPQUFPTDtRQUNYO1FBQ0FSLFNBQVNNO0lBQ2I7SUFFQSxJQUFJUSxVQUFVO1FBQ1ZYLFFBQVE7UUFDUkgsU0FBUyxFQUFFO1FBQ1gsTUFBTWUsTUFBTyxNQUFNOUIseURBQVdBLENBQUMsZ0JBQWdCO1lBQUVnQixJQUFJSixPQUFPSSxFQUFFO1lBQUVlLEtBQUtqQjtRQUFNO1FBQzNFLElBQUlnQixJQUFJRSxHQUFHLEVBQUU7WUFDVCxPQUFPbkIsTUFBTTtnQkFDVG9CLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLGFBQWE7WUFDakI7UUFDSjtRQUNBdEIsTUFBTTtZQUNGcUIsT0FBTztZQUNQQyxhQUFhO1FBQ2pCO1FBQ0EsTUFBTUM7SUFDVjtJQUVBLElBQUlBLFNBQVM7WUFTQU47UUFSVCxNQUFNQSxNQUFPLE1BQU0vQix3REFBVUEsQ0FBQyxrQkFBa0JhLE9BQU9JLEVBQUU7UUFDekQsSUFBSWMsSUFBSUUsR0FBRyxFQUFFO1lBQ1QsT0FBT25CLE1BQU07Z0JBQ1RvQixTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxhQUFhO1lBQ2pCO1FBQ0o7UUFDQXBCLFNBQVNlLENBQUFBLGdCQUFBQSwyQkFBQUEsWUFBQUEsSUFBS08sSUFBSSxjQUFUUCxnQ0FBQUEsVUFBV0MsR0FBRyxLQUFJLEVBQUU7UUFDN0JiLFFBQVE7SUFDWjtJQUVBZixnREFBU0EsQ0FBQztRQUFRaUM7SUFBVSxHQUFHLEVBQUU7SUFFakMscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUVELFdBQVU7OEJBQVU7Ozs7Ozs7Ozs7OzBCQUUzQiw4REFBQ3RDLDZEQUFTQTtnQkFBQ3NDLFdBQVU7Ozs7OztZQUNwQnRCLHNCQUFRLDhEQUFDWCw0REFBVUE7Ozs7O1lBQ25CLENBQUNXLHNCQUNFLDhEQUFDcUI7O29CQUNJeEIsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPMkIsTUFBTSxJQUFHLEtBQUszQixNQUFNUSxHQUFHLENBQUMsQ0FBQ0MscUJBQzdCLDhEQUFDZTs0QkFBNEJDLFdBQVU7OzhDQUNuQyw4REFBQzlCLHFEQUFLQTs7d0NBQUU7d0NBQUtjLGlCQUFBQSwyQkFBQUEsS0FBTUMsSUFBSTt3Q0FBQzs7Ozs7Ozs4Q0FDeEIsOERBQUNoQixxREFBS0E7b0NBQUNrQyxhQUFZO29DQUFZQyxNQUFLO29DQUFPZixLQUFLLEVBQUVMLGlCQUFBQSwyQkFBQUEsS0FBTUksSUFBSTtvQ0FBRUEsTUFBSztvQ0FBT0gsSUFBSSxFQUFFRCxpQkFBQUEsMkJBQUFBLEtBQU1DLElBQUk7b0NBQUVMLFVBQVVBOzs7Ozs7OENBQ3RHLDhEQUFDZCwyREFBUUE7b0NBQUNxQyxhQUFZO29DQUF5QmQsT0FBT0wsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNWSxXQUFXLEtBQUk7b0NBQUlSLE1BQUs7b0NBQWNILElBQUksRUFBRUQsaUJBQUFBLDJCQUFBQSxLQUFNQyxJQUFJO29DQUFFTCxVQUFVQTs7Ozs7OzsyQkFIeEhJLGlCQUFBQSwyQkFBQUEsS0FBTUMsSUFBSTs7Ozs7a0NBTXhCLDhEQUFDYztrQ0FDRyw0RUFBQy9CLHVEQUFNQTs0QkFBQ2dDLFdBQVU7NEJBQU9LLFNBQVNmO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRTtHQXZFZ0JsQjs7UUFFR0QsdURBQVNBO1FBQ05SLDREQUFRQTs7O0tBSGRTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL2VkaXQtb25lLnRzeD8zZmVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IGdldFJlcXVlc3QsIHBvc3RSZXF1ZXN0IH0gZnJvbSBcIkAvbGliL3JlcXVlc3RcIjtcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL3NlcGFyYXRvclwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS91c2UtdG9hc3RcIjtcbmltcG9ydCB7IEtleSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgU2tlbGV0b25WMSB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2tlbGV0b25cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL3JlZ2lzdHJ5L3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9sYWJlbFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgQnJhbmNoIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0T25lVGFiKCkge1xuXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcbiAgICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxCcmFuY2hbXT4oe2lkfSlcbiAgICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgbGV0IG9uQ2hhbmdlID0gKGU6IGFueSwpID0+IHtcbiAgICAgICAgbGV0IG52ID0gaW5wdXQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5sYW5nID09IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImxhbmdcIikpIHJldHVybiB7IC4uLml0ZW0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgfSlcbiAgICAgICAgc2V0SW5wdXQobnYpXG4gICAgfVxuXG4gICAgbGV0IGVkaXRPbmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldExvYWQodHJ1ZSk7XG4gICAgICAgIHNldElucHV0KFtdKTtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IHBvc3RSZXF1ZXN0KFwiL2RvY3RvcnMvb25lXCIsIHsgaWQ6IHBhcmFtcy5pZCwgYXJyOiBpbnB1dCB9KSlcbiAgICAgICAgaWYgKHJlcy5lcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2FzdCh7XG4gICAgICAgICAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVoIG9oISBTb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTb3JyeSwgdGhlIGNhbid0IHVwZGF0ZSBkYXRhIVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIldvdyEgTmV3cy5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGEgc3VjY2VzcyB1cGRhdGUhISFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCBnZXRPbmUoKTtcbiAgICB9XG5cbiAgICBsZXQgZ2V0T25lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSAoYXdhaXQgZ2V0UmVxdWVzdChcIi9kb2N0b3JzL29uZS9cIiArIHBhcmFtcy5pZCkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3Qoe1xuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVaCBvaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCBnZXQgZGF0YSFcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBzZXRJbnB1dChyZXM/LmRhdGE/LmFyciB8fCBbXSk7XG4gICAgICAgIHNldExvYWQoZmFsc2UpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGdldE9uZSgpOyB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj4gRG9jdG9yIGVkaXQgZGF0YSEgSXQgaXMgbm90IHBvc3NpYmxlIHRvIGVudGVyIG1vcmUgdGhhbiAyNTAgY2hhcmFjdGVycyBpbiB0aGUgdGl0bGUgYW5kIDcwMDAgY2hhcmFjdGVycyBpbiB0aGUgaW5mb3JtYXRpb24gc2VjdGlvbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTZXBhcmF0b3IgY2xhc3NOYW1lPVwibXktNFwiIC8+XG4gICAgICAgICAgICB7bG9hZCAmJiA8U2tlbGV0b25WMSAvPn1cbiAgICAgICAgICAgIHshbG9hZCAmJlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtpbnB1dD8ubGVuZ3RoID4gMCAmJiBpbnB1dC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtPy5sYW5nIGFzIEtleX0gY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBncmlkLWNvbHMtMSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsID5mb3Ige2l0ZW0/Lmxhbmd9OiA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWUgLi4uIFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2l0ZW0/Lm5hbWV9IG5hbWU9XCJuYW1lXCIgbGFuZz17aXRlbT8ubGFuZ30gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIlR5cGUgZGVzY3JpcHRpb24gaGVyZS5cIiB2YWx1ZT17aXRlbT8uZGVzY3JpcHRpb24gfHwgXCJcIn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgbGFuZz17aXRlbT8ubGFuZ30gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtdC0yXCIgb25DbGljaz17ZWRpdE9uZX0+RWRpdCBEYXRhPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImdldFJlcXVlc3QiLCJwb3N0UmVxdWVzdCIsIlNlcGFyYXRvciIsInVzZVRvYXN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUZXh0YXJlYSIsIlNrZWxldG9uVjEiLCJCdXR0b24iLCJJbnB1dCIsIkxhYmVsIiwidXNlUGFyYW1zIiwiRWRpdE9uZVRhYiIsInBhcmFtcyIsInRvYXN0IiwiaW5wdXQiLCJzZXRJbnB1dCIsImlkIiwibG9hZCIsInNldExvYWQiLCJvbkNoYW5nZSIsImUiLCJudiIsIm1hcCIsIml0ZW0iLCJsYW5nIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibmFtZSIsInZhbHVlIiwiZWRpdE9uZSIsInJlcyIsImFyciIsImVyciIsInZhcmlhbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0T25lIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJsZW5ndGgiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/edit-one.tsx\n"));

/***/ })

});