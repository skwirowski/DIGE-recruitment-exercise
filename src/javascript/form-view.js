// eslint-disable-next-line import/no-cycle
import showCalendarView from './calendar-view';
import { getCurrentDate, clearRegions } from './utils/helper-functions';
import { prepareFormImageFileData, prepareFormDataExceptImageFile, setInitialFormInputsValues } from './store';

export default function showFormView(callback, id, currentFormData) {
  let userFormData = {};

  const formRegion = document.querySelector('#form-region');

  const formTemplate = /* html */ `
    <form id="data-form" class="user-data-form">
      <div class="user-data-form__name">
        <label for="name-input">Your name</label>
        <input
          type="text"
          id="name-input"
          name="name"
          placeholder="Your name"
          required
          pattern="[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]{1,}"
          title="Name can consist of one word and only letters"
          aria-describedby="name-help"
          value=""
        />
        <small id="name-help">Name can consist of one word and only letters e.g. Paweł</small>
      </div>

      <div class="user-data-form__picture">
        <label for="picture-input">Upload your picture</label>
        <input
          type="file"
          id="picture-input"
          name="picture"
          accept="image/*"
          aria-describedby="picture-help"

        />
        <small id="picture-help">Picture size 300x300 pixels is the best fit</small>
      </div>

      <div class="user-data-form__birthdate">
        <label for="birthdate-input">Your date of birth</label>
        <input
          type="date"
          id="birthdate-input"
          name="birthdate"
          max=${getCurrentDate()}
          required
          value=""
        />
      </div>

      <div class="user-data-form__email">
        <label for="email-input">Your e-mail address</label>
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder="Your email address"
          required
          aria-describedby="email-help"
          value=""
        />
        <small id="email-help">Example of a valid e-mail address: pskwirowski@gmail.com</small>
      </div>

      <div class="user-data-form__phone">
        <label for="phone-input">Your phone number</label>
        <input
          type="text"
          id="phone-input"
          name="phone"
          placeholder="Your phone number"
          required
          pattern="[0-9]{9}"
          title="Valid phone number consists of 9 digits"
          aria-describedby="phone-help"
          value=""
        />
        <small id="phone-help">Valid phone number consists of 9 digits e.g. 601647108</small>
      </div>

      <button type="submit">Submit</button>
      <button id="show-calendar">Show calendar</button>
    </form>
  `;

  formRegion.innerHTML = formTemplate;

  const dataForm = document.querySelector('#data-form');

  if (currentFormData) {
    setInitialFormInputsValues(dataForm, currentFormData);
  }

  function attachEventListeners() {
    const pictureInput = dataForm.elements[1];
    const showCalendarButton = document.querySelector('#show-calendar');

    pictureInput.addEventListener('change', () => {
      function addFormImageFileToResultDataObject() {
        userFormData = prepareFormImageFileData(pictureInput.files[0]);
        console.log('picture base64 hash', userFormData);
      }
      addFormImageFileToResultDataObject();
    });

    dataForm.addEventListener('submit', event => {
      event.preventDefault();

      function addFormValuesToResultDataObject() {
        const formDataExceptImageFile = prepareFormDataExceptImageFile(dataForm);
        userFormData = { ...userFormData, ...formDataExceptImageFile };
      }
      addFormValuesToResultDataObject();

      const { birthdateMonth, birthdateDay } = userFormData;

      console.log('updated user form data', userFormData);
      callback(userFormData, id);
      clearRegions();
      showCalendarView(birthdateDay, birthdateMonth);
    });

    showCalendarButton.addEventListener('click', event => {
      event.preventDefault();
      clearRegions();
      showCalendarView();
    });
  }
  attachEventListeners();
}
