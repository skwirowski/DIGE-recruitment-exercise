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

/***/ "./src/javascript/CreateCalendar.js":
/*!******************************************!*\
  !*** ./src/javascript/CreateCalendar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showCalendar; });\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ \"./src/javascript/helperFunctions.js\");\n/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/data */ \"./src/javascript/static/data.js\");\n\n\nfunction showCalendar() {\n  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getFullYear();\n  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getMonth();\n  var firstDayOfMonth = Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"getFirstDayOfMonth\"])(year, month);\n  var daysInMonth = Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"getDaysInMonth\"])(year, month);\n  var addCalendar = document.querySelector('#calendar-region');\n  Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"clearRegions\"])();\n  var calendarTemplate =\n  /* html */\n  \"\\n    <div class=\\\"calendar__controls-wrapper\\\">\\n      <button id=\\\"calendar-previous-month-button\\\"><< Previous</button>\\n      <h3 id=\\\"calendar-month-year\\\"></h3>\\n      <button id=\\\"calendar-next-month-button\\\">Next >></button>\\n    </div>\\n    <table>\\n      <thead>\\n        <tr>\\n          <th>Sun</th>\\n          <th>Mon</th>\\n          <th>Tue</th>\\n          <th>Wed</th>\\n          <th>Thu</th>\\n          <th>Fri</th>\\n          <th>Sat</th>\\n        </tr>\\n      </thead>\\n      <tbody id=\\\"calendar-body\\\">\\n      </tbody>\\n    </table>\\n  \";\n  addCalendar.innerHTML = calendarTemplate;\n  var calendarMonthAndYear = document.querySelector('#calendar-month-year');\n  var calendarMonthAndYearTemplate = \"\".concat(_static_data__WEBPACK_IMPORTED_MODULE_1__[\"monthsNames\"][Number(month)], \" \").concat(year);\n  calendarMonthAndYear.innerHTML = calendarMonthAndYearTemplate;\n  var calendarBody = document.querySelector('#calendar-body');\n  var date = 1;\n\n  for (var i = 0; i < 6; i += 1) {\n    var row = document.createElement('tr');\n\n    for (var j = 0; j < 7; j += 1) {\n      if (i === 0 && j < firstDayOfMonth) {\n        var cell = document.createElement('td');\n        var cellText = document.createTextNode('');\n        cell.appendChild(cellText);\n        row.appendChild(cell);\n      } else if (date > daysInMonth) {\n        break;\n      } else {\n        var _cell = document.createElement('td');\n\n        var _cellText = document.createTextNode(date);\n\n        _cell.appendChild(_cellText);\n\n        row.appendChild(_cell);\n        date += 1;\n      }\n    }\n\n    calendarBody.appendChild(row);\n  }\n\n  var previousMonthButton = document.querySelector('#calendar-previous-month-button');\n  var nextMonthButton = document.querySelector('#calendar-next-month-button');\n  previousMonthButton.addEventListener('click', function () {\n    var currentYear = month === 0 ? year - 1 : year;\n    var currentMonth = month === 0 ? 11 : month - 1;\n    showCalendar(currentYear, currentMonth);\n  });\n  nextMonthButton.addEventListener('click', function () {\n    var currentYear = month === 11 ? year + 1 : year;\n    var currentMonth = (month + 1) % 12;\n    showCalendar(currentYear, currentMonth);\n  });\n}\n\n//# sourceURL=webpack:///./src/javascript/CreateCalendar.js?");

/***/ }),

