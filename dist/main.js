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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/app.js":
/*!*******************************!*\
  !*** ./src/javascript/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-view */ \"./src/javascript/form-view.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/javascript/store.js\");\n\n\nObject(_store__WEBPACK_IMPORTED_MODULE_1__[\"loadFromLocalStorage\"])();\nObject(_form_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_store__WEBPACK_IMPORTED_MODULE_1__[\"addFormData\"]);\nvar showFormButton = document.querySelector('#show-user-data-form');\nvar showBirthdayCalendarButton = document.querySelector('#show-birthday-calendar');\n\n//# sourceURL=webpack:///./src/javascript/app.js?");

/***/ }),

/***/ "./src/javascript/calendar-view.js":
/*!*****************************************!*\
  !*** ./src/javascript/calendar-view.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showCalendarView; });\n/* harmony import */ var _form_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-view */ \"./src/javascript/form-view.js\");\n/* harmony import */ var _cards_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards-view */ \"./src/javascript/cards-view.js\");\n/* harmony import */ var _modal_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-view */ \"./src/javascript/modal-view.js\");\n/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/helper-functions */ \"./src/javascript/utils/helper-functions.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ \"./src/javascript/store.js\");\n/* harmony import */ var _static_monthsNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/monthsNames */ \"./src/javascript/static/monthsNames.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\n\nfunction showCalendarView(day) {\n  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getMonth();\n  var year = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getFullYear();\n  var calendarRegion = document.querySelector('#calendar-region');\n  var calendarTemplate =\n  /* html */\n  \"\\n    <div class=\\\"calendar__controls-wrapper\\\">\\n      <button id=\\\"previous-month\\\" class=\\\"calendar__navigation-button\\\">\\n        <span class=\\\"navigation-button__icon\\\"></span>\\n      </button>\\n      <h3 id=\\\"calendar-heading\\\" class=\\\"calendar__date-heading\\\"></h3>\\n      <button id=\\\"next-month\\\" class=\\\"calendar__navigation-button\\\">\\n        <span class=\\\"navigation-button__icon navigation-button__icon--right\\\"></span>\\n      </button>\\n    </div>\\n    <table class=\\\"calendar__table\\\">\\n      <thead class=\\\"calendar__table-header\\\">\\n        <tr class=\\\"calendar__table-header-row\\\">\\n          <th>Sun</th>\\n          <th>Mon</th>\\n          <th>Tue</th>\\n          <th>Wed</th>\\n          <th>Thu</th>\\n          <th>Fri</th>\\n          <th>Sat</th>\\n        </tr>\\n      </thead>\\n      <tbody id=\\\"calendar-body\\\" class=\\\"calendar__table-body\\\">\\n      </tbody>\\n    </table>\\n    <div class=\\\"calendar__show-form\\\">\\n      <button id=\\\"show-form\\\" class=\\\"calendar__show-form-button\\\">\\n        <span class=\\\"show-form-button__icon\\\"></span>\\n        Show form\\n      </button>\\n    </div>\\n    \\n  \";\n  calendarRegion.innerHTML = calendarTemplate;\n\n  function createCalendarHeading() {\n    var calendarHeading = document.querySelector('#calendar-heading');\n    var calendarHeadingTemplate = \"\".concat(_static_monthsNames__WEBPACK_IMPORTED_MODULE_5__[\"default\"][Number(month)], \" \").concat(year);\n    calendarHeading.innerHTML = calendarHeadingTemplate;\n  }\n\n  createCalendarHeading();\n\n  function createCalendarBody() {\n    var calendarBody = document.querySelector('#calendar-body');\n    var firstDayOfMonth = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__[\"getFirstDayOfMonth\"])(year, month);\n    var daysInMonth = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__[\"getDaysInMonth\"])(year, month);\n    var getBirthdayMonthObjects = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__[\"filterPropertiesFromObjectsArray\"])(_store__WEBPACK_IMPORTED_MODULE_4__[\"usersDataStore\"], 'birthdateMonth', month);\n    var collectBirthdays = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__[\"collectObjectPropertiesInArray\"])(getBirthdayMonthObjects, 'birthdateDay');\n    console.log('birthday months', getBirthdayMonthObjects);\n    console.log('birthday days', collectBirthdays);\n    var date = 1;\n\n    for (var i = 0; i < 6; i += 1) {\n      var row = document.createElement('tr');\n\n      for (var j = 0; j < 7; j += 1) {\n        if (i === 0 && j < firstDayOfMonth) {\n          var cell = document.createElement('td');\n          var cellText = document.createTextNode('');\n          cell.appendChild(cellText);\n          row.appendChild(cell);\n        } else if (date > daysInMonth) {\n          break;\n        } else {\n          var _cell = document.createElement('td');\n\n          var _cellText = document.createTextNode(date); // eslint-disable-next-line no-loop-func\n\n\n          if (collectBirthdays.some(function (item) {\n            return item === date;\n          })) {\n            _cell.classList.add('birthday');\n\n            _cell.setAttribute('role', 'button');\n\n            _cell.setAttribute('tabindex', 0);\n\n            _cell.dataset.birthDay = date;\n          }\n\n          if (date === day) {\n            _cell.classList.add('birthday__current');\n          }\n\n          _cell.appendChild(_cellText);\n\n          row.appendChild(_cell);\n          date += 1;\n        }\n      }\n\n      calendarBody.appendChild(row);\n      Object(_cards_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getBirthdayMonthObjects, month);\n    }\n  }\n\n  createCalendarBody();\n\n  function attachEventListeners() {\n    var previousMonthButton = document.querySelector('#previous-month');\n    var nextMonthButton = document.querySelector('#next-month');\n    var showFormButton = document.querySelector('#show-form');\n    var showModalButton = document.querySelectorAll('.birthday');\n    previousMonthButton.addEventListener('click', function () {\n      var currentYear = month === 0 ? year - 1 : year;\n      var currentMonth = month === 0 ? 11 : month - 1;\n      showCalendarView(undefined, currentMonth, currentYear);\n    });\n    nextMonthButton.addEventListener('click', function () {\n      var currentYear = month === 11 ? year + 1 : year;\n      var currentMonth = (month + 1) % 12;\n      showCalendarView(undefined, currentMonth, currentYear);\n    });\n    showFormButton.addEventListener('click', function () {\n      Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__[\"clearRegions\"])();\n      Object(_form_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_store__WEBPACK_IMPORTED_MODULE_4__[\"addFormData\"]);\n    });\n    showModalButton.forEach(function (item) {\n      var birthday = Number(item.dataset.birthDay);\n      item.addEventListener('click', function () {\n        Object(_modal_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(birthday, month, year);\n      });\n      item.addEventListener('keyup', function (event) {\n        if (event.keyCode === 13) {\n          Object(_modal_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(birthday, month, year);\n        }\n      });\n    });\n  }\n\n  attachEventListeners();\n}\n\n//# sourceURL=webpack:///./src/javascript/calendar-view.js?");

