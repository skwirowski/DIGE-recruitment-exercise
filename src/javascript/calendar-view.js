/* eslint-disable import/no-cycle */
import showFormView from './form-view';
import showCardsView from './cards-view';
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
      <button id="previous-month"><< Previous</button>
      <h3 id="calendar-heading"></h3>
      <button id="next-month">Next >></button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody id="calendar-body">
      </tbody>
    </table>
    <button id="show-form">Show form</button>
  `;

  calendarRegion.innerHTML = calendarTemplate;

  function createCalendarHeading() {
    const calendarHeading = document.querySelector('#calendar-heading');
    const calendarHeadingTemplate = `${monthsNames[Number(month)]} ${year}`;
    calendarHeading.innerHTML = calendarHeadingTemplate;
  }
  createCalendarHeading();

  function createCalendarBody() {
    const calendarBody = document.querySelector('#calendar-body');
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month);

    const getBirthdayMonthObjects = filterPropertiesFromObjectsArray(usersDataStore, 'birthdateMonth', month);
    const collectBirthdays = collectObjectPropertiesInArray(getBirthdayMonthObjects, 'birthdateDay');
    console.log('birthday months', getBirthdayMonthObjects);
    console.log('birthday days', collectBirthdays);

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
            cell.classList.add('birthday-color');
          }
          if (date === day) {
            cell.className = 'current-birthday-color';
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

    previousMonthButton.addEventListener('click', () => {
      const currentYear = month === 0 ? year - 1 : year;
      const currentMonth = month === 0 ? 11 : month - 1;

      showCalendarView(currentYear, currentMonth);
    });
    nextMonthButton.addEventListener('click', () => {
      const currentYear = month === 11 ? year + 1 : year;
      const currentMonth = (month + 1) % 12;

      showCalendarView(currentYear, currentMonth);
    });
    showFormButton.addEventListener('click', () => {
      clearRegions();
      showFormView(addFormData);
    });
  }
  attachEventListeners();
}
