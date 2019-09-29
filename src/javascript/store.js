import {
  getBirthdayMonthInteger,
  getBirthdayDayInteger,
  readInputPictureFileBase64,
  removeIndexOfPropertyFromArray,
} from './utils/helper-functions';

// eslint-disable-next-line import/no-mutable-exports
export let usersDataStore = [];

export function prepareFormDataExceptImageFile(formDataObject) {
  const { name, birthdate, email, phone } = formDataObject;
  const birthdateMonth = getBirthdayMonthInteger(birthdate.value);
  const birthdateDay = getBirthdayDayInteger(birthdate.value);

  return {
    id: Date.now(),
    name: name.value,
    birthdate: birthdate.value,
    birthdateDay,
    birthdateMonth,
    email: email.value,
    phone: phone.value,
  };
}

export function prepareFormImageFileData(file) {
  if (file) {
    const formImageData = {};
    readInputPictureFileBase64(file).then(value => {
      formImageData.picture = value;
    });
    return formImageData;
  }
  return null;
}

// export function createCalendarInitialData(formDataObject) {
//   const { birthdateMonth, birthdateDay } = formDataObject;
//   const today = new Date();
//   const currentYear = today.getFullYear();

//   return {
//     currentYear,
//     birthdayMonth: birthdateMonth,
//     birthday: birthdateDay,
//   };
// }

function saveToLocalStorage() {
  let message = '';
  try {
    const listToObject = { data: usersDataStore };
    const userDataString = JSON.stringify(listToObject);

    localStorage.setItem('userDataList', userDataString);
    message = 'Local storage saving works fine';
  } catch (event) {
    message = 'Local storage saving is not working. Probably exceeded ¯|_(ツ)_/¯';
  } finally {
    console.log(message);
  }
}

export function loadFromLocalStorage() {
  const localStorageData = localStorage.getItem('userDataList');
  let parsedLocalStorageData;

  if (!localStorageData) {
    parsedLocalStorageData = { data: [] };
  } else {
    parsedLocalStorageData = JSON.parse(localStorageData);
  }

  usersDataStore = parsedLocalStorageData.data;
}

export function addFormData(userData) {
  usersDataStore.push(userData);
  console.log('localstorage data', usersDataStore);

  saveToLocalStorage();
}

export function removeFormData(id) {
  usersDataStore = removeIndexOfPropertyFromArray(usersDataStore, 'id', Number(id));

  saveToLocalStorage();
}
