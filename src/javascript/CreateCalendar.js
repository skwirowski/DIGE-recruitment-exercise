import showUserBirthdayCard from './CreateBirthdayCard';
import { usersDataStore } from './store';
import {
  clearRegions,
  getFirstDayOfMonth,
  getDaysInMonth
} from './helperFunctions';
import monthsNames from './static/monthsNames';

export default function showCalendar(
  year = new Date().getFullYear(),
  month = new Date().getMonth(),
  day
) {
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const addCalendar = document.querySelector('#calendar-region');

  clearRegions();

  const calendarTemplate = /* html */ `
    <div class="calendar__controls-wrapper">
      <button id="calendar-previous-month-button"><< Previous</button>
      <h3 id="calendar-month-year"></h3>
      <button id="calendar-next-month-button">Next >></button>
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
  `;

  addCalendar.innerHTML = calendarTemplate;

  const calendarMonthAndYear = document.querySelector('#calendar-month-year');
  const calendarMonthAndYearTemplate = `${monthsNames[Number(month)]} ${year}`;
  calendarMonthAndYear.innerHTML = calendarMonthAndYearTemplate;

  const calendarBody = document.querySelector('#calendar-body');
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

        if (date === day) {
          cell.classList.add('color');
        }
        cell.appendChild(cellText);
        row.appendChild(cell);

        date += 1;
      }
    }
    calendarBody.appendChild(row);
    showUserBirthdayCard(usersDataStore);
  }

  const previousMonthButton = document.querySelector(
    '#calendar-previous-month-button'
  );
  const nextMonthButton = document.querySelector('#calendar-next-month-button');

  previousMonthButton.addEventListener('click', () => {
    const currentYear = month === 0 ? year - 1 : year;
    const currentMonth = month === 0 ? 11 : month - 1;

    showCalendar(currentYear, currentMonth);
    showUserBirthdayCard(usersDataStore);
  });
  nextMonthButton.addEventListener('click', () => {
    const currentYear = month === 11 ? year + 1 : year;
    const currentMonth = (month + 1) % 12;

    showCalendar(currentYear, currentMonth);
    showUserBirthdayCard(usersDataStore);
  });
}
