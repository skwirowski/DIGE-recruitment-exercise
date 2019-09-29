import { getBirthdayMonthInteger, getBirthdayDayInteger, findIndexOfPropertyInArray } from './helperFunctions';

export let usersDataStore = [];

export function prepareUserTextData(userForm) {
  const birthdateMonth = getBirthdayMonthInteger(userForm.birthdate.value);
  const birthdateDay = getBirthdayDayInteger(userForm.birthdate.value);
  return {
    id: Date.now(),
    name: userForm.name.value,
    birthdate: userForm.birthdate.value,
    birthdateDay,
    birthdateMonth,
    email: userForm.email.value,
    phone: userForm.phone.value,
  };
}

export function createCalendarInitialData(fullBirthDate) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthdayMonth = getBirthdayMonthInteger(fullBirthDate);

  return {
    currentYear,
    birthdayMonth,
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

export function addUserData(userData) {
  usersDataStore.push(userData);

  saveToLocalStorage();
}

export function removeUserData(removedDataId) {
  usersDataStore = usersDataStore.filter(item => item.id !== Number(removedDataId));

  saveToLocalStorage();
}

export function editUserData(editedDataId, userData) {
  const editedElementIndex = findIndexOfPropertyInArray(usersDataStore, 'id', Number(editedDataId));
  // usersDataStore[editedElementIndex] = userData;
  console.log('edited data id', editedDataId);
  console.log('edited element index', editedElementIndex);
  console.log('edited element', usersDataStore[editedElementIndex]);
  console.log('user data', userData);
}
