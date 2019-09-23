/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/CreateUserDataForm.js":
/*!**********************************************!*\
  !*** ./src/javascript/CreateUserDataForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showUserDataForm; });\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ \"./src/javascript/helperFunctions.js\");\n\nfunction showUserDataForm() {\n  var addUserDataFormRegion = document.querySelector('#user-data-form-region');\n  var userDataFormTemplate =\n  /* html */\n  \"\\n    <form id=\\\"user-form\\\" class=\\\"user-data-form\\\">\\n      <div class=\\\"user-data-form__name\\\">\\n        <label for=\\\"user-name-input\\\">Your name</label>\\n        <input\\n          type=\\\"text\\\"\\n          id=\\\"user-name-input\\\"\\n          placeholder=\\\"Your name\\\"\\n          required\\n          pattern=\\\"[A-Z\\u0104\\u0106\\u0118\\u0141\\u0143\\xD3\\u015A\\u0179\\u017Ba-z\\u0105\\u0107\\u0119\\u0142\\u0144\\xF3\\u015B\\u017A\\u017C]{1,}\\\"\\n          title=\\\"Name can contain only letters\\\"\\n          aria-describedby=\\\"user-name-help\\\"\\n        />\\n        <small id=\\\"user-name-help\\\">Name can contain only letters</small>\\n      </div>\\n\\n      <div class=\\\"user-data-form__picture\\\">\\n        <label for=\\\"user-picture-input\\\">Upload your picture</label>\\n        <input\\n          type=\\\"file\\\"\\n          id=\\\"user-picture-input\\\"\\n          required\\n        />\\n      </div>\\n\\n      <div class=\\\"user-data-form__birthdate\\\">\\n        <label for=\\\"user-birthdate-input\\\">Your date of birth</label>\\n        <input\\n          type=\\\"date\\\"\\n          id=\\\"user-birthdate-input\\\"\\n          name=\\\"user-birthday-date\\\"\\n          max=\".concat(Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentDate\"])(), \"\\n          required\\n        />\\n      </div>\\n\\n      <div class=\\\"user-data-form__email\\\">\\n        <label for=\\\"user-email-input\\\">Your e-mail address</label>\\n        <input\\n          type=\\\"email\\\"\\n          id=\\\"user-email-input\\\"\\n          required\\n          aria-describedby=\\\"user-email-help\\\"\\n        />\\n        <small id=\\\"user-email-help\\\">Example of valid e-mail address: pskwirowski@gmail.com</small>\\n      </div>\\n\\n      <div class=\\\"user-data-form__phone\\\">\\n        <label for=\\\"user-phone-input\\\">Your phone number</label>\\n        <input\\n          type=\\\"text\\\"\\n          id=\\\"user-phone-input\\\"\\n          required\\n          pattern=\\\"[0-9]{9}\\\"\\n          title=\\\"Valid phone number consists of 9 digits\\\"\\n          aria-describedby=\\\"user-phone-help\\\"\\n        />\\n        <small id=\\\"user-phone-help\\\">Valid phone number consists of 9 digits. Example: 601647108</small>\\n      </div>\\n\\n      <button type=\\\"submit\\\" id=\\\"user-data-submit-button\\\">Submit</button>\\n    </form>\\n  \");\n  addUserDataFormRegion.innerHTML = userDataFormTemplate;\n}\n\n//# sourceURL=webpack:///./src/javascript/CreateUserDataForm.js?");

/***/ }),

/***/ "./src/javascript/helperFunctions.js":
/*!*******************************************!*\
  !*** ./src/javascript/helperFunctions.js ***!
  \*******************************************/
/*! exports provided: getCurrentDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentDate\", function() { return getCurrentDate; });\nfunction getCurrentDate() {\n  var today = new Date();\n  var dd = today.getDate();\n  var mm = today.getMonth() + 1;\n  var yyyy = today.getFullYear();\n  if (dd < 10) dd = \"0\".concat(dd);\n  if (mm < 10) mm = \"0\".concat(mm);\n  today = \"\".concat(yyyy, \"-\").concat(mm, \"-\").concat(dd);\n  return today;\n}\n\n//# sourceURL=webpack:///./src/javascript/helperFunctions.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateUserDataForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateUserDataForm */ \"./src/javascript/CreateUserDataForm.js\");\n\nObject(_CreateUserDataForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nfunction getUserDataFormInputValues(event) {\n  event.preventDefault();\n  var userForm = document.querySelector('#user-form');\n  var formElementsCollection = userForm.elements;\n  var htmlCollectionLength = formElementsCollection.length;\n\n  for (var i = 0; i < htmlCollectionLength - 1; i += 1) {\n    console.log(formElementsCollection[i].value);\n  }\n}\n\nvar submitButton = document.querySelector('#user-data-submit-button');\nsubmitButton.addEventListener('click', getUserDataFormInputValues);\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ })

/******/ });