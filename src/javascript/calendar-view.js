/* eslint-disable import/no-cycle */
import showFormView from './form-view';
import showCardsView from './cards-view';
import showModalView from './modal-view';
import {
  getFirstDayOfMonth,
  getDaysInMonth,
  clearRegions,
  filterPropertiesFromObjectsArray,
  collectObjectPropertiesInArray,
} from './utils/helper-functions';
import { usersDataStore, addFormData } from './store';
import monthsNames from './static/monthsNames';

export default function showCalendarView(day, month = new Date().getMonth(), year = new Date().getFullYear()) {
  const calendarRegion = document.querySelector('#calendar-region');

  const calendarTemplate = /* html */ `
    <div class="calendar__controls-wrapper">
      <button id="previous-month" class="calendar__navigation-button">
        <span class="navigation-button__icon"></span>
      </button>
      <h3 id="calendar-heading" class="calendar__date-heading"></h3>
      <button id="next-month" class="calendar__navigation-button">
        <span class="navigation-button__icon navigation-button__icon--right"></span>
      </button>
    </div>
    <table class="calendar__table">
      <thead class="calendar__table-header">
        <tr class="calendar__table-header-row">
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody id="calendar-body" class="calendar__table-body">
      </tbody>
    </table>
    <div class="calendar__show-form">
      <button id="show-form" class="calendar__show-form-button">
        <span class="show-form-button__icon"></span>
        Show form
      </button>
    </div>
    <div class="calendar__toggle-birthdays-range">
      <h2 id="toggle-birthday-dates-description" class="toggle-birthdays-range__description">
        <span>Current month</span> birthday dates
      </h2>
      <button id="toggle-birthday-dates-range" class="toggle-birthdays-range__button">
        <span class="button__content">Toggle</span>
      </button>
    </div>

  `;

  calendarRegion.innerHTML = calendarTemplate;

  function createCalendarHeading() {
    const calendarHeading = document.querySelector('#calendar-heading');
    const calendarHeadingTemplate = `${monthsNames[Number(month)]} ${year}`;
    calendarHeading.innerHTML = calendarHeadingTemplate;
  }
  createCalendarHeading();

  function prepareCurrentMonthBirthdayDates() {
    const getBirthdayMonthObjects = filterPropertiesFromObjectsArray(usersDataStore, 'birthdateMonth', month);
    const collectBirthdays = collectObjectPropertiesInArray(getBirthdayMonthObjects, 'birthdateDay');

    return {
      getBirthdayMonthObjects,
      collectBirthdays,
    };
  }
  const { getBirthdayMonthObjects, collectBirthdays } = prepareCurrentMonthBirthdayDates();
  let areWholeYearBirthdayCardsDisplayed = false;

  function createCalendarBody() {
    const calendarBody = document.querySelector('#calendar-body');
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);

    let date = 1;

    for (let i = 0; i < 6; i += 1) {
      const row = document.createElement('tr');

      for (let j = 0; j < 7; j += 1) {
        if (i === 0 && j < firstDayOfMonth) {
          const cell = document.createElement('td');
          const cellText = document.createTextNode('');
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          const cell = document.createElement('td');
          const cellText = document.createTextNode(date);

          // eslint-disable-next-line no-loop-func
          if (collectBirthdays.some(item => item === date)) {
            cell.classList.add('birthday');
            cell.setAttribute('role', 'button');
            cell.setAttribute('tabindex', 0);
            cell.dataset.birthDay = date;
          }
          if (date === day) {
            cell.classList.add('birthday__current');
          }

          cell.appendChild(cellText);
          row.appendChild(cell);

          date += 1;
        }
      }
      calendarBody.appendChild(row);
      showCardsView(getBirthdayMonthObjects, month);
    }
  }
  createCalendarBody();

  function attachEventListeners() {
    const previousMonthButton = document.querySelector('#previous-month');
    const nextMonthButton = document.querySelector('#next-month');
    const showFormButton = document.querySelector('#show-form');
    const showModalButton = document.querySelectorAll('.birthday');
    const toggleBirthdayDatesRangeButton = document.querySelector('#toggle-birthday-dates-range');
    const toggleBirthdayDatesRangeDescription = document.querySelector('#toggle-birthday-dates-description');

    previousMonthButton.addEventListener('click', () => {
      const currentYear = month === 0 ? year - 1 : year;
      const currentMonth = month === 0 ? 11 : month - 1;

      showCalendarView(undefined, currentMonth, currentYear);
    });

    nextMonthButton.addEventListener('click', () => {
      const currentYear = month === 11 ? year + 1 : year;
      const currentMonth = (month + 1) % 12;

      showCalendarView(undefined, currentMonth, currentYear);
    });

    showFormButton.addEventListener('click', () => {
      clearRegions();
      showFormView(addFormData);
    });

    showModalButton.forEach(item => {
      const birthday = Number(item.dataset.birthDay);
      item.addEventListener('click', () => {
        showModalView(birthday, month, year);
      });
      item.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          showModalView(birthday, month, year);
        }
      });
    });

    toggleBirthdayDatesRangeButton.addEventListener('click', () => {
      function toggleBirthdayCardsDisplayRange() {
        if (areWholeYearBirthdayCardsDisplayed) {
          showCardsView(getBirthdayMonthObjects, month);
          areWholeYearBirthdayCardsDisplayed = !areWholeYearBirthdayCardsDisplayed;

          toggleBirthdayDatesRangeDescription.innerHTML = /* html */ `
            <span>Current month</span> birthday dates
          `;
        } else {
          showCardsView(usersDataStore, month);
          areWholeYearBirthdayCardsDisplayed = !areWholeYearBirthdayCardsDisplayed;

          toggleBirthdayDatesRangeDescription.innerHTML = /* html */ `
            <span>All</span> birthday dates
          `;
        }
      }
      toggleBirthdayCardsDisplayRange();
    });
  }
  attachEventListeners();
}
