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

/** @param month Integer value representing the month, beginning with 0 for January to 11 for December */
/**  returned value is day of the week, where 0 represents Sunday, 1 Monday, 2 Wednesday ect. */
export function getFirstDayOfMonth(month) {
  const monthToNumber = Number(month);
  const today = new Date();
  const year = today.getFullYear();
  const firstDayOfMonth = new Date(year, monthToNumber).getDay();

  return firstDayOfMonth;
}

export function getDaysInMonth(month) {
  const monthToNumber = Number(month);
  const today = new Date();
  const year = today.getFullYear();
  const daysInMonth = 32 - new Date(year, monthToNumber, 32).getDate();

  return daysInMonth;
}

export function clearRegions() {
  const regions = ['user-data-form-region', 'calendar-region'];

  regions.forEach(region => {
    const DOMelement = document.getElementById(region);
    DOMelement.innerHTML = '';
  });
}
