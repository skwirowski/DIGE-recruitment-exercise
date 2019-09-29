import showUserDataForm from './CreateUserDataForm';
import showCalendar from './CreateCalendar';
import {
  prepareUserTextData,
  createCalendarInitialData,
  addUserData,
  usersDataStore,
  loadFromLocalStorage,
} from './store';
import { readInputPictureFileBase64 } from './helperFunctions';

function createCalendar(dataStore) {
  const { currentYear, birthdayMonth } = createCalendarInitialData(dataStore.birthdate);
  showCalendar(currentYear, birthdayMonth, dataStore.birthdateDay, dataStore);

  console.log('user data store', usersDataStore);
}

function initializeUserDataForm() {
  showUserDataForm();

  let completeUserData = {};

  const userPictureInput = document.querySelector('#user-picture-input');
  const userDataForm = document.querySelector('#user-form');
  const showUserDataFormButton = document.querySelector('#show-user-data-form');
  const showBirthdayCalendarButton = document.querySelector('#show-birthday-calendar');

  // userPictureInput.addEventListener('change', () => {
  //   const file = userPictureInput.files[0];
  //   if (file) {
  //     readInputPictureFileBase64(file).then(value => {
  //       completeUserData = { picture: value };
  //       console.log('picture base64 hash', completeUserData);
  //     });
  //   }
  // });
  userDataForm.addEventListener('submit', event => {
    event.preventDefault();

    function updateCompleteUserData(textData = prepareUserTextData(userDataForm)) {
      completeUserData = { ...completeUserData, ...textData };
    }
    updateCompleteUserData();
    addUserData(completeUserData);
    createCalendar(completeUserData);
    console.log('complete user data', completeUserData);
    console.log('data store', usersDataStore);
  });
  showUserDataFormButton.addEventListener('click', initializeUserDataForm);
  showBirthdayCalendarButton.addEventListener('click', () => showCalendar());
}

loadFromLocalStorage();
initializeUserDataForm();
