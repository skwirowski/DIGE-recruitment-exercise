import showUserDataForm from './CreateUserDataForm';
// import showCalendar from './CreateCalendar';
import { clearRegions } from './helperFunctions';

showUserDataForm();
// showCalendar();

function getUserDataFormInputValues(event) {
  event.preventDefault();
  const userForm = document.querySelector('#user-form');
  const formElementsCollection = userForm.elements;
  const HTMLcollectionLength = formElementsCollection.length;

  for (let i = 0; i < HTMLcollectionLength - 1; i += 1) {
    console.log(formElementsCollection[i].value);
  }
}

const userDataForm = document.querySelector('#user-form');
userDataForm.addEventListener('submit', getUserDataFormInputValues);

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const selectYear = document.getElementById('year');
const selectMonth = document.getElementById('month');

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

function showCalendar() {
  const addCalendar = document.querySelector('#calendar-region');

  clearRegions();

  const calendarTemplate = /* html */ `
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
  
  let date = 1;
  for (let i = 0; i < 6; i += 1) {
    const row = document.createElement('tr');
  }
}

showCalendar();
