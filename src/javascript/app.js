import showFormView from './form-view';
import { loadFromLocalStorage, addFormData } from './store';

loadFromLocalStorage();
showFormView(addFormData);