/***/ }),

/***/ "./src/javascript/cards-view.js":
/*!**************************************!*\
  !*** ./src/javascript/cards-view.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showCardsView; });\n/* harmony import */ var _form_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-view */ \"./src/javascript/form-view.js\");\n/* harmony import */ var _calendar_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-view */ \"./src/javascript/calendar-view.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/javascript/store.js\");\n/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/helper-functions */ \"./src/javascript/utils/helper-functions.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nfunction showCardsView(arrayOfDataObjects, month, day) {\n  var cardsRegion = document.querySelector('#cards-region');\n\n  var createCardTemplate = function createCardTemplate() {\n    return arrayOfDataObjects.map(function (card) {\n      var picture = card.picture,\n          id = card.id,\n          name = card.name,\n          birthdate = card.birthdate,\n          email = card.email,\n          phone = card.phone;\n      return (\n        /* html */\n        \"\\n          <div class=\\\"birthday-card\\\">\\n            <div class=\\\"birthday-card__wrapper\\\">\\n              <div\\n                class=\\\"birthday-card__photo\\\"\\n                style=\\\"background-image: url(\".concat(picture, \");\\\"\\n              >\\n              </div>\\n              <div class=\\\"birthday-card__user-info\\\">\\n                <h2 class=\\\"user-info__name\\\">\").concat(name, \"</h2>\\n                <h3 class=\\\"user-info__birthdate\\\">\").concat(birthdate, \"</h3>\\n                <p class=\\\"user-info__phone\\\">\").concat(phone, \"</p>\\n                <p class=\\\"user-info__email\\\">\").concat(email, \"</p>\\n              </div>\\n            </div>\\n            <div class=\\\"birthday-card__controls\\\">\\n              <button\\n                class=\\\"birthday-card__button birthday-card__button--remove\\\"\\n                type='button'\\n                value=\").concat(id, \"\\n              >\\n                <span class=\\\"button__icon\\\"></span>\\n              </button>\\n              <button\\n                class=\\\"birthday-card__button birthday-card__button--edit\\\"\\n                type='button'\\n                value=\").concat(id, \"\\n              >\\n                <span class=\\\"button__icon\\\"></span>\\n              </button>\\n            </div>\\n          </div>\\n        \")\n      );\n    }).join('');\n  };\n\n  cardsRegion.innerHTML = createCardTemplate();\n\n  function attachEventListeners() {\n    var removeCardButton = document.querySelectorAll('.birthday-card__button--remove');\n    var editCardButton = document.querySelectorAll('.birthday-card__button--edit');\n    removeCardButton.forEach(function (item) {\n      item.addEventListener('click', function () {\n        Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"removeFormData\"])(item.value);\n        Object(_calendar_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(day, month);\n      });\n    });\n    editCardButton.forEach(function (item) {\n      item.addEventListener('click', function () {\n        Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__[\"clearRegions\"])();\n        var currentFormData = Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"getEditedFormCurrentData\"])(item.value);\n        Object(_form_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_store__WEBPACK_IMPORTED_MODULE_2__[\"editFormData\"], item.value, currentFormData);\n      });\n    });\n  }\n\n  attachEventListeners();\n}\n\n//# sourceURL=webpack:///./src/javascript/cards-view.js?");

