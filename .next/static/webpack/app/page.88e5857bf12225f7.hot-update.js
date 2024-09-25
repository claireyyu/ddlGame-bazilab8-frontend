"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/BaziCalculator/BaziResult.js":
/*!*****************************************************!*\
  !*** ./src/components/BaziCalculator/BaziResult.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BaziResult; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction BaziResult(param) {\n    let { result } = param;\n    const jsonResult = JSON.parse(result);\n    const { name, gongli } = jsonResult.debug;\n    const { nianzhu, yuezhu, rizhu, shizhu, personality_description } = jsonResult;\n    // extract birth year, month, day, hour, and minute from gongli\n    const birthYear = gongli.split(\"年\")[0];\n    const birthMonth = gongli.split(\"年\")[1].split(\"月\")[0];\n    const birthDay = gongli.split(\"年\")[1].split(\"月\")[1].split(\"日\")[0];\n    const birthHour = gongli.split(\"年\")[1].split(\"月\")[1].split(\"日\")[1].split(\"时\")[0];\n    const birthMinute = gongli.split(\"年\")[1].split(\"月\")[1].split(\"日\")[1].split(\"时\")[1].split(\"分\")[0];\n    // extract the stem and branch for each pillar\n    const yearStem = nianzhu[0];\n    const yearBranch = nianzhu[1];\n    const monthStem = yuezhu[0];\n    const monthBranch = yuezhu[1];\n    const dayStem = rizhu[0];\n    const dayBranch = rizhu[1];\n    const hourStem = shizhu[0];\n    const hourBranch = shizhu[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-4 text-slate-900 bg-white w-full text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-8 my-4 justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"w-full sm:w-auto\",\n                        children: [\n                            \"Name: \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"w-full sm:w-auto\",\n                        children: [\n                            \"Birthday: \",\n                            birthYear,\n                            \"/\",\n                            birthMonth,\n                            \"/\",\n                            birthDay\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"w-full sm:w-auto\",\n                        children: [\n                            \"Time: \",\n                            birthHour,\n                            \":\",\n                            birthMinute\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"min-w-full border-collapse\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"border-b py-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"border-b py-2\",\n                                        children: \"Year Pillar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"border-b py-2\",\n                                        children: \"Month Pillar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"border-b py-2\",\n                                        children: \"Day Pillar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"border-b py-2\",\n                                        children: \"Hour Pillar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: \"Stem\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: yearStem\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: monthStem\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: dayStem\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: hourStem\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: \"Branch\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: yearBranch\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: monthBranch\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: dayBranch\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"border-t py-2\",\n                                            children: hourBranch\n                                        }, void 0, false, {\n                                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-left md:text-center\",\n                        children: [\n                            \"Bazi Interpretation \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                                lineNumber: 63,\n                                columnNumber: 69\n                            }, this),\n                            personality_description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-left md:text-center\",\n                        children: [\n                            \"Rizhu Interpretation: \",\n                            personality_description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/claireyu/Documents/developer/baziApp/frontend/src/components/BaziCalculator/BaziResult.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = BaziResult;\nvar _c;\n$RefreshReg$(_c, \"BaziResult\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JhemlDYWxjdWxhdG9yL0JhemlSZXN1bHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFWCxTQUFTQyxXQUFXLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtJQUNqQyxNQUFNQyxhQUFhQyxLQUFLQyxLQUFLLENBQUNIO0lBRTlCLE1BQU0sRUFBRUksSUFBSSxFQUFFQyxNQUFNLEVBQUUsR0FBR0osV0FBV0ssS0FBSztJQUN6QyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsdUJBQXVCLEVBQUUsR0FBR1Y7SUFFcEUsK0RBQStEO0lBQy9ELE1BQU1XLFlBQVlQLE9BQU9RLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN0QyxNQUFNQyxhQUFhVCxPQUFPUSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3JELE1BQU1FLFdBQVdWLE9BQU9RLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ2pFLE1BQU1HLFlBQVlYLE9BQU9RLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNoRixNQUFNSSxjQUFjWixPQUFPUSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBRWhHLDhDQUE4QztJQUM5QyxNQUFNSyxXQUFXWCxPQUFPLENBQUMsRUFBRTtJQUMzQixNQUFNWSxhQUFhWixPQUFPLENBQUMsRUFBRTtJQUM3QixNQUFNYSxZQUFZWixNQUFNLENBQUMsRUFBRTtJQUMzQixNQUFNYSxjQUFjYixNQUFNLENBQUMsRUFBRTtJQUM3QixNQUFNYyxVQUFVYixLQUFLLENBQUMsRUFBRTtJQUN4QixNQUFNYyxZQUFZZCxLQUFLLENBQUMsRUFBRTtJQUMxQixNQUFNZSxXQUFXZCxNQUFNLENBQUMsRUFBRTtJQUMxQixNQUFNZSxhQUFhZixNQUFNLENBQUMsRUFBRTtJQUU1QixxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFFRCxXQUFVOzs0QkFBbUI7NEJBQU92Qjs7Ozs7OztrQ0FDdkMsOERBQUN3Qjt3QkFBRUQsV0FBVTs7NEJBQW1COzRCQUFXZjs0QkFBVTs0QkFBRUU7NEJBQVc7NEJBQUVDOzs7Ozs7O2tDQUNwRSw4REFBQ2E7d0JBQUVELFdBQVU7OzRCQUFtQjs0QkFBT1g7NEJBQVU7NEJBQUVDOzs7Ozs7Ozs7Ozs7OzBCQUVyRCw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFNRixXQUFVOztzQ0FDZiw4REFBQ0c7c0NBQ0MsNEVBQUNDOztrREFDQyw4REFBQ0M7d0NBQUdMLFdBQVU7Ozs7OztrREFDZCw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQWdCOzs7Ozs7a0RBQzlCLDhEQUFDSzt3Q0FBR0wsV0FBVTtrREFBZ0I7Ozs7OztrREFDOUIsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUFnQjs7Ozs7O2tEQUM5Qiw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHbEMsOERBQUNNOzs4Q0FDQyw4REFBQ0Y7O3NEQUNDLDhEQUFDRzs0Q0FBR1AsV0FBVTtzREFBZ0I7Ozs7OztzREFDOUIsOERBQUNPOzRDQUFHUCxXQUFVO3NEQUFpQlQ7Ozs7OztzREFDL0IsOERBQUNnQjs0Q0FBR1AsV0FBVTtzREFBaUJQOzs7Ozs7c0RBQy9CLDhEQUFDYzs0Q0FBR1AsV0FBVTtzREFBaUJMOzs7Ozs7c0RBQy9CLDhEQUFDWTs0Q0FBR1AsV0FBVTtzREFBaUJIOzs7Ozs7Ozs7Ozs7OENBRWpDLDhEQUFDTzs7c0RBQ0MsOERBQUNHOzRDQUFHUCxXQUFVO3NEQUFnQjs7Ozs7O3NEQUM5Qiw4REFBQ087NENBQUdQLFdBQVU7c0RBQWlCUjs7Ozs7O3NEQUMvQiw4REFBQ2U7NENBQUdQLFdBQVU7c0RBQWlCTjs7Ozs7O3NEQUMvQiw4REFBQ2E7NENBQUdQLFdBQVU7c0RBQWlCSjs7Ozs7O3NEQUMvQiw4REFBQ1c7NENBQUdQLFdBQVU7c0RBQWlCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3ZDLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFFRCxXQUFVOzs0QkFBMkI7MENBQW9CLDhEQUFDUTs7Ozs7NEJBQUt4Qjs7Ozs7OztrQ0FDbEUsOERBQUN3Qjs7Ozs7a0NBQ0QsOERBQUNQO3dCQUFFRCxXQUFVOzs0QkFBMkI7NEJBQXVCaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkU7S0FsRXdCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CYXppQ2FsY3VsYXRvci9CYXppUmVzdWx0LmpzP2Y2NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmF6aVJlc3VsdCh7IHJlc3VsdCB9KSB7XG4gIGNvbnN0IGpzb25SZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XG5cbiAgY29uc3QgeyBuYW1lLCBnb25nbGkgfSA9IGpzb25SZXN1bHQuZGVidWc7XG4gIGNvbnN0IHsgbmlhbnpodSwgeXVlemh1LCByaXpodSwgc2hpemh1LCBwZXJzb25hbGl0eV9kZXNjcmlwdGlvbiB9ID0ganNvblJlc3VsdDtcblxuICAvLyBleHRyYWN0IGJpcnRoIHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIGFuZCBtaW51dGUgZnJvbSBnb25nbGlcbiAgY29uc3QgYmlydGhZZWFyID0gZ29uZ2xpLnNwbGl0KCflubQnKVswXTtcbiAgY29uc3QgYmlydGhNb250aCA9IGdvbmdsaS5zcGxpdCgn5bm0JylbMV0uc3BsaXQoJ+aciCcpWzBdO1xuICBjb25zdCBiaXJ0aERheSA9IGdvbmdsaS5zcGxpdCgn5bm0JylbMV0uc3BsaXQoJ+aciCcpWzFdLnNwbGl0KCfml6UnKVswXTtcbiAgY29uc3QgYmlydGhIb3VyID0gZ29uZ2xpLnNwbGl0KCflubQnKVsxXS5zcGxpdCgn5pyIJylbMV0uc3BsaXQoJ+aXpScpWzFdLnNwbGl0KCfml7YnKVswXTtcbiAgY29uc3QgYmlydGhNaW51dGUgPSBnb25nbGkuc3BsaXQoJ+W5tCcpWzFdLnNwbGl0KCfmnIgnKVsxXS5zcGxpdCgn5pelJylbMV0uc3BsaXQoJ+aXticpWzFdLnNwbGl0KCfliIYnKVswXTtcblxuICAvLyBleHRyYWN0IHRoZSBzdGVtIGFuZCBicmFuY2ggZm9yIGVhY2ggcGlsbGFyXG4gIGNvbnN0IHllYXJTdGVtID0gbmlhbnpodVswXTtcbiAgY29uc3QgeWVhckJyYW5jaCA9IG5pYW56aHVbMV07XG4gIGNvbnN0IG1vbnRoU3RlbSA9IHl1ZXpodVswXTtcbiAgY29uc3QgbW9udGhCcmFuY2ggPSB5dWV6aHVbMV07XG4gIGNvbnN0IGRheVN0ZW0gPSByaXpodVswXTtcbiAgY29uc3QgZGF5QnJhbmNoID0gcml6aHVbMV07XG4gIGNvbnN0IGhvdXJTdGVtID0gc2hpemh1WzBdO1xuICBjb25zdCBob3VyQnJhbmNoID0gc2hpemh1WzFdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNCB0ZXh0LXNsYXRlLTkwMCBiZy13aGl0ZSB3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgc3BhY2UteS00IHNtOnNwYWNlLXktMCBzbTpzcGFjZS14LTggbXktNCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvXCI+TmFtZToge25hbWV9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvXCI+QmlydGhkYXk6IHtiaXJ0aFllYXJ9L3tiaXJ0aE1vbnRofS97YmlydGhEYXl9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy1hdXRvXCI+VGltZToge2JpcnRoSG91cn06e2JpcnRoTWludXRlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyLWIgcHktMlwiPjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXItYiBweS0yXCI+WWVhciBQaWxsYXI8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyLWIgcHktMlwiPk1vbnRoIFBpbGxhcjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXItYiBweS0yXCI+RGF5IFBpbGxhcjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXItYiBweS0yXCI+SG91ciBQaWxsYXI8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci10IHB5LTJcIj5TdGVtPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci10IHB5LTJcIj57eWVhclN0ZW19PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci10IHB5LTJcIj57bW9udGhTdGVtfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItdCBweS0yXCI+e2RheVN0ZW19PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci10IHB5LTJcIj57aG91clN0ZW19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItdCBweS0yXCI+QnJhbmNoPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci10IHB5LTJcIj57eWVhckJyYW5jaH08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLXQgcHktMlwiPnttb250aEJyYW5jaH08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLXQgcHktMlwiPntkYXlCcmFuY2h9PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci10IHB5LTJcIj57aG91ckJyYW5jaH08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNlwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbWQ6dGV4dC1jZW50ZXJcIj5CYXppIEludGVycHJldGF0aW9uIDxici8+e3BlcnNvbmFsaXR5X2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG1kOnRleHQtY2VudGVyXCI+Uml6aHUgSW50ZXJwcmV0YXRpb246IHtwZXJzb25hbGl0eV9kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQmF6aVJlc3VsdCIsInJlc3VsdCIsImpzb25SZXN1bHQiLCJKU09OIiwicGFyc2UiLCJuYW1lIiwiZ29uZ2xpIiwiZGVidWciLCJuaWFuemh1IiwieXVlemh1Iiwicml6aHUiLCJzaGl6aHUiLCJwZXJzb25hbGl0eV9kZXNjcmlwdGlvbiIsImJpcnRoWWVhciIsInNwbGl0IiwiYmlydGhNb250aCIsImJpcnRoRGF5IiwiYmlydGhIb3VyIiwiYmlydGhNaW51dGUiLCJ5ZWFyU3RlbSIsInllYXJCcmFuY2giLCJtb250aFN0ZW0iLCJtb250aEJyYW5jaCIsImRheVN0ZW0iLCJkYXlCcmFuY2giLCJob3VyU3RlbSIsImhvdXJCcmFuY2giLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInRkIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BaziCalculator/BaziResult.js\n"));

/***/ })

});