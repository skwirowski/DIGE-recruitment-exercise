// eslint-disable-next-line import/no-cycle
import showCalendarView from './calendar-view';
import { getCurrentDate, clearRegions } from './utils/helper-functions';
import { prepareFormImageFileData, prepareFormDataExceptImageFile, setInitialFormInputsValues } from './store';

export default function showFormView(callback, id, currentFormData) {
  let userFormData = {};

  const formRegion = document.querySelector('#form-region');

  const formTemplate = /* html */ `
    <div class="form__header">
      <span class="header__icon"></span>
      <h1 class="header__title">ASTRONOMY PICTURE OF THE DAY</h1>
    </div>
    <form id="data-form" class="form__data-form-container">
      <div class="data-form__name">
        <label for="name-input" class="form-label">
          Your name
          <span class="form-label__required">*</span>
        </label>
        <input
          type="text"
          id="name-input"
          class="form-input"
          name="name"
          placeholder="Your name"
          required
          pattern="[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]{1,}"
          title="Name can consist of one word and only letters"
          aria-describedby="name-help"
          value=""
        />
        <small id="name-help" class="form-help">Name can consist of one word and only letters e.g. Paweł</small>
      </div>

      <div class="data-form__picture">
        <label for="picture-input" class="form-label">Upload your picture</label>
        <div class="picture-input-wrapper">
          <span class="picture-input__icon"></span>
          <input
            type="file"
            id="picture-input"
            class="form-input-file"
            name="picture"
            accept="image/*"
            aria-describedby="picture-help"
          />
        </div>
        <small id="picture-help" class="form-help">Picture size 120x120 pixels is the best fit</small>
      </div>

      <div class="data-form__birthdate">
        <label for="birthdate-input" class="form-label">
          Your date of birth
          <span class="form-label__required">*</span>
        </label>
        <input
          type="date"
          id="birthdate-input"
          class="form-input"
          name="birthdate"
          max=${getCurrentDate()}
          required
          value=""
        />
      </div>

      <div class="data-form__email">
        <label for="email-input" class="form-label">
          Your e-mail address
          <span class="form-label__required">*</span>
        </label>
        <input
          type="email"
          id="email-input"
          class="form-input"
          name="email"
          placeholder="Your email address"
          required
          aria-describedby="email-help"
          value=""
        />
        <small id="email-help" class="form-help">Example of a valid e-mail address: pskwirowski@gmail.com</small>
      </div>

      <div class="data-form__phone">
        <label for="phone-input" class="form-label">
          Your phone number
          <span class="form-label__required">*</span>
        </label>
        <input
          type="text"
          id="phone-input"
          class="form-input"
          name="phone"
          placeholder="Your phone number"
          required
          pattern="[0-9]{9}"
          title="Valid phone number consists of 9 digits"
          aria-describedby="phone-help"
          value=""
        />
        <small id="phone-help" class="form-help">Valid phone number consists of 9 digits e.g. 601647108</small>
      </div>
      <div class="data-form__controls">
        <button type="submit" class="button__submit-form">
          <span class="button__submit-form-icon"></span>
          Submit
        </button>
        <button id="show-calendar" class="button__show-calendar">
          <span class="button__show-calendar-icon"></span>
          Show calendar
        </button>
      </div>
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