/***/ }),

/***/ "./src/javascript/form-view.js":
/*!*************************************!*\
  !*** ./src/javascript/form-view.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showFormView; });\n/* harmony import */ var _calendar_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-view */ \"./src/javascript/calendar-view.js\");\n/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helper-functions */ \"./src/javascript/utils/helper-functions.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/javascript/store.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// eslint-disable-next-line import/no-cycle\n\n\n\nfunction showFormView(callback, id, currentFormData) {\n  var userFormData = {};\n  var formRegion = document.querySelector('#form-region');\n  var formTemplate =\n  /* html */\n  \"\\n    <form id=\\\"data-form\\\" class=\\\"user-data-form\\\">\\n      <div class=\\\"user-data-form__name\\\">\\n        <label for=\\\"name-input\\\">Your name</label>\\n        <input\\n          type=\\\"text\\\"\\n          id=\\\"name-input\\\"\\n          name=\\\"name\\\"\\n          placeholder=\\\"Your name\\\"\\n          required\\n          pattern=\\\"[A-Z\\u0104\\u0106\\u0118\\u0141\\u0143\\xD3\\u015A\\u0179\\u017Ba-z\\u0105\\u0107\\u0119\\u0142\\u0144\\xF3\\u015B\\u017A\\u017C]{1,}\\\"\\n          title=\\\"Name can consist of one word and only letters\\\"\\n          aria-describedby=\\\"name-help\\\"\\n          value=\\\"\\\"\\n        />\\n        <small id=\\\"name-help\\\">Name can consist of one word and only letters e.g. Pawe\\u0142</small>\\n      </div>\\n\\n      <div class=\\\"user-data-form__picture\\\">\\n        <label for=\\\"picture-input\\\">Upload your picture</label>\\n        <input\\n          type=\\\"file\\\"\\n          id=\\\"picture-input\\\"\\n          name=\\\"picture\\\"\\n          accept=\\\"image/*\\\"\\n          aria-describedby=\\\"picture-help\\\"\\n\\n        />\\n        <small id=\\\"picture-help\\\">Picture size 300x300 pixels is the best fit</small>\\n      </div>\\n\\n      <div class=\\\"user-data-form__birthdate\\\">\\n        <label for=\\\"birthdate-input\\\">Your date of birth</label>\\n        <input\\n          type=\\\"date\\\"\\n          id=\\\"birthdate-input\\\"\\n          name=\\\"birthdate\\\"\\n          max=\".concat(Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_1__[\"getCurrentDate\"])(), \"\\n          required\\n          value=\\\"\\\"\\n        />\\n      </div>\\n\\n      <div class=\\\"user-data-form__email\\\">\\n        <label for=\\\"email-input\\\">Your e-mail address</label>\\n        <input\\n          type=\\\"email\\\"\\n          id=\\\"email-input\\\"\\n          name=\\\"email\\\"\\n          placeholder=\\\"Your email address\\\"\\n          required\\n          aria-describedby=\\\"email-help\\\"\\n          value=\\\"\\\"\\n        />\\n        <small id=\\\"email-help\\\">Example of a valid e-mail address: pskwirowski@gmail.com</small>\\n      </div>\\n\\n      <div class=\\\"user-data-form__phone\\\">\\n        <label for=\\\"phone-input\\\">Your phone number</label>\\n        <input\\n          type=\\\"text\\\"\\n          id=\\\"phone-input\\\"\\n          name=\\\"phone\\\"\\n          placeholder=\\\"Your phone number\\\"\\n          required\\n          pattern=\\\"[0-9]{9}\\\"\\n          title=\\\"Valid phone number consists of 9 digits\\\"\\n          aria-describedby=\\\"phone-help\\\"\\n          value=\\\"\\\"\\n        />\\n        <small id=\\\"phone-help\\\">Valid phone number consists of 9 digits e.g. 601647108</small>\\n      </div>\\n\\n      <button type=\\\"submit\\\">Submit</button>\\n      <button id=\\\"show-calendar\\\">Show calendar</button>\\n    </form>\\n  \");\n  formRegion.innerHTML = formTemplate;\n  var dataForm = document.querySelector('#data-form');\n\n  if (currentFormData) {\n    Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"setInitialFormInputsValues\"])(dataForm, currentFormData);\n  }\n\n  function attachEventListeners() {\n    var pictureInput = dataForm.elements[1];\n    var showCalendarButton = document.querySelector('#show-calendar');\n    pictureInput.addEventListener('change', function () {\n      function addFormImageFileToResultDataObject() {\n        userFormData = Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"prepareFormImageFileData\"])(pictureInput.files[0]);\n        console.log('picture base64 hash', userFormData);\n      }\n\n      addFormImageFileToResultDataObject();\n    });\n    dataForm.addEventListener('submit', function (event) {\n      event.preventDefault();\n\n      function addFormValuesToResultDataObject() {\n        var formDataExceptImageFile = Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"prepareFormDataExceptImageFile\"])(dataForm);\n        userFormData = _objectSpread({}, userFormData, {}, formDataExceptImageFile);\n      }\n\n      addFormValuesToResultDataObject();\n      var _userFormData = userFormData,\n          birthdateMonth = _userFormData.birthdateMonth,\n          birthdateDay = _userFormData.birthdateDay;\n      console.log('updated user form data', userFormData);\n      callback(userFormData, id);\n      Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_1__[\"clearRegions\"])();\n      Object(_calendar_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(birthdateDay, birthdateMonth);\n    });\n    showCalendarButton.addEventListener('click', function (event) {\n      event.preventDefault();\n      Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_1__[\"clearRegions\"])();\n      Object(_calendar_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n  }\n\n  attachEventListeners();\n}\n\n//# sourceURL=webpack:///./src/javascript/form-view.js?");

