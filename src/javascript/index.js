import showUserDataForm from './CreateUserDataForm';
import showCalendar from './CreateCalendar';
import {
  prepareUserTextData,
  addUser,
  usersDataStore,
  loadFromLocalStorage
} from './store';
import {
  getBirthdayMonthInteger,
  readInputPictureFileBase64
} from './helperFunctions';

loadFromLocalStorage();

function createCalendarInitialData(dataForm) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthdayMonth = getBirthdayMonthInteger(dataForm);

  return {
    currentYear,
    birthdayMonth
  };
}

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
    showCalendar(currentYear, birthdayMonth);

    console.log('user data store', usersDataStore);
  }

  userDataForm.addEventListener('submit', prepareSubmitData);
  showUserDataFormButton.addEventListener('click', initializeUserDataForm);
  userPictureInput.addEventListener('change', () => {
    readInputPictureFileBase64(userPictureInput.files[0]).then(value => {
      completeUserData = { picture: value };
      console.log('complete user data', completeUserData);
    });
  });
}
initializeUserDataForm();
