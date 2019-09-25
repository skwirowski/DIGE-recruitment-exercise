import showUserDataForm from './CreateUserDataForm';
import showCalendar from './CreateCalendar';
import {
  createUserData,
  addUser,
  usersDataStore,
  loadFromLocalStorage
} from './store';
import {
  getBirthdayMonthInteger,
  readInputPictureFileBase64,
  readFile
} from './helperFunctions';

loadFromLocalStorage();

let userDataObj = {};

function getUserDataFormInputValues() {
  const userForm = document.querySelector('#user-form');
  // const fileInput = document.querySelector('#user-picture-input');
  // const file = fileInput.files[0];

  // readInputImageFileBase64(file).then(response =>
  //   console.log('promise response', response)
  // );
  const data = createUserData(userForm);
  userDataObj = { ...userDataObj, ...data };
  console.log(userDataObj);
}

function initializeUserDataForm() {
  showUserDataForm();
  // const imageFile = document.querySelector('#user-picture-input').files[0];

  function prepareSubmitData(event) {
    event.preventDefault();

    getUserDataFormInputValues();
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthdayMonth = getBirthdayMonthInteger(userDataObj.birthdate);

    addUser(userDataObj);
    showCalendar(currentYear, birthdayMonth);
    console.log(usersDataStore);
  }

  const userDataForm = document.querySelector('#user-form');
  const showUserDataFormButton = document.querySelector('#show-user-data-form');
  const imageInput = document.querySelector('#user-picture-input');

  userDataForm.addEventListener('submit', prepareSubmitData);
  showUserDataFormButton.addEventListener('click', initializeUserDataForm);
  imageInput.addEventListener('change', () => {
    readInputPictureFileBase64(imageInput.files[0]).then(value => {
      userDataObj = { ...userDataObj, url: value };
      console.log(userDataObj);
    });
  });
}
initializeUserDataForm();
