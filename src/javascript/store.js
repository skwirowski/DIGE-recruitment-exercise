import {
  getBirthdayMonthInteger,
  getBirthdayDayInteger
} from './helperFunctions';

export let usersDataStore = [];

export function prepareUserTextData(userForm) {
  const birthdateMonth = getBirthdayMonthInteger(userForm);
  const birthdateDay = getBirthdayDayInteger(userForm);
// dodać datę urodzin dzień i miesiąc do danych użytkownika
  return {
    name: userForm.name.value,
    birthdate: userForm.birthdate.value,
    birthdateDay,
    birthdateMonth,
    email: userForm.email.value,
    phone: userForm.phone.value
  };
}

function saveToLocalStorage() {
  const listToObject = { data: usersDataStore };
  const userDataString = JSON.stringify(listToObject);

  localStorage.setItem('userDataList', userDataString);
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

export function addUser(userData) {
  usersDataStore.push(userData);

  saveToLocalStorage();
}
