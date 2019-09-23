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

/** @param year Integer value representing the year, eg. 2010 */
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

export function clearRegions() {
  const regions = ['user-data-form-region', 'calendar-region'];

  regions.forEach(region => {
    const DOMelement = document.getElementById(region);
    DOMelement.innerHTML = '';
  });
}
