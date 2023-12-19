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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditOneTab: function() { return /* binding */ EditOneTab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/request */ \"(app-pages-browser)/./lib/request.ts\");\n/* harmony import */ var _registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/registry/ui/separator */ \"(app-pages-browser)/./registry/ui/separator.tsx\");\n/* harmony import */ var _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/registry/ui/use-toast */ \"(app-pages-browser)/./registry/ui/use-toast.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/skeleton */ \"(app-pages-browser)/./components/skeleton.tsx\");\n/* harmony import */ var _registry_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/registry/ui/button */ \"(app-pages-browser)/./registry/ui/button.tsx\");\n/* harmony import */ var _registry_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/registry/ui/input */ \"(app-pages-browser)/./registry/ui/input.tsx\");\n/* harmony import */ var _registry_ui_label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/registry/ui/label */ \"(app-pages-browser)/./registry/ui/label.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ EditOneTab auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction EditOneTab() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.useParams)();\n    const { toast } = (0,_registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: \"0\",\n        name: \"\"\n    });\n    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    let onChange = (e)=>{\n        setInput({\n            ...input,\n            [e.target.getAttribute(\"name\")]: e.target.value\n        });\n    };\n    let editOne = async ()=>{\n        setLoad(true);\n        setInput({\n            id: \"0\",\n            name: \"\"\n        });\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.postRequest)(\"branchs/one\", {\n            id: params.id,\n            arr: input\n        });\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't update data!\"\n            });\n        }\n        toast({\n            title: \"Wow! News.\",\n            description: \"Data success update!!!\"\n        });\n        await getOne();\n    };\n    let getOne = async ()=>{\n        const res = await (0,_lib_request__WEBPACK_IMPORTED_MODULE_1__.getRequest)(\"branchs/one?id=\".concat(params.id));\n        if (res.err) {\n            return toast({\n                variant: \"destructive\",\n                title: \"Uh oh! Something went wrong.\",\n                description: \"Sorry, the can't get data!\"\n            });\n        }\n        setInput((res === null || res === void 0 ? void 0 : res.arr) || []);\n        setLoad(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getOne();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: \" Doctor edit data! It is not possible to enter more than 250 characters in the title and 7000 characters in the information section.\"\n                }, void 0, false, {\n                    fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_separator__WEBPACK_IMPORTED_MODULE_2__.Separator, {\n                className: \"my-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton__WEBPACK_IMPORTED_MODULE_5__.SkeletonV1, {}, void 0, false, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 52,\n                columnNumber: 22\n            }, this),\n            !load && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-4 grid-cols-1 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_label__WEBPACK_IMPORTED_MODULE_8__.Label, {\n                                children: \"Name: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                placeholder: \"Name ... \",\n                                type: \"text\",\n                                value: input === null || input === void 0 ? void 0 : input.name,\n                                name: \"name\",\n                                onChange: onChange\n                            }, void 0, false, {\n                                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, input === null || input === void 0 ? void 0 : input.id, true, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registry_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            className: \"mt-2\",\n                            onClick: editOne,\n                            children: \"Edit Data\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mensenvau/Projects/employee/app/dashboard/branchs/tabs/edit-one.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(EditOneTab, \"tFfj97U0Mu/KAmRjy6bvb6mmeYI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_9__.useParams,\n        _registry_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.useToast\n    ];\n});\n_c = EditOneTab;\nvar _c;\n$RefreshReg$(_c, \"EditOneTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvYnJhbmNocy90YWJzL2VkaXQtb25lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFd0Q7QUFDSjtBQUNEO0FBQ0Y7QUFFRTtBQUNMO0FBQ0Y7QUFDQTtBQUNEO0FBR3BDLFNBQVNXOztJQUVaLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVHLEtBQUssRUFBRSxHQUFHVixnRUFBUUE7SUFDMUIsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFTO1FBQUVXLElBQUk7UUFBS0MsTUFBTTtJQUFHO0lBQy9ELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVqQyxJQUFJZSxXQUFXLENBQUNDO1FBQ1pOLFNBQVM7WUFBRSxHQUFHRCxLQUFLO1lBQUUsQ0FBQ08sRUFBRUMsTUFBTSxDQUFDQyxZQUFZLENBQUMsUUFBUSxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQztJQUN6RTtJQUVBLElBQUlDLFVBQVU7UUFDVk4sUUFBUTtRQUNSSixTQUFTO1lBQUVDLElBQUk7WUFBS0MsTUFBTTtRQUFHO1FBQzdCLE1BQU1TLE1BQU8sTUFBTXpCLHlEQUFXQSxDQUFDLGVBQWU7WUFBRWUsSUFBSUosT0FBT0ksRUFBRTtZQUFFVyxLQUFLYjtRQUFNO1FBQzFFLElBQUlZLElBQUlFLEdBQUcsRUFBRTtZQUNULE9BQU9mLE1BQU07Z0JBQUVnQixTQUFTO2dCQUFlQyxPQUFPO2dCQUFnQ0MsYUFBYTtZQUFnQztRQUMvSDtRQUNBbEIsTUFBTTtZQUFFaUIsT0FBTztZQUFjQyxhQUFhO1FBQXlCO1FBQ25FLE1BQU1DO0lBQ1Y7SUFFQSxJQUFJQSxTQUFTO1FBQ1QsTUFBTU4sTUFBTyxNQUFNMUIsd0RBQVVBLENBQUMsa0JBQTRCLE9BQVZZLE9BQU9JLEVBQUU7UUFDekQsSUFBSVUsSUFBSUUsR0FBRyxFQUFFO1lBQUUsT0FBT2YsTUFBTTtnQkFBRWdCLFNBQVM7Z0JBQWVDLE9BQU87Z0JBQWdDQyxhQUFhO1lBQTZCO1FBQUc7UUFDMUloQixTQUFTVyxDQUFBQSxnQkFBQUEsMEJBQUFBLElBQUtDLEdBQUcsS0FBSSxFQUFFO1FBQ3ZCUixRQUFRO0lBQ1o7SUFFQWYsZ0RBQVNBLENBQUM7UUFBUTRCO0lBQVUsR0FBRyxFQUFFO0lBRWpDLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFFRCxXQUFVOzhCQUFVOzs7Ozs7Ozs7OzswQkFFM0IsOERBQUNoQyw2REFBU0E7Z0JBQUNnQyxXQUFVOzs7Ozs7WUFDcEJoQixzQkFBUSw4REFBQ1osNERBQVVBOzs7OztZQUNuQixDQUFDWSxzQkFDRSw4REFBQ2U7O2tDQUNHLDhEQUFDQTt3QkFBMkJDLFdBQVU7OzBDQUNsQyw4REFBQ3pCLHFEQUFLQTswQ0FBRTs7Ozs7OzBDQUNSLDhEQUFDRCxxREFBS0E7Z0NBQUM0QixhQUFZO2dDQUFZQyxNQUFLO2dDQUFPYixLQUFLLEVBQUVWLGtCQUFBQSw0QkFBQUEsTUFBT0csSUFBSTtnQ0FBRUEsTUFBSztnQ0FBT0csVUFBVUE7Ozs7Ozs7dUJBRi9FTixrQkFBQUEsNEJBQUFBLE1BQU9FLEVBQUU7Ozs7O2tDQUluQiw4REFBQ2lCO2tDQUNHLDRFQUFDMUIsdURBQU1BOzRCQUFDMkIsV0FBVTs0QkFBT0ksU0FBU2I7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5FO0dBbkRnQmQ7O1FBRUdELHNEQUFTQTtRQUNOUCw0REFBUUE7OztLQUhkUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL2JyYW5jaHMvdGFicy9lZGl0LW9uZS50c3g/M2ZlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBnZXRSZXF1ZXN0LCBwb3N0UmVxdWVzdCB9IGZyb20gXCJAL2xpYi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9zZXBhcmF0b3JcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvdXNlLXRvYXN0XCI7XG5pbXBvcnQgeyBLZXksIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IFNrZWxldG9uVjEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3NrZWxldG9uXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9yZWdpc3RyeS91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvaW5wdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvcmVnaXN0cnkvdWkvbGFiZWxcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCB7IEJyYW5jaCB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gRWRpdE9uZVRhYigpIHtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKVxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGU8QnJhbmNoPih7IGlkOiBcIjBcIiwgbmFtZTogXCJcIiB9KVxuICAgIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBsZXQgb25DaGFuZ2UgPSAoZTogYW55LCkgPT4ge1xuICAgICAgICBzZXRJbnB1dCh7IC4uLmlucHV0LCBbZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgbGV0IGVkaXRPbmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldExvYWQodHJ1ZSk7XG4gICAgICAgIHNldElucHV0KHsgaWQ6IFwiMFwiLCBuYW1lOiBcIlwiIH0pO1xuICAgICAgICBjb25zdCByZXMgPSAoYXdhaXQgcG9zdFJlcXVlc3QoXCJicmFuY2hzL29uZVwiLCB7IGlkOiBwYXJhbXMuaWQsIGFycjogaW5wdXQgfSkpXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9hc3QoeyB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsIHRpdGxlOiBcIlVoIG9oISBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiwgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCB1cGRhdGUgZGF0YSFcIiB9KVxuICAgICAgICB9XG4gICAgICAgIHRvYXN0KHsgdGl0bGU6IFwiV293ISBOZXdzLlwiLCBkZXNjcmlwdGlvbjogXCJEYXRhIHN1Y2Nlc3MgdXBkYXRlISEhXCIgfSlcbiAgICAgICAgYXdhaXQgZ2V0T25lKCk7XG4gICAgfVxuXG4gICAgbGV0IGdldE9uZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gKGF3YWl0IGdldFJlcXVlc3QoYGJyYW5jaHMvb25lP2lkPSR7cGFyYW1zLmlkfWApKVxuICAgICAgICBpZiAocmVzLmVycikgeyByZXR1cm4gdG9hc3QoeyB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsIHRpdGxlOiBcIlVoIG9oISBTb21ldGhpbmcgd2VudCB3cm9uZy5cIiwgZGVzY3JpcHRpb246IFwiU29ycnksIHRoZSBjYW4ndCBnZXQgZGF0YSFcIiB9KSB9XG4gICAgICAgIHNldElucHV0KHJlcz8uYXJyIHx8IFtdKTtcbiAgICAgICAgc2V0TG9hZChmYWxzZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgZ2V0T25lKCk7IH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPiBEb2N0b3IgZWRpdCBkYXRhISBJdCBpcyBub3QgcG9zc2libGUgdG8gZW50ZXIgbW9yZSB0aGFuIDI1MCBjaGFyYWN0ZXJzIGluIHRoZSB0aXRsZSBhbmQgNzAwMCBjaGFyYWN0ZXJzIGluIHRoZSBpbmZvcm1hdGlvbiBzZWN0aW9uLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNlcGFyYXRvciBjbGFzc05hbWU9XCJteS00XCIgLz5cbiAgICAgICAgICAgIHtsb2FkICYmIDxTa2VsZXRvblYxIC8+fVxuICAgICAgICAgICAgeyFsb2FkICYmXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lucHV0Py5pZCBhcyBLZXl9IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgZ3JpZC1jb2xzLTEgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsID5OYW1lOiA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZSAuLi4gXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXQ/Lm5hbWV9IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXQtMlwiIG9uQ2xpY2s9e2VkaXRPbmV9PkVkaXQgRGF0YTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJnZXRSZXF1ZXN0IiwicG9zdFJlcXVlc3QiLCJTZXBhcmF0b3IiLCJ1c2VUb2FzdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2tlbGV0b25WMSIsIkJ1dHRvbiIsIklucHV0IiwiTGFiZWwiLCJ1c2VQYXJhbXMiLCJFZGl0T25lVGFiIiwicGFyYW1zIiwidG9hc3QiLCJpbnB1dCIsInNldElucHV0IiwiaWQiLCJuYW1lIiwibG9hZCIsInNldExvYWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsImVkaXRPbmUiLCJyZXMiLCJhcnIiLCJlcnIiLCJ2YXJpYW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldE9uZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/branchs/tabs/edit-one.tsx\n"));

/***/ })

});