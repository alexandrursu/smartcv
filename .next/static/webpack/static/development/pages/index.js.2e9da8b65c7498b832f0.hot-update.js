webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabsExample; });
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alexursu/Documents/workspace/smartcv/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function TabsExample() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      selected = _useState[0],
      setSelected = _useState[1];

  var handleTabChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (selectedTabIndex) {
    return setSelected(selectedTabIndex);
  }, []);
  var tabs = [{
    id: 'all-customers',
    content: 'All',
    accessibilityLabel: 'All customers',
    panelID: 'all-customers-content'
  }, {
    id: 'accepts-marketing',
    content: 'Accepts marketing',
    panelID: 'accepts-marketing-content'
  }, {
    id: 'repeat-customers',
    content: 'Repeat customers',
    panelID: 'repeat-customers-content'
  }, {
    id: 'prospects',
    content: 'Prospects',
    panelID: 'prospects-content'
  }];
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["AppProvider"], {
    i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_0__,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    tabs: tabs,
    selected: selected,
    onSelect: handleTabChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, {
    title: tabs[selected].content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, "Tab ", selected, " selected")))));
} // export default () => (
//     <AppProvider i18n={enTranslations}>
//     </AppProvider>
// );

/***/ })

})
//# sourceMappingURL=index.js.2e9da8b65c7498b832f0.hot-update.js.map