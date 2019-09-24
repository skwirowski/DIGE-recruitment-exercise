import showUserDataForm from './CreateUserDataForm';
import showCalendar from './CreateCalendar';
import {
  createUserData,
  addUser,
  usersDataStore,
  loadFromLocalStorage
} from './store';

loadFromLocalStorage();
showUserDataForm();
console.log('first console', usersDataStore);

const today = new Date();
const currentYear = today.getFullYear();
const birthdayMonth = '8';

function getUserDataFormInputValues(event) {
  event.preventDefault();

  const userForm = document.querySelector('#user-form');
  const userData = createUserData(userForm);
  addUser(userData);

  // const formElementsCollection = userForm.elements;
  // const HTMLcollectionLength = formElementsCollection.length;

  // for (let i = 0; i < HTMLcollectionLength - 1; i += 1) {
  //   console.log(formElementsCollection[i].value);
  // }
  showCalendar(currentYear, birthdayMonth);
  console.log(usersDataStore);
}

// const userDataForm = document.querySelector('#user-form');
const showUserDataFormButton = document.querySelector('#show-user-data-form');

// userDataForm.addEventListener('submit', getUserDataFormInputValues);
showUserDataFormButton.addEventListener('click', showUserDataForm);
