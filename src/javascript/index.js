import showUserDataForm from './CreateUserDataForm';
import showCalendar from './CreateCalendar';
import {
  createUserData,
  addUser,
  usersDataStore,
  loadFromLocalStorage
} from './store';

function getUserDataFormInputValues() {
  const userForm = document.querySelector('#user-form');
  return createUserData(userForm);
}

function getBirthdayMonthInteger(birthDate) {
  const birthDateMonth = birthDate.slice(5, 7);
  return birthDateMonth - 1;
}

function initializeUserDataForm() {
  loadFromLocalStorage();
  showUserDataForm();

  function prepareSubmitData(event) {
    event.preventDefault();

    const userData = getUserDataFormInputValues();
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthdayMonth = getBirthdayMonthInteger(userData.birthdate);

    addUser(userData);
    showCalendar(currentYear, birthdayMonth);
    console.log(usersDataStore);
  }

  const userDataForm = document.querySelector('#user-form');
  const showUserDataFormButton = document.querySelector('#show-user-data-form');

  userDataForm.addEventListener('submit', prepareSubmitData);
  showUserDataFormButton.addEventListener('click', initializeUserDataForm);
}

initializeUserDataForm();
