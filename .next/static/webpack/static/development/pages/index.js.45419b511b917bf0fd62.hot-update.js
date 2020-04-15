webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopBarExample; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris-icons */ "./node_modules/@shopify/polaris-icons/dist/index.mjs");
var _jsxFileName = "/Users/alexursu/Documents/workspace/smartcv/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function TopBarExample() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isUserMenuOpen = _useState[0],
      setIsUserMenuOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isSearchActive = _useState2[0],
      setIsSearchActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      searchValue = _useState3[0],
      setSearchValue = _useState3[1];

  var toggleIsUserMenuOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setIsUserMenuOpen(function (isUserMenuOpen) {
      return !isUserMenuOpen;
    });
  }, []);
  var handleSearchResultsDismiss = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsSearchActive(false);
    setSearchValue('');
  }, []);
  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);
  var handleNavigationToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    console.log('toggle navigation visibility');
  }, []);
  var theme = {
    colors: {
      topBar: {
        background: '#357997'
      }
    },
    logo: {
      width: 124,
      topBarSource: 'CV',
      url: 'http://smartcv.ca',
      accessibilityLabel: 'CV Generator'
    }
  };

  var userMenuMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TopBar"].UserMenu, {
    actions: [{
      items: [{
        content: 'Back to Shopify',
        icon: _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowLeftMinor"]
      }]
    }, {
      items: [{
        content: 'Community forums'
      }]
    }],
    name: "Dharma",
    detail: "Jaded Pixel",
    initials: "D",
    open: isUserMenuOpen,
    onToggle: toggleIsUserMenuOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  });

  var searchResultsMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ActionList"], {
    items: [{
      content: 'Shopify help center'
    }, {
      content: 'Community forums'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }));

  var searchFieldMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TopBar"].SearchField, {
    onChange: handleSearchChange,
    value: searchValue,
    placeholder: "Search",
    showFocusBorder: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 31
    }
  });

  var topBarMarkup = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TopBar"], {
    showNavigationToggle: true,
    userMenu: userMenuMarkup,
    searchResultsVisible: isSearchActive,
    searchField: searchFieldMarkup,
    searchResults: searchResultsMarkup,
    onSearchResultsDismiss: handleSearchResultsDismiss,
    onNavigationToggle: handleNavigationToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  });

  return __jsx("div", {
    style: {
      height: '250px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["AppProvider"], {
    theme: theme,
    i18n: {
      Polaris: {
        Avatar: {
          label: 'Avatar',
          labelWithInitials: 'Avatar with initials {initials}'
        },
        Frame: {
          skipToContent: 'Skip to content'
        },
        TopBar: {
          toggleMenuLabel: 'Toggle menu',
          SearchField: {
            clearButtonLabel: 'Clear',
            search: 'Search'
          }
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Frame"], {
    topBar: topBarMarkup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.45419b511b917bf0fd62.hot-update.js.map