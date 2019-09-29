import showFormView from './form-view';
import { loadFromLocalStorage, addFormData } from './store';

loadFromLocalStorage();
showFormView(addFormData);

const showFormButton = document.querySelector('#show-user-data-form');
const showBirthdayCalendarButton = document.querySelector('#show-birthday-calendar');
