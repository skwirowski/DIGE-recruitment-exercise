import showUserDataForm from './CreateUserDataForm';

showUserDataForm();

function getUserDataFormInputValues(event) {
  event.preventDefault();

  const userForm = document.querySelector('#user-form');
  const formElementsCollection = userForm.elements;
  const htmlCollectionLength = formElementsCollection.length;

  for (let i = 0; i < htmlCollectionLength - 1; i += 1) {
    console.log(formElementsCollection[i].value);
  }
}

const submitButton = document.querySelector('#user-data-submit-button');
submitButton.addEventListener('click', getUserDataFormInputValues);