/***/ "./src/javascript/CreateUserDataForm.js":
/*!**********************************************!*\
  !*** ./src/javascript/CreateUserDataForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showUserDataForm; });\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ \"./src/javascript/helperFunctions.js\");\n\nfunction showUserDataForm() {\n  var addUserDataFormRegion = document.querySelector('#user-data-form-region');\n  Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"clearRegions\"])();\n  var userDataFormTemplate =\n  /* html */\n  \"\\n    <form id=\\\"user-form\\\" class=\\\"user-data-form\\\">\\n      <div class=\\\"user-data-form__name\\\">\\n        <label for=\\\"user-name-input\\\">Your name</label>\\n        <input\\n          type=\\\"text\\\"\\n          id=\\\"user-name-input\\\"\\n          name=\\\"name\\\"\\n          placeholder=\\\"Your name\\\"\\n          required\\n          pattern=\\\"[A-Z\\u0104\\u0106\\u0118\\u0141\\u0143\\xD3\\u015A\\u0179\\u017Ba-z\\u0105\\u0107\\u0119\\u0142\\u0144\\xF3\\u015B\\u017A\\u017C]{1,}\\\"\\n          title=\\\"Name can contain only letters\\\"\\n          aria-describedby=\\\"user-name-help\\\"\\n          value=\\\"Pawe\\u0142\\\"\\n        />\\n        <small id=\\\"user-name-help\\\">Name can be one word and contain only letters</small>\\n      </div>\\n\\n      <div class=\\\"user-data-form__picture\\\">\\n        <label for=\\\"user-picture-input\\\">Upload your picture</label>\\n        <input\\n          type=\\\"file\\\"\\n          id=\\\"user-picture-input\\\"\\n          name=\\\"picture\\\"\\n          accept=\\\"image/*\\\"\\n\\n        />\\n      </div>\\n\\n      <div class=\\\"user-data-form__birthdate\\\">\\n        <label for=\\\"user-birthdate-input\\\">Your date of birth</label>\\n        <input\\n          type=\\\"date\\\"\\n          id=\\\"user-birthdate-input\\\"\\n          name=\\\"birthdate\\\"\\n          max=\".concat(Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_0__[\"getCurrentDate\"])(), \"\\n          required\\n          value=\\\"2018-01-14\\\"\\n        />\\n      </div>\\n\\n      <div class=\\\"user-data-form__email\\\">\\n        <label for=\\\"user-email-input\\\">Your e-mail address</label>\\n        <input\\n          type=\\\"email\\\"\\n          id=\\\"user-email-input\\\"\\n          name=\\\"email\\\"\\n          required\\n          aria-describedby=\\\"user-email-help\\\"\\n          value=\\\"pskwirowski@gmail.com\\\"\\n        />\\n        <small id=\\\"user-email-help\\\">Example of valid e-mail address: pskwirowski@gmail.com</small>\\n      </div>\\n\\n      <div class=\\\"user-data-form__phone\\\">\\n        <label for=\\\"user-phone-input\\\">Your phone number</label>\\n        <input\\n          type=\\\"text\\\"\\n          id=\\\"user-phone-input\\\"\\n          name=\\\"phone\\\"\\n          required\\n          pattern=\\\"[0-9]{9}\\\"\\n          title=\\\"Valid phone number consists of 9 digits\\\"\\n          aria-describedby=\\\"user-phone-help\\\"\\n          value=\\\"601647108\\\"\\n        />\\n        <small id=\\\"user-phone-help\\\">Valid phone number consists of 9 digits. Example: 601647108</small>\\n      </div>\\n\\n      <button type=\\\"submit\\\">Submit</button>\\n    </form>\\n  \");\n  addUserDataFormRegion.innerHTML = userDataFormTemplate;\n}\n\n//# sourceURL=webpack:///./src/javascript/CreateUserDataForm.js?");

/***/ }),

/***/ "./src/javascript/helperFunctions.js":
/*!*******************************************!*\
  !*** ./src/javascript/helperFunctions.js ***!
  \*******************************************/
