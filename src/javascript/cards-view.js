/* eslint-disable import/no-cycle */
import showFormView from './form-view';
import showCalendarView from './calendar-view';
import { removeFormData, editFormData } from './store';
import { clearRegions } from './utils/helper-functions';

export default function showCardsView(arrayOfDataObjects, month, day) {
  const cardsRegion = document.querySelector('#cards-region');

  const createCardTemplate = () =>
    arrayOfDataObjects
      .map(card => {
        const { picture, id, name, birthdate, email, phone } = card;

        return /* html */ `
          <div class="birthday-card">
            <div
              class="birthday-card__photo"
              style="background-image: url(${picture});"
            >
            </div>
            <div class="birthday-card__user-info">
              <h2>${name}</h2>
              <h3>${birthdate}</h3>
              <p>${email}</p>
              <p>${phone}</p>
            </div>
            <div>
              <button
                class="card__remove-button"
                type='button'
                value=${id}
              >
                Remove
              </button>
              <button
                class="card__edit-button"
                type='button'
                value=${id}
              >
                Edit
              </button>
            </div>
          </div>
        `;
      })
      .join('');

  cardsRegion.innerHTML = createCardTemplate();

  function attachEventListeners() {
    const removeCardButton = document.querySelectorAll('.card__remove-button');
    const editCardButton = document.querySelectorAll('.card__edit-button');

    removeCardButton.forEach(item => {
      item.addEventListener('click', () => {
        removeFormData(item.value);
        showCalendarView(day, month);
      });
    });

    editCardButton.forEach(item => {
      item.addEventListener('click', () => {
        clearRegions();
        showFormView(editFormData, item.value);
      });
    });
  }
  attachEventListeners();
}
