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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n        const styles = `*{box-sizing:border-box}:host,:host([show=standard]){position:fixed;left:0;top:0;height:100%;transition:all;-webkit-transition-duration:var(--duration-normal);-moz-transition-duration:var(--duration-normal);-ms-transition-duration:var(--duration-normal);-o-transition-duration:var(--duration-normal);transition-duration:var(--duration-normal)}:host>div:nth-child(2),:host([show=standard])>div:nth-child(2){background-color:var(--md-sys-color-surface);border-top-right-radius:var(--corner-lg);border-bottom-right-radius:var(--corner-lg);width:360px;height:100%}:host>div:nth-child(3),:host([show=standard])>div:nth-child(3){display:none}:host([show=no]){left:-360px}:host([show=no])>div:nth-child(3){display:none}:host([show=modal]){width:100%;z-index:9999}:host([show=modal])>div:nth-child(2){background-color:var(--md-sys-color-surface-container-low);position:absolute;top:0;left:0;z-index:1}:host([show=modal])>div:nth-child(2)::before{content:\"\";-webkit-box-shadow:0px 1px 2px 0px var(--md-sys-color-shadow);-moz-box-shadow:0px 1px 2px 0px var(--md-sys-color-shadow);-ms-box-shadow:0px 1px 2px 0px var(--md-sys-color-shadow);-o-box-shadow:0px 1px 2px 0px var(--md-sys-color-shadow);box-shadow:0px 1px 2px 0px var(--md-sys-color-shadow);opacity:.3;transition-property:box-shadow,opacity;inset:0;position:absolute;border-radius:inherit;z-index:-1}:host([show=modal])>div:nth-child(2)::after{content:\"\";-webkit-box-shadow:0px 1px 3px 1px var(--md-sys-color-shadow);-moz-box-shadow:0px 1px 3px 1px var(--md-sys-color-shadow);-ms-box-shadow:0px 1px 3px 1px var(--md-sys-color-shadow);-o-box-shadow:0px 1px 3px 1px var(--md-sys-color-shadow);box-shadow:0px 1px 3px 1px var(--md-sys-color-shadow);opacity:.15;transition-property:box-shadow,opacity;inset:0;position:absolute;border-radius:inherit;z-index:-1}:host([show=modal])>div:nth-child(3){display:block;background-color:var(--md-sys-color-scrim);opacity:.4;position:absolute;top:0;left:0;height:100%;width:100%}`;\n        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);\n    \n\n//# sourceURL=webpack://gihex-comp/./src/scss/components/navigation_drawer.scss?");

/***/ }),

/***/ "./src/components/navigation-drawer.ts":
/*!*********************************************!*\
  !*** ./src/components/navigation-drawer.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SideNavigation = void 0;\nconst navigation_drawer_scss_1 = __importDefault(__webpack_require__(/*! ../scss/components/navigation_drawer.scss */ \"./src/scss/components/navigation_drawer.scss\"));\n/**\n * Attributes:\n * - `show` :`standard` as deafult, `modal`, or `no` to hide\n */\nclass SideNavigation extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        const shadow = this.attachShadow({ mode: \"open\" });\n        const style = document.createElement(\"style\");\n        style.textContent = navigation_drawer_scss_1.default;\n        const menu_container = document.createElement(\"div\");\n        const menu_slot = document.createElement(\"slot\");\n        menu_container.appendChild(menu_slot);\n        const scrim = document.createElement(\"div\");\n        shadow.appendChild(style);\n        shadow.appendChild(menu_container);\n        shadow.appendChild(scrim);\n        // shadow.appendChild(template.content.cloneNode(true));\n    }\n}\nexports.SideNavigation = SideNavigation;\ncustomElements.define(\"navigation-drawer\", SideNavigation);\n\n\n//# sourceURL=webpack://gihex-comp/./src/components/navigation-drawer.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/navigation-drawer.ts");
/******/ 	
/******/ })()
;