/***/ }),

/***/ "./src/javascript/modal-view.js":
/*!**************************************!*\
  !*** ./src/javascript/modal-view.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showModalView; });\n/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helper-functions */ \"./src/javascript/utils/helper-functions.js\");\n/* harmony import */ var _static_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/api */ \"./src/javascript/static/api.js\");\n/* harmony import */ var _static_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/auth */ \"./src/javascript/static/auth.js\");\n\n\n\nfunction showModalView(day, month, year) {\n  var modalRegion = document.querySelector('#modal-region');\n  var getDateQuery = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"getFormatedDateString\"])(day, month, year);\n  var modalContainerTemplate =\n  /* html */\n  \"\\n    <div class=\\\"modal-container\\\">\\n      <div id=\\\"modal-content-region\\\"></div>\\n      <button id=\\\"close-modal\\\">X</button>\\n    </div>\\n  \";\n  var loaderTemplate =\n  /* html */\n  \"\\n    <div>Loading ...</div>\\n  \";\n  modalRegion.innerHTML = modalContainerTemplate;\n  var modalContentRegion = document.querySelector('#modal-content-region');\n  modalContentRegion.innerHTML = loaderTemplate;\n\n  function fetchApodData() {\n    fetch(\"\".concat(_static_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"?api_key=\").concat(_static_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"&date=\").concat(getDateQuery)).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      var title = data.title,\n          explanation = data.explanation,\n          url = data.url;\n      var modalTemplate =\n      /* html */\n      \"\\n          <div class=\\\"modal-container\\\">\\n            <h2>\".concat(title, \"</h2>\\n            <img src=\").concat(url, \" alt=\").concat(title, \" />\\n            <p>\").concat(explanation, \"</p>\\n          </div>\\n        \");\n      modalContentRegion.innerHTML = modalTemplate;\n    });\n  }\n\n  fetchApodData();\n\n  function attachEventListeners() {\n    var closeModalButton = document.querySelector('#close-modal');\n    closeModalButton.addEventListener('click', function () {\n      modalRegion.innerHTML = '';\n    });\n  }\n\n  attachEventListeners();\n}\n\n//# sourceURL=webpack:///./src/javascript/modal-view.js?");

