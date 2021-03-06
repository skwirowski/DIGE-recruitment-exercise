export function getCurrentDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;

  today = `${yyyy}-${mm}-${dd}`;

  return today;
}

/** @param year Integer value representing the year, e.g. 2010 */
/** @param month Integer value representing the month, beginning with 0 for January to 11 for December */
/**  returned value is day of the week, where 0 represents Sunday, 1 Monday, 2 Wednesday ect. */
export function getFirstDayOfMonth(year, month) {
  const yearToNumber = Number(year);
  const monthToNumber = Number(month);
  const firstDayOfMonth = new Date(yearToNumber, monthToNumber).getDay();

  return firstDayOfMonth;
}

export function getDaysInMonth(year, month) {
  const yearToNumber = Number(year);
  const monthToNumber = Number(month);
  const daysInMonth = 32 - new Date(yearToNumber, monthToNumber, 32).getDate();

  return daysInMonth;
}

/** @param fullBirthDate String value repersenting date in format YYYY-MM-DD, e.g. 2019-09-26 */
export function getBirthdayMonthInteger(fullBirthDate) {
  const birthDateMonth = fullBirthDate.slice(5, 7);
  return birthDateMonth - 1;
}

export function getBirthdayDayInteger(fullBirthDate) {
  const birthDateDay = fullBirthDate.slice(-2);
  return Number(birthDateDay);
}

export function clearRegions() {
  const regions = ['form-region', 'calendar-region', 'cards-region'];

  regions.forEach(region => {
    const DOMelement = document.getElementById(region);
    DOMelement.innerHTML = '';
  });
}

/** @param file Selected file using DOM selector */
/** eg. document.querySelector('#user-picture-input').files[0]; */
export function readInputPictureFileBase64(file) {
  if (file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    }).then(result => {
      const encodedPicture = result;
      return encodedPicture;
    });
  }
  return null;
}

export function filterPropertiesFromObjectsArray(arrayOfObjects, objectKey, comparisonValue) {
  return arrayOfObjects.filter(item => item[objectKey] === comparisonValue);
}

export function collectObjectPropertiesInArray(arrayOfObjects, objectKey) {
  const objectPropertiesArray = [];
  arrayOfObjects.forEach(item => objectPropertiesArray.push(item[objectKey]));

  return objectPropertiesArray;
}

export function findIndexOfPropertyInArray(arrayOfObjects, objectKey, comparisonValue) {
  return arrayOfObjects.findIndex(item => item[objectKey] === comparisonValue);
}

export function removeIndexOfPropertyFromArray(arrayOfObjects, objectKey, comparisonValue) {
  return arrayOfObjects.filter(item => item[objectKey] !== comparisonValue);
}

export function getFormatedDateString(day, month, year) {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const checkDateValidity = () => {
    if (currentMonth >= month && currentDay > day) {
      return `${year}`;
    }
    return `${year - 1}`;
  };

  const prepareYear = checkDateValidity();
  const preparMonth = `${month > 8 ? month + 1 : `0${month + 1}`}`;
  const prepareDay = `${day > 9 ? day : `0${day}`}`;
  const createDate = `${prepareYear}-${preparMonth}-${prepareDay}`;
  return createDate;
}