/*! exports provided: getCurrentDate, getFirstDayOfMonth, getDaysInMonth, getBirthdayMonthInteger, clearRegions, readInputPictureFileBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentDate\", function() { return getCurrentDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFirstDayOfMonth\", function() { return getFirstDayOfMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDaysInMonth\", function() { return getDaysInMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBirthdayMonthInteger\", function() { return getBirthdayMonthInteger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearRegions\", function() { return clearRegions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readInputPictureFileBase64\", function() { return readInputPictureFileBase64; });\nfunction getCurrentDate() {\n  var today = new Date();\n  var dd = today.getDate();\n  var mm = today.getMonth() + 1;\n  var yyyy = today.getFullYear();\n  if (dd < 10) dd = \"0\".concat(dd);\n  if (mm < 10) mm = \"0\".concat(mm);\n  today = \"\".concat(yyyy, \"-\").concat(mm, \"-\").concat(dd);\n  return today;\n}\n/** @param year Integer value representing the year, eg. 2010 */\n\n/** @param month Integer value representing the month, beginning with 0 for January to 11 for December */\n\n/**  returned value is day of the week, where 0 represents Sunday, 1 Monday, 2 Wednesday ect. */\n\nfunction getFirstDayOfMonth(year, month) {\n  var yearToNumber = Number(year);\n  var monthToNumber = Number(month);\n  var firstDayOfMonth = new Date(yearToNumber, monthToNumber).getDay();\n  return firstDayOfMonth;\n}\nfunction getDaysInMonth(year, month) {\n  var yearToNumber = Number(year);\n  var monthToNumber = Number(month);\n  var daysInMonth = 32 - new Date(yearToNumber, monthToNumber, 32).getDate();\n  return daysInMonth;\n}\nfunction getBirthdayMonthInteger(fullBirthDate) {\n  var birthDateMonth = fullBirthDate.slice(5, 7);\n  return birthDateMonth - 1;\n} // export function getBirthdayDayInteger(fullBirthDate) {\n//   const birthDateDay = fullBirthDate.slice(-2, -1);\n//   return Number(birthDateDay);\n// }\n\nfunction clearRegions() {\n  var regions = ['user-data-form-region', 'calendar-region'];\n  regions.forEach(function (region) {\n    var DOMelement = document.getElementById(region);\n    DOMelement.innerHTML = '';\n  });\n}\n/** @param file Selected file using DOM selector */\n\n/** eg. document.querySelector('#user-picture-input').files[0]; */\n\nfunction readInputPictureFileBase64(file, resultStore) {\n  return new Promise(function (resolve, reject) {\n    var reader = new FileReader();\n\n    reader.onload = function () {\n      resolve(reader.result);\n    };\n\n    reader.onerror = reject;\n    reader.readAsDataURL(file);\n  }).then(function (result) {\n    var encodedPicture = result;\n    return encodedPicture;\n  });\n}\n\n//# sourceURL=webpack:///./src/javascript/helperFunctions.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateUserDataForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateUserDataForm */ \"./src/javascript/CreateUserDataForm.js\");\n/* harmony import */ var _CreateCalendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCalendar */ \"./src/javascript/CreateCalendar.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/javascript/store.js\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helperFunctions */ \"./src/javascript/helperFunctions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nObject(_store__WEBPACK_IMPORTED_MODULE_2__[\"loadFromLocalStorage\"])();\n\nfunction createCalendarInitialData(dataForm) {\n  var today = new Date();\n  var currentYear = today.getFullYear();\n  var birthdayMonth = Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_3__[\"getBirthdayMonthInteger\"])(dataForm);\n  return {\n    currentYear: currentYear,\n    birthdayMonth: birthdayMonth\n  };\n}\n\nfunction initializeUserDataForm() {\n  Object(_CreateUserDataForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var completeUserData = {};\n  var userDataForm = document.querySelector('#user-form');\n  var showUserDataFormButton = document.querySelector('#show-user-data-form');\n  var userPictureInput = document.querySelector('#user-picture-input');\n\n  function prepareSubmitData(event) {\n    event.preventDefault();\n    var textUserData = Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"prepareUserTextData\"])(userDataForm);\n    completeUserData = _objectSpread({}, completeUserData, {}, textUserData);\n    Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"addUser\"])(completeUserData);\n\n    var _createCalendarInitia = createCalendarInitialData(completeUserData.birthdate),\n        currentYear = _createCalendarInitia.currentYear,\n        birthdayMonth = _createCalendarInitia.birthdayMonth;\n\n    Object(_CreateCalendar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currentYear, birthdayMonth);\n    console.log('user data store', _store__WEBPACK_IMPORTED_MODULE_2__[\"usersDataStore\"]);\n  }\n\n  userDataForm.addEventListener('submit', prepareSubmitData);\n  showUserDataFormButton.addEventListener('click', initializeUserDataForm);\n  userPictureInput.addEventListener('change', function () {\n    Object(_helperFunctions__WEBPACK_IMPORTED_MODULE_3__[\"readInputPictureFileBase64\"])(userPictureInput.files[0]).then(function (value) {\n      completeUserData = {\n        picture: value\n      };\n      console.log('complete user data', completeUserData);\n    });\n  });\n}\n\ninitializeUserDataForm();\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/static/data.js":
/*!***************************************!*\
  !*** ./src/javascript/static/data.js ***!
  \***************************************/
/*! exports provided: monthsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"monthsNames\", function() { return monthsNames; });\nvar monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\n//# sourceURL=webpack:///./src/javascript/static/data.js?");

/***/ }),

/***/ "./src/javascript/store.js":
/*!*********************************!*\
  !*** ./src/javascript/store.js ***!
  \*********************************/
/*! exports provided: usersDataStore, prepareUserTextData, loadFromLocalStorage, addUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usersDataStore\", function() { return usersDataStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepareUserTextData\", function() { return prepareUserTextData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadFromLocalStorage\", function() { return loadFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addUser\", function() { return addUser; });\nvar usersDataStore = [];\nfunction prepareUserTextData(userForm) {\n  return {\n    name: userForm.name.value,\n    birthdate: userForm.birthdate.value,\n    email: userForm.email.value,\n    phone: userForm.phone.value\n  };\n}\n\nfunction saveToLocalStorage() {\n  var listToObject = {\n    data: usersDataStore\n  };\n  var userDataString = JSON.stringify(listToObject);\n  localStorage.setItem('userDataList', userDataString);\n}\n\nfunction loadFromLocalStorage() {\n  var localStorageData = localStorage.getItem('userDataList');\n  var parsedLocalStorageData;\n\n  if (!localStorageData) {\n    parsedLocalStorageData = {\n      data: []\n    };\n  } else {\n    parsedLocalStorageData = JSON.parse(localStorageData);\n  }\n\n  usersDataStore = parsedLocalStorageData.data;\n}\nfunction addUser(userData) {\n  usersDataStore.push(userData);\n  saveToLocalStorage();\n}\n\n//# sourceURL=webpack:///./src/javascript/store.js?");

/***/ })

/******/ });