/***/ }),

/***/ "./src/javascript/static/api.js":
/*!**************************************!*\
  !*** ./src/javascript/static/api.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// * Astronomy Picture of the Day API (https://api.nasa.gov/)\nvar apodApiUrl = 'https://api.nasa.gov/planetary/apod';\n/* harmony default export */ __webpack_exports__[\"default\"] = (apodApiUrl);\n\n//# sourceURL=webpack:///./src/javascript/static/api.js?");

/***/ }),

/***/ "./src/javascript/static/auth.js":
/*!***************************************!*\
  !*** ./src/javascript/static/auth.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar apodApiKey = 'LgBNly8TUsZnwDgRuGPY1gyVcYZMfgFPbjiTux0A';\n/* harmony default export */ __webpack_exports__[\"default\"] = (apodApiKey);\n\n//# sourceURL=webpack:///./src/javascript/static/auth.js?");

/***/ }),

/***/ "./src/javascript/static/monthsNames.js":
/*!**********************************************!*\
  !*** ./src/javascript/static/monthsNames.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (monthsNames);\n\n//# sourceURL=webpack:///./src/javascript/static/monthsNames.js?");

/***/ }),

/***/ "./src/javascript/store.js":
/*!*********************************!*\
  !*** ./src/javascript/store.js ***!
  \*********************************/
