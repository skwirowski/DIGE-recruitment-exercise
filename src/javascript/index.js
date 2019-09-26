import showUserDataForm from './CreateUserDataForm';
import showCalendar from './CreateCalendar';
import showUserBirthdayCard from './CreateBirthdayCard';
import {
  prepareUserTextData,
  createCalendarInitialData,
  addUser,
  usersDataStore,
  loadFromLocalStorage
} from './store';
import { readInputPictureFileBase64 } from './helperFunctions';

loadFromLocalStorage();

function initializeUserDataForm() {
  showUserDataForm();

  let completeUserData = {};

  const userDataForm = document.querySelector('#user-form');
  const showUserDataFormButton = document.querySelector('#show-user-data-form');
  const userPictureInput = document.querySelector('#user-picture-input');

  function prepareSubmitData(event) {
    event.preventDefault();

    const textUserData = prepareUserTextData(userDataForm);
    completeUserData = { ...completeUserData, ...textUserData };
    addUser(completeUserData);

    const { currentYear, birthdayMonth } = createCalendarInitialData(
      completeUserData.birthdate
    );
    showCalendar(currentYear, birthdayMonth, completeUserData.birthdateDay);

    console.log('user data store', usersDataStore);
  }

  userDataForm.addEventListener('submit', prepareSubmitData);
  showUserDataFormButton.addEventListener('click', initializeUserDataForm);
  userPictureInput.addEventListener('change', () => {
    const file = userPictureInput.files[0];
    if (file) {
      readInputPictureFileBase64(file).then(value => {
        completeUserData = { picture: value };
        console.log('complete user data', completeUserData);
      });
    }
  });
}
initializeUserDataForm();
