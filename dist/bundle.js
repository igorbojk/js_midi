/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v5.0.1 | 20191019\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, menu, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmain, menu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, main, menu, nav, section {\\n  display: block; }\\n\\n/* HTML5 hidden-attribute fix for newer browsers */\\n*[hidden] {\\n  display: none; }\\n\\nbody {\\n  line-height: 1; }\\n\\nmenu, ol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n* {\\n  box-sizing: border-box; }\\n\\nbody {\\n  background-color: #394046;\\n  color: white;\\n  font-family: 'Road Rage', cursive;\\n  font-size: 21px; }\\n\\n.midi-player {\\n  padding: 16px; }\\n\\ninput:not([type=range]) {\\n  margin-top: 4px;\\n  border-radius: 2px;\\n  border-color: #95ee67;\\n  border-width: 1px;\\n  background: #434c51;\\n  color: white;\\n  padding: 2px 4px;\\n  outline: none;\\n  height: 32px;\\n  font-size: 18px; }\\n\\ntextarea {\\n  resize: none;\\n  border-radius: 2px;\\n  border-color: #95ee67;\\n  border-width: 1px;\\n  background: #434c51;\\n  color: white;\\n  padding: 2px 4px;\\n  outline: none; }\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 5px;\\n  cursor: pointer;\\n  background: #95ee67;\\n  border-radius: 1px; }\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  margin-top: -6px; }\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  border-radius: 50%;\\n  border: 2px solid #95ee67;\\n  background: #95ee67;\\n  margin-top: -6px;\\n  box-shadow: inset 0px 1px 3px #95ee67; }\\n\\n.radio {\\n  position: relative; }\\n  .radio label {\\n    padding-left: 32px;\\n    font-size: 32px; }\\n    .radio label:hover {\\n      cursor: pointer; }\\n  .radio input {\\n    display: none; }\\n    .radio input:checked + label {\\n      color: #95ee67; }\\n    .radio input:checked + label:before,\\n    .radio input:not(:checked) + label:before {\\n      content: '';\\n      position: absolute;\\n      left: 0;\\n      top: 6px;\\n      width: 16px;\\n      height: 16px;\\n      border: 1px solid white;\\n      border-radius: 100%;\\n      background: white; }\\n    .radio input:checked + label:after {\\n      content: '';\\n      width: 12px;\\n      height: 12px;\\n      background: #95ee67;\\n      position: absolute;\\n      top: 9px;\\n      left: 3px;\\n      border-radius: 100%; }\\n\\n.error {\\n  color: #d91717;\\n  display: none;\\n  padding: 8px;\\n  font-size: 28px; }\\n  .error.show {\\n    display: block; }\\n\\nform input,\\nform textarea,\\nform button {\\n  width: 100%; }\\n\\n.flex-container {\\n  display: flex;\\n  margin: 0 -8px; }\\n  .flex-container .col {\\n    width: 50%;\\n    flex: none;\\n    padding: 0 8px;\\n    margin-bottom: 16px; }\\n\\n.form-elem {\\n  margin-bottom: 8px; }\\n  .form-elem label {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center; }\\n\\n.radio-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: space-between;\\n  height: 100%; }\\n  .radio-container .radio {\\n    width: 50%; }\\n\\nbutton {\\n  background: #434c51;\\n  border-radius: 2px;\\n  border-color: #95ee67;\\n  box-shadow: none;\\n  border-width: 1px;\\n  margin-bottom: 8px;\\n  color: white;\\n  text-transform: uppercase;\\n  font-family: 'Road Rage', cursive;\\n  font-size: 34px; }\\n  button:disabled {\\n    background: #394046;\\n    opacity: 0.5;\\n    cursor: not-allowed; }\\n  button:hover {\\n    cursor: pointer; }\\n\\n.examples {\\n  padding: 16px; }\\n  .examples h1 {\\n    font-size: 32px;\\n    margin-bottom: 16px; }\\n  .examples p {\\n    font-family: 'Times New Roman', Times, serif;\\n    margin-bottom: 24px;\\n    color: white; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://midi-player/./src/css/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://midi-player/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://midi-player/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://midi-player/./src/css/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://midi-player/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://midi-player/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://midi-player/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://midi-player/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://midi-player/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://midi-player/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/const/midiNotes.js":
/*!********************************!*\
  !*** ./src/const/midiNotes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"midiNotes\": () => (/* binding */ midiNotes)\n/* harmony export */ });\nconst midiNotes = {\r\n    'C0': 12,\r\n    'C#0': 13,\r\n    'D0': 14,\r\n    'D#0': 15,\r\n    'E0': 16,\r\n    'F0': 17,\r\n    'F#0': 18,\r\n    'G0': 19,\r\n    'G#0': 20,\r\n    'A0': 21,\r\n    'A#0': 22,\r\n    'B0': 23,\r\n    'C1': 24,\r\n    'C#1': 25,\r\n    'D1': 26,\r\n    'D#1': 27,\r\n    'E1': 28,\r\n    'F1': 29,\r\n    'F#1': 30,\r\n    'G1': 31,\r\n    'G#1': 32,\r\n    'A1': 33,\r\n    'A#1': 34,\r\n    'B1': 35,\r\n    'C2': 36,\r\n    'C#2': 37,\r\n    'D2': 38,\r\n    'D#2': 39,\r\n    'E2': 40,\r\n    'F2': 41,\r\n    'F#2': 42,\r\n    'G2': 43,\r\n    'G#2': 44,\r\n    'A2': 45,\r\n    'A#2': 46,\r\n    'B2': 47,\r\n    'C3': 48,\r\n    'C#3': 49,\r\n    'D3': 50,\r\n    'D#3': 51,\r\n    'E3': 52,\r\n    'F3': 53,\r\n    'F#3': 54,\r\n    'G3': 55,\r\n    'G#3': 56,\r\n    'A3': 57,\r\n    'A#3': 58,\r\n    'B3': 59,\r\n    'C4': 60,\r\n    'C#4': 61,\r\n    'D4': 62,\r\n    'D#4': 63,\r\n    'E4': 64,\r\n    'F4': 65,\r\n    'F#4': 66,\r\n    'G4': 67,\r\n    'G#4': 68,\r\n    'A4': 69,\r\n    'A#4': 70,\r\n    'B4': 71,\r\n    'C5': 72,\r\n    'C#5': 73,\r\n    'D5': 74,\r\n    'D#5': 75,\r\n    'E5': 76,\r\n    'F5': 77,\r\n    'F#5': 78,\r\n    'G5': 79,\r\n    'G#5': 80,\r\n    'A5': 81,\r\n    'A#5': 82,\r\n    'B5': 83,\r\n    'C6': 84,\r\n    'C#6': 85,\r\n    'D6': 86,\r\n    'D#6': 87,\r\n    'E6': 88,\r\n    'F6': 89,\r\n    'F#6': 90,\r\n    'G6': 91,\r\n    'G#6': 92,\r\n    'A6': 93,\r\n    'A#6': 94,\r\n    'B6': 95,\r\n    'C7': 96,\r\n    'C#7': 97,\r\n    'D7': 98,\r\n    'D#7': 99,\r\n    'E7': 100,\r\n    'F7': 101,\r\n    'F#7': 102,\r\n    'G7': 103,\r\n    'G#7': 104,\r\n    'A7': 105,\r\n    'A#7': 106,\r\n    'B7': 107,\r\n    'C8': 108,\r\n    'C#8': 109,\r\n    'D8': 110,\r\n    'D#8': 111,\r\n    'E8': 112,\r\n    'F8': 113,\r\n    'F#8': 114,\r\n    'G8': 115,\r\n    'G#8': 116,\r\n    'A8': 117,\r\n    'A#8': 118,\r\n    'B8': 119,\r\n    'C9': 120,\r\n    'C#9': 121,\r\n    'D9': 122,\r\n    'D#9': 123,\r\n    'E9': 124,\r\n    'F9': 126,\r\n    'F#9': 127,\r\n    '_': 0\r\n};\n\n//# sourceURL=webpack://midi-player/./src/const/midiNotes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _const_midiNotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const/midiNotes */ \"./src/const/midiNotes.js\");\n\r\n\r\n\r\nconst textField1 = document.getElementById('text-field-1');\r\nconst textField2 = document.getElementById('text-field-2');\r\nconst bpmField = document.getElementById('bpm');\r\nconst releaseField = document.getElementById('release');\r\nconst releaseValueField = document.getElementById('release-value');\r\nconst attackField = document.getElementById('attack');\r\nconst attackValueField = document.getElementById('attack-value');\r\nconst decayField = document.getElementById('decay');\r\nconst decayValueField = document.getElementById('decay-value');\r\nconst sustainField = document.getElementById('sustain');\r\nconst sustainValueField = document.getElementById('sustain-value');\r\nconst pitchField = document.getElementById('pitch');\r\nconst pitchValueField = document.getElementById('pitch-value');\r\nconst startBtn = document.getElementById('start');\r\nconst stopBtn = document.getElementById('stop');\r\nconst suspendBtn = document.getElementById('suspend');\r\nconst eps = 0.01;\r\nconst threshold = 0.001;\r\n\r\nlet ctx;\r\nlet releaseValue = 1;\r\nlet attackValue = 0;\r\nlet decayValue = 0;\r\nlet sustainValue = 50;\r\nlet instrumentType = 'default';\r\nlet pitchValue = 1;\r\nlet type = 'square';\r\nlet parserError = false;\r\nlet sources = {\r\n    first: [],\r\n    second: []\r\n};\r\nlet timer = null;\r\nlet timerStopTime = 0;\r\nlet timerStopTimeStamp = 0;\r\n\r\nfunction start() {\r\n    clearTimeout(timer);\r\n    ctx = new AudioContext() || new webkitAudioCondext();\r\n    if (!bpmField.value || (!textField1.value && !textField2.value)) {\r\n        return;\r\n    }\r\n    document.getElementById('parserError').classList.remove('show');\r\n    stopAll();\r\n    playFromArray(parseNotes(textField1.value), ctx.currentTime + eps, 'first');\r\n    playFromArray(parseNotes(textField2.value), ctx.currentTime + eps, 'second');\r\n};\r\n\r\n/**\r\n * @param {Array[sting]} array \r\n * @param {number} startTime \r\n * @param {string} source \r\n */\r\nfunction playFromArray(array, startTime, source) {\r\n    if (parserError) {\r\n        document.getElementById('parserError').classList.add('show');\r\n        return;\r\n    }\r\n    stopBtn.removeAttribute('disabled');\r\n    suspendBtn.removeAttribute('disabled');\r\n    let time = startTime;\r\n    array.forEach((note, index) => {\r\n        let freq = note.number !== 0 ? Math.pow(2, (note.number - 69) / 12) * 440 : 0;\r\n        const noteTime = note.isLong ? note.time * 1.5 : note.time;\r\n        playNote(freq, time, (60 / bpmField.value) * noteTime, index, index === array.length - 1, source);\r\n        time += (60 / bpmField.value) * noteTime;\r\n    });\r\n}\r\n\r\n/**\r\n * @param {string} notes \r\n * @returns {array}\r\n */\r\nfunction parseNotes(notes) {\r\n    if (!notes) {\r\n        return [];\r\n    }\r\n    parserError = false;\r\n    const arr = [];\r\n    notes.trim().split(' ').forEach(el => {\r\n        const [number, time] = el.split('/');\r\n        const noteTime = time && +time.replace('.', '');\r\n        if (_const_midiNotes__WEBPACK_IMPORTED_MODULE_1__.midiNotes[number] === undefined || !number || !time || isNaN(noteTime)) {\r\n            parserError = true;\r\n            return;\r\n        }\r\n        arr.push({\r\n            number: _const_midiNotes__WEBPACK_IMPORTED_MODULE_1__.midiNotes[number],\r\n            time: 4 / noteTime,\r\n            isLong: time.includes('.')\r\n        });\r\n    });\r\n    return arr;\r\n};\r\n/**\r\n * \r\n * @param {number} freq \r\n * @param {number} startTime \r\n * @param {number} endTime \r\n * @param {number} index \r\n * @param {boolean} isLast \r\n * @param {sting} source \r\n */\r\nfunction playNote(freq, startTime = 0, endTime, index, isLast, source) {\r\n    const osc = ctx.createOscillator();\r\n    const release = ctx.createGain();\r\n    const attack = ctx.createGain();\r\n    const decay = ctx.createGain();\r\n\r\n    sources[source][index] = osc;\r\n    osc.type = type;\r\n    osc.frequency.value = freq * pitchValue;\r\n    osc.connect(attack);\r\n\r\n    let time = startTime + threshold;\r\n    if (attackValue > threshold) {\r\n        time += attackValue;\r\n    }\r\n    attack.gain.setValueAtTime(0.00001, startTime);\r\n    attack.gain.exponentialRampToValueAtTime(0.9, time);\r\n    attack.connect(decay);\r\n\r\n    decay.gain.setValueAtTime(1, startTime + attackValue);\r\n    decay.gain.exponentialRampToValueAtTime(\r\n        sustainValue / 100,\r\n        startTime + attackValue + decayValue\r\n    );\r\n    decay.connect(release)\r\n\r\n    const stopTime = startTime + endTime + Math.max(releaseValue, threshold);\r\n\r\n    release.gain.setValueAtTime(0.9, startTime);\r\n    release.gain.exponentialRampToValueAtTime(\r\n        0.00001,\r\n        stopTime\r\n    );\r\n\r\n    release.connect(ctx.destination);\r\n    osc.start(startTime);\r\n    osc.stop(stopTime);\r\n    if (isLast) {\r\n        clearTimeout(timer);\r\n        timerStopTime = Math.max(timerStopTime, stopTime);\r\n        setupTimer();\r\n    }\r\n};\r\n\r\nfunction stopAll() {\r\n    Object.keys(sources).forEach(key => {\r\n        sources[key].forEach(el => el.stop());\r\n        sources[key] = [];\r\n    });\r\n};\r\n\r\nfunction stop() {\r\n    ctx.close();\r\n    stopBtn.setAttribute('disabled', 'disabled');\r\n    suspendBtn.setAttribute('disabled', 'disabled');\r\n    suspendBtn.textContent = 'pause';\r\n}\r\n\r\nfunction setupTimer() {\r\n    timerStopTimeStamp = Date.now() + (timerStopTime * 1000);\r\n    timer = setTimeout(() => {\r\n        stop();\r\n    }, timerStopTime * 1000);\r\n}\r\n\r\nfunction setValuesToFields() {\r\n    switch (instrumentType) {\r\n        case 'type1':\r\n            {\r\n                type = 'square';\r\n                releaseValue = 4;\r\n                decayValue = 0;\r\n                attackValue = 0.1;\r\n                sustainValue = 50;\r\n                break\r\n            }\r\n        case 'type2':\r\n            {\r\n                type = 'triangle';\r\n                releaseValue = 4;\r\n                decayValue = 1.4;\r\n                attackValue = 0.05;\r\n                sustainValue = 50;\r\n                break\r\n            }\r\n        case 'type3':\r\n            {\r\n                type = 'sine';\r\n                releaseValue = 3.6;\r\n                attackValue = 0.05;\r\n                decayValue = 1.1;\r\n                sustainValue = 22;\r\n                break\r\n            }\r\n        case 'type4':\r\n            {\r\n                type = 'sine';\r\n                releaseValue = 5.1;\r\n                attackValue = 0.4;\r\n                decayValue = 1.9;\r\n                sustainValue = 50;\r\n                break\r\n            }\r\n    }\r\n    releaseField.value = releaseValue;\r\n    attackField.value = attackValue;\r\n    decayField.value = decayValue;\r\n    sustainField.value = sustainValue;\r\n    releaseValueField.textContent = releaseField.value;\r\n    attackValueField.textContent = attackField.value;\r\n    decayValueField.textContent = decayField.value;\r\n    sustainValueField.textContent = sustainField.value;\r\n}\r\n\r\nstartBtn.addEventListener('click', function(evt) {\r\n    evt.stopImmediatePropagation();\r\n    evt.preventDefault();\r\n    start();\r\n}, true);\r\n\r\nstopBtn.addEventListener('click', function(evt) {\r\n    evt.stopImmediatePropagation();\r\n    evt.preventDefault();\r\n    clearTimeout(timer);\r\n    stop();\r\n}, true);\r\n\r\nsuspendBtn.addEventListener('click', function(evt) {\r\n    evt.stopImmediatePropagation();\r\n    evt.preventDefault();\r\n    clearTimeout(timer);\r\n    if (ctx.state === 'running') {\r\n        ctx.suspend();\r\n        timerStopTime = (timerStopTimeStamp - Date.now()) / 1000;\r\n        suspendBtn.textContent = 'resume';\r\n    } else {\r\n        ctx.resume();\r\n        suspendBtn.textContent = 'pause';\r\n        setupTimer();\r\n    }\r\n}, true);\r\n\r\nreleaseField.addEventListener('mouseup', function(evt) {\r\n    evt.stopImmediatePropagation();\r\n    releaseValue = +releaseField.value;\r\n    releaseValueField.textContent = releaseField.value;\r\n}, true);\r\n\r\nattackField.addEventListener('mouseup', function(evt) {\r\n    evt.stopImmediatePropagation();\r\n    attackValue = +attackField.value;\r\n    attackValueField.textContent = attackField.value;\r\n}, true);\r\n\r\ndecayField.addEventListener('mouseup', function(evt) {\r\n    evt.stopImmediatePropagation();\r\n    decayValue = +decayField.value;\r\n    decayValueField.textContent = decayField.value;\r\n}, true);\r\n\r\nsustainField.addEventListener('mouseup', function(evt) {\r\n    evt.stopImmediatePropagation();\r\n    sustainValue = +sustainField.value;\r\n    sustainValueField.textContent = sustainField.value;\r\n}, true);\r\n\r\npitchField.addEventListener('mouseup', function(evt) {\r\n    evt.stopImmediatePropagation();\r\n    pitchValue = +pitchField.value;\r\n    pitchValueField.textContent = pitchField.value;\r\n}, true);\r\n\r\ndocument.getElementsByName('instrument').forEach(el => {\r\n    el.addEventListener('change', () => {\r\n        instrumentType = el.value;\r\n        setValuesToFields();\r\n    });\r\n})\n\n//# sourceURL=webpack://midi-player/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;