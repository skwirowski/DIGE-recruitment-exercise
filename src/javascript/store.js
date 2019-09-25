export let usersDataStore = [];

export function createUserData(userForm) {
  return {
    name: userForm.name.value,
    // picture: userForm.picture.value,
    birthdate: userForm.birthdate.value,
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
