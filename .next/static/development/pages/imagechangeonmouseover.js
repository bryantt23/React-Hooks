(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\imagechangeonmouseover.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimagechangeonmouseover&absolutePagePath=C%3A%5CUsers%5Cbryan%5CDownloads%5CReactHooks%5Cpages%5Cimagechangeonmouseover.js!./":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimagechangeonmouseover&absolutePagePath=C%3A%5CUsers%5Cbryan%5CDownloads%5CReactHooks%5Cpages%5Cimagechangeonmouseover.js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/imagechangeonmouseover", function() {
      var mod = __webpack_require__(/*! ./pages/imagechangeonmouseover.js */ "./pages/imagechangeonmouseover.js")
      if(true) {
        module.hot.accept(/*! ./pages/imagechangeonmouseover.js */ "./pages/imagechangeonmouseover.js", function() {
          if(!next.router.components["/imagechangeonmouseover"]) return
          var updatedPage = __webpack_require__(/*! ./pages/imagechangeonmouseover.js */ "./pages/imagechangeonmouseover.js")
          next.router.update("/imagechangeonmouseover", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/imagechangeonmouseover.js":
/*!*****************************************!*\
  !*** ./pages/imagechangeonmouseover.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");
var _jsxFileName = "C:\\Users\\bryan\\Downloads\\ReactHooks\\pages\\imagechangeonmouseover.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnMouseOver = function ImageChangeOnMouseOver() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-187.jpg",
    secondaryImg: "/static/speakers/Speaker-187.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-1124.jpg",
    secondaryImg: "/static/speakers/Speaker-1124.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\bryan\\Downloads\\ReactHooks\\src\\ImageToggleOnMouseOver.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageTogglerOnMouseOver = function ImageTogglerOnMouseOver(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("img", {
    onMouseOver: function onMouseOver() {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImg;
    },
    src: primaryImg,
    alt: "",
    ref: imageRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageTogglerOnMouseOver);

/***/ }),

/***/ 2:
/*!************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fimagechangeonmouseover&absolutePagePath=C%3A%5CUsers%5Cbryan%5CDownloads%5CReactHooks%5Cpages%5Cimagechangeonmouseover.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fimagechangeonmouseover&absolutePagePath=C%3A%5CUsers%5Cbryan%5CDownloads%5CReactHooks%5Cpages%5Cimagechangeonmouseover.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimagechangeonmouseover&absolutePagePath=C%3A%5CUsers%5Cbryan%5CDownloads%5CReactHooks%5Cpages%5Cimagechangeonmouseover.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=imagechangeonmouseover.js.map