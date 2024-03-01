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

/***/ "./src/scss/components/navigation_drawer.scss":
/*!****************************************************!*\
  !*** ./src/scss/components/navigation_drawer.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n        const styles = `:host {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n}\n:host > div:nth-child(2) {\n  background-color: var(--md-sys-color-surface);\n  border-top-right-radius: var(--corner-lg);\n  border-bottom-right-radius: var(--corner-lg);\n  width: 360px;\n  height: 100%;\n}\n:host > div:nth-child(3) {\n  display: none;\n}\n\n:host([show=none]) {\n  display: none;\n}\n\n:host([show=modal]) {\n  width: 100%;\n  z-index: 9999;\n}\n:host([show=modal]) > div:nth-child(2) {\n  background-color: var(--md-sys-color-surface-container-low);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n:host([show=modal]) > div:nth-child(3) {\n  display: block;\n  background-color: var(--md-sys-color-scrim);\n  opacity: 0.4;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}`;\n        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);\n    \n\n//# sourceURL=webpack://gihex-comp/./src/scss/components/navigation_drawer.scss?");

/***/ }),

/***/ "./src/components/navigation-drawer.ts":
/*!*********************************************!*\
  !*** ./src/components/navigation-drawer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideNavigation: () => (/* binding */ SideNavigation)\n/* harmony export */ });\n/* harmony import */ var _scss_components_navigation_drawer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/components/navigation_drawer.scss */ \"./src/scss/components/navigation_drawer.scss\");\n\n\nconst template = document.createElement('template');\ntemplate.innerHTML = `\n<div></div>\n<div></div>\n`;\n\nclass SideNavigation extends HTMLElement {\n\n    static observedAttributes = [\"show\"];\n\n    constructor() {\n        super();\n    }\n\n    connectedCallback() {\n        const shadow = this.attachShadow({ mode: \"open\" });\n\n        const style = document.createElement(\"style\");\n        style.textContent = _scss_components_navigation_drawer_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n        shadow.appendChild(style);\n        shadow.appendChild(template.content.cloneNode(true));\n    }\n\n    // attributeChangedCallback(name: any, oldValue: any, newValue: any) {\n\n    // }\n\n\n}\n\ncustomElements.define(\"navigation-drawer\", SideNavigation);\n\n//# sourceURL=webpack://gihex-comp/./src/components/navigation-drawer.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/navigation-drawer.ts");
/******/ 	
/******/ })()
;