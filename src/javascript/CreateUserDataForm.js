import { getCurrentDate } from './helperFunctions';

export default function showUserDataForm() {
  const addUserDataFormRegion = document.querySelector(
    '#user-data-form-region'
  );

  const userDataFormTemplate = /* html */ `
    <form id="user-form" class="user-data-form">
      <div class="user-data-form__name">
        <label for="user-name-input">Your name</label>
        <input
          type="text"
          id="user-name-input"
          placeholder="Your name"
          required
          pattern="[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]{1,}"
          title="Name can contain only letters"
          aria-describedby="user-name-help"
        />
        <small id="user-name-help">Name can contain only letters</small>
      </div>

      <div class="user-data-form__picture">
        <label for="user-picture-input">Upload your picture</label>
        <input
          type="file"
          id="user-picture-input"
          required
        />
      </div>

      <div class="user-data-form__birthdate">
        <label for="user-birthdate-input">Your date of birth</label>
        <input
          type="date"
          id="user-birthdate-input"
          name="user-birthday-date"
          max=${getCurrentDate()}
          required
        />
      </div>

      <div class="user-data-form__email">
        <label for="user-email-input">Your e-mail address</label>
        <input
          type="email"
          id="user-email-input"
          required
          aria-describedby="user-email-help"
        />
        <small id="user-email-help">Example of valid e-mail address: pskwirowski@gmail.com</small>
      </div>

      <div class="user-data-form__phone">
        <label for="user-phone-input">Your phone number</label>
        <input
          type="text"
          id="user-phone-input"
          required
          pattern="[0-9]{9}"
          title="Valid phone number consists of 9 digits"
          aria-describedby="user-phone-help"
        />
        <small id="user-phone-help">Valid phone number consists of 9 digits. Example: 601647108</small>
      </div>

      <button type="submit" id="user-data-submit-button">Submit</button>
    </form>
  `;
  addUserDataFormRegion.innerHTML = userDataFormTemplate;
}
