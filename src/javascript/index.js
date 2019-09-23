import showUserDataForm from './CreateUserDataForm';
import showCalendar from './CreateCalendar';

showUserDataForm();

const today = new Date();
const currentYear = today.getFullYear();
const birthdayMonth = '8';

function getUserDataFormInputValues(event) {
  event.preventDefault();
  const userForm = document.querySelector('#user-form');
  const formElementsCollection = userForm.elements;
  const HTMLcollectionLength = formElementsCollection.length;

  for (let i = 0; i < HTMLcollectionLength - 1; i += 1) {
    console.log(formElementsCollection[i].value);
  }
  showCalendar(currentYear, birthdayMonth);
}

const userDataForm = document.querySelector('#user-form');

userDataForm.addEventListener('submit', getUserDataFormInputValues);