/*! exports provided: usersDataStore, prepareFormDataExceptImageFile, prepareFormImageFileData, loadFromLocalStorage, addFormData, removeFormData, editFormData, getEditedFormCurrentData, setInitialFormInputsValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usersDataStore\", function() { return usersDataStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepareFormDataExceptImageFile\", function() { return prepareFormDataExceptImageFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prepareFormImageFileData\", function() { return prepareFormImageFileData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadFromLocalStorage\", function() { return loadFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFormData\", function() { return addFormData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFormData\", function() { return removeFormData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editFormData\", function() { return editFormData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEditedFormCurrentData\", function() { return getEditedFormCurrentData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setInitialFormInputsValues\", function() { return setInitialFormInputsValues; });\n/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helper-functions */ \"./src/javascript/utils/helper-functions.js\");\n // eslint-disable-next-line import/no-mutable-exports\n\nvar usersDataStore = [];\nfunction prepareFormDataExceptImageFile(formDataObject) {\n  var name = formDataObject.name,\n      birthdate = formDataObject.birthdate,\n      email = formDataObject.email,\n      phone = formDataObject.phone;\n  var birthdateMonth = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"getBirthdayMonthInteger\"])(birthdate.value);\n  var birthdateDay = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"getBirthdayDayInteger\"])(birthdate.value);\n  return {\n    id: Date.now(),\n    name: name.value,\n    birthdate: birthdate.value,\n    birthdateDay: birthdateDay,\n    birthdateMonth: birthdateMonth,\n    email: email.value,\n    phone: phone.value\n  };\n}\nfunction prepareFormImageFileData(file) {\n  if (file) {\n    var formImageData = {};\n    Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"readInputPictureFileBase64\"])(file).then(function (value) {\n      formImageData.picture = value;\n    });\n    return formImageData;\n  }\n\n  return null;\n}\n\nfunction saveToLocalStorage() {\n  var message = '';\n\n  try {\n    var listToObject = {\n      data: usersDataStore\n    };\n    var userDataString = JSON.stringify(listToObject);\n    localStorage.setItem('userDataList', userDataString);\n    message = 'Local storage saving works fine';\n  } catch (event) {\n    message = 'Local storage saving is not working. Probably exceeded ¯|_(ツ)_/¯';\n  } finally {\n    console.log(message);\n  }\n}\n\nfunction loadFromLocalStorage() {\n  var localStorageData = localStorage.getItem('userDataList');\n  var parsedLocalStorageData;\n\n  if (!localStorageData) {\n    parsedLocalStorageData = {\n      data: []\n    };\n  } else {\n    parsedLocalStorageData = JSON.parse(localStorageData);\n  }\n\n  usersDataStore = parsedLocalStorageData.data;\n}\nfunction addFormData(userData) {\n  usersDataStore.push(userData);\n  console.log('localstorage data', usersDataStore);\n  saveToLocalStorage();\n}\nfunction removeFormData(id) {\n  usersDataStore = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"removeIndexOfPropertyFromArray\"])(usersDataStore, 'id', Number(id));\n  saveToLocalStorage();\n}\nfunction editFormData(userData, id) {\n  var editedDataObjectIndex = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"findIndexOfPropertyInArray\"])(usersDataStore, 'id', Number(id));\n  usersDataStore[editedDataObjectIndex] = userData;\n  saveToLocalStorage();\n}\nfunction getEditedFormCurrentData(id) {\n  var editedDataObjectIndex = Object(_utils_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"findIndexOfPropertyInArray\"])(usersDataStore, 'id', Number(id));\n  var _usersDataStore$edite = usersDataStore[editedDataObjectIndex],\n      identifier = _usersDataStore$edite.id,\n      name = _usersDataStore$edite.name,\n      birthdate = _usersDataStore$edite.birthdate,\n      birthdateDay = _usersDataStore$edite.birthdateDay,\n      birthdateMonth = _usersDataStore$edite.birthdateMonth,\n      email = _usersDataStore$edite.email,\n      phone = _usersDataStore$edite.phone,\n      picture = _usersDataStore$edite.picture;\n  return {\n    identifier: identifier,\n    name: name,\n    birthdate: birthdate,\n    birthdateDay: birthdateDay,\n    birthdateMonth: birthdateMonth,\n    email: email,\n    phone: phone,\n    picture: picture\n  };\n}\nfunction setInitialFormInputsValues(form, userFormData) {\n  /* eslint-disable no-param-reassign */\n  form.elements[0].value = userFormData.name;\n  form.elements[2].value = userFormData.birthdate;\n  form.elements[3].value = userFormData.email;\n  form.elements[4].value = userFormData.phone;\n}\n\n//# sourceURL=webpack:///./src/javascript/store.js?");

/***/ }),

/***/ "./src/javascript/utils/helper-functions.js":
/*!**************************************************!*\
  !*** ./src/javascript/utils/helper-functions.js ***!
  \**************************************************/
