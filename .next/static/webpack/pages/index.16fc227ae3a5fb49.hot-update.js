"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"E:\\\\react\\\\prepare\\\\front\\\\components\\\\PostCardContent.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar PostCardContent = function PostCardContent(_ref) {\n  var postData = _ref.postData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: postData.split(/(#[^\\s#]+)/g).map(function (v, i) {\n      if (v.match(/(#[^\\s]+)/)) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: {\n            pathname: '/hashtag',\n            query: {\n              tag: v.slice(1)\n            }\n          },\n          as: \"/hashtag/\".concat(v.slice(1)),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n            children: v\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 13\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, _this);\n      }\n\n      return v;\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = PostCardContent;\nPostCardContent.propTypes = {\n  postData: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCardContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCardContent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkQ29udGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsc0JBQ3RCO0FBQUEsY0FDR0EsUUFBUSxDQUFDQyxLQUFULENBQWUsYUFBZixFQUE4QkMsR0FBOUIsQ0FBa0MsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDM0MsVUFBSUQsQ0FBQyxDQUFDRSxLQUFGLENBQVEsV0FBUixDQUFKLEVBQTBCO0FBQ3hCLDRCQUNFLDhEQUFDLGtEQUFEO0FBQ0UsY0FBSSxFQUFFO0FBQUVDLFlBQUFBLFFBQVEsRUFBRSxVQUFaO0FBQXdCQyxZQUFBQSxLQUFLLEVBQUU7QUFBRUMsY0FBQUEsR0FBRyxFQUFFTCxDQUFDLENBQUNNLEtBQUYsQ0FBUSxDQUFSO0FBQVA7QUFBL0IsV0FEUjtBQUVFLFlBQUUscUJBQWNOLENBQUMsQ0FBQ00sS0FBRixDQUFRLENBQVIsQ0FBZCxDQUZKO0FBQUEsaUNBS0U7QUFBQSxzQkFBSU47QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsV0FHT0MsQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0Q7O0FBQ0QsYUFBT0QsQ0FBUDtBQUNELEtBYkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHNCO0FBQUEsQ0FBeEI7O0tBQU1KO0FBbUJOQSxlQUFlLENBQUNXLFNBQWhCLEdBQTRCO0FBQUVWLEVBQUFBLFFBQVEsRUFBRUYscUVBQTJCYztBQUF2QyxDQUE1QjtBQUVBLCtEQUFlYixlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdENhcmRDb250ZW50LmpzPzkxYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7IHBvc3REYXRhIH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAge3Bvc3REYXRhLnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgaWYgKHYubWF0Y2goLygjW15cXHNdKykvKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiAnL2hhc2h0YWcnLCBxdWVyeTogeyB0YWc6IHYuc2xpY2UoMSkgfSB9fVxyXG4gICAgICAgICAgICBhcz17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfVxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPnt2fTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2O1xyXG4gICAgfSl9XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5Qb3N0Q2FyZENvbnRlbnQucHJvcFR5cGVzID0geyBwb3N0RGF0YTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRDb250ZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJQcm9wVHlwZXMiLCJQb3N0Q2FyZENvbnRlbnQiLCJwb3N0RGF0YSIsInNwbGl0IiwibWFwIiwidiIsImkiLCJtYXRjaCIsInBhdGhuYW1lIiwicXVlcnkiLCJ0YWciLCJzbGljZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostCardContent.js\n");

/***/ })

});