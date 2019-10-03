import {
  getBirthdayMonthInteger,
  getBirthdayDayInteger,
  readInputPictureFileBase64,
  removeIndexOfPropertyFromArray,
  findIndexOfPropertyInArray,
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
    // eslint-disable-next-line no-console
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
  usersDataStore.unshift(userData);

  saveToLocalStorage();
}

export function removeFormData(id) {
  usersDataStore = removeIndexOfPropertyFromArray(usersDataStore, 'id', Number(id));

  saveToLocalStorage();
}

export function editFormData(userData, id) {
  const editedDataObjectIndex = findIndexOfPropertyInArray(usersDataStore, 'id', Number(id));
  usersDataStore[editedDataObjectIndex] = userData;
  saveToLocalStorage();
}

export function getEditedFormCurrentData(id) {
  const editedDataObjectIndex = findIndexOfPropertyInArray(usersDataStore, 'id', Number(id));
  const { id: identifier, name, birthdate, birthdateDay, birthdateMonth, email, phone, picture } = usersDataStore[
    editedDataObjectIndex
  ];

  return {
    identifier,
    name,
    birthdate,
    birthdateDay,
    birthdateMonth,
    email,
    phone,
    picture,
  };
}

export function setInitialFormInputsValues(form, userFormData) {
  /* eslint-disable no-param-reassign */
  form.elements[0].value = userFormData.name;
  form.elements[2].value = userFormData.birthdate;
  form.elements[3].value = userFormData.email;
  form.elements[4].value = userFormData.phone;
}

export function getRandomAvatarPictureUrl() {
  const staticPath = `src/images/avatars/${Math.round(Math.random() * 10)}.jpg`;

  return staticPath;
}