/*! exports provided: getCurrentDate, getFirstDayOfMonth, getDaysInMonth, getBirthdayMonthInteger, getBirthdayDayInteger, clearRegions, readInputPictureFileBase64, filterPropertiesFromObjectsArray, collectObjectPropertiesInArray, findIndexOfPropertyInArray, removeIndexOfPropertyFromArray, getFormatedDateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentDate\", function() { return getCurrentDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFirstDayOfMonth\", function() { return getFirstDayOfMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDaysInMonth\", function() { return getDaysInMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBirthdayMonthInteger\", function() { return getBirthdayMonthInteger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBirthdayDayInteger\", function() { return getBirthdayDayInteger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearRegions\", function() { return clearRegions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readInputPictureFileBase64\", function() { return readInputPictureFileBase64; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterPropertiesFromObjectsArray\", function() { return filterPropertiesFromObjectsArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectObjectPropertiesInArray\", function() { return collectObjectPropertiesInArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndexOfPropertyInArray\", function() { return findIndexOfPropertyInArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeIndexOfPropertyFromArray\", function() { return removeIndexOfPropertyFromArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFormatedDateString\", function() { return getFormatedDateString; });\nfunction getCurrentDate() {\n  var today = new Date();\n  var dd = today.getDate();\n  var mm = today.getMonth() + 1;\n  var yyyy = today.getFullYear();\n  if (dd < 10) dd = \"0\".concat(dd);\n  if (mm < 10) mm = \"0\".concat(mm);\n  today = \"\".concat(yyyy, \"-\").concat(mm, \"-\").concat(dd);\n  return today;\n}\n/** @param year Integer value representing the year, e.g. 2010 */\n\n/** @param month Integer value representing the month, beginning with 0 for January to 11 for December */\n\n/**  returned value is day of the week, where 0 represents Sunday, 1 Monday, 2 Wednesday ect. */\n\nfunction getFirstDayOfMonth(year, month) {\n  var yearToNumber = Number(year);\n  var monthToNumber = Number(month);\n  var firstDayOfMonth = new Date(yearToNumber, monthToNumber).getDay();\n  return firstDayOfMonth;\n}\nfunction getDaysInMonth(year, month) {\n  var yearToNumber = Number(year);\n  var monthToNumber = Number(month);\n  var daysInMonth = 32 - new Date(yearToNumber, monthToNumber, 32).getDate();\n  return daysInMonth;\n}\n/** @param fullBirthDate String value repersenting date in format YYYY-MM-DD, e.g. 2019-09-26 */\n\nfunction getBirthdayMonthInteger(fullBirthDate) {\n  var birthDateMonth = fullBirthDate.slice(5, 7);\n  return birthDateMonth - 1;\n}\nfunction getBirthdayDayInteger(fullBirthDate) {\n  var birthDateDay = fullBirthDate.slice(-2);\n  return Number(birthDateDay);\n}\nfunction clearRegions() {\n  var regions = ['form-region', 'calendar-region', 'cards-region'];\n  regions.forEach(function (region) {\n    var DOMelement = document.getElementById(region);\n    DOMelement.innerHTML = '';\n  });\n}\n/** @param file Selected file using DOM selector */\n\n/** eg. document.querySelector('#user-picture-input').files[0]; */\n\nfunction readInputPictureFileBase64(file) {\n  if (file) {\n    return new Promise(function (resolve, reject) {\n      var reader = new FileReader();\n\n      reader.onload = function () {\n        resolve(reader.result);\n      };\n\n      reader.onerror = reject;\n      reader.readAsDataURL(file);\n    }).then(function (result) {\n      var encodedPicture = result;\n      return encodedPicture;\n    });\n  }\n\n  return null;\n}\nfunction filterPropertiesFromObjectsArray(arrayOfObjects, objectKey, comparisonValue) {\n  return arrayOfObjects.filter(function (item) {\n    return item[objectKey] === comparisonValue;\n  });\n}\nfunction collectObjectPropertiesInArray(arrayOfObjects, objectKey) {\n  var objectPropertiesArray = [];\n  arrayOfObjects.forEach(function (item) {\n    return objectPropertiesArray.push(item[objectKey]);\n  });\n  return objectPropertiesArray;\n}\nfunction findIndexOfPropertyInArray(arrayOfObjects, objectKey, comparisonValue) {\n  return arrayOfObjects.findIndex(function (item) {\n    return item[objectKey] === comparisonValue;\n  });\n}\nfunction removeIndexOfPropertyFromArray(arrayOfObjects, objectKey, comparisonValue) {\n  return arrayOfObjects.filter(function (item) {\n    return item[objectKey] !== comparisonValue;\n  });\n}\nfunction getFormatedDateString(day, month, year) {\n  var prepareYear = \"\".concat(year - 1);\n  var preparMonth = \"\".concat(month > 9 ? month : \"0\".concat(month));\n  var prepareDay = \"\".concat(day > 9 ? day : \"0\".concat(day));\n  var createDate = \"\".concat(prepareYear, \"-\").concat(preparMonth, \"-\").concat(prepareDay);\n  return createDate;\n}\n\n//# sourceURL=webpack:///./src/javascript/utils/helper-functions.js?");

/***/ })

/******/ });