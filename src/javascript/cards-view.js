/* eslint-disable import/no-cycle */
import showFormView from './form-view';
import showCalendarView from './calendar-view';
import { removeFormData, editFormData, getEditedFormCurrentData } from './store';
import { clearRegions } from './utils/helper-functions';

export default function showCardsView(arrayOfDataObjects, month, day) {
  const cardsRegion = document.querySelector('#cards-region');

  const createCardTemplate = () =>
    arrayOfDataObjects
      .map(card => {
        const { picture, id, name, birthdate, email, phone } = card;

        return /* html */ `
          <div class="birthday-card">
            <div class="birthday-card__wrapper">
              <div
                class="birthday-card__photo"
                style="background-image: url(${picture});"
              >
              </div>
              <div class="birthday-card__user-info">
                <h2 class="user-info__name">${name}</h2>
                <h3 class="user-info__birthdate">${birthdate}</h3>
                <p class="user-info__phone">${phone}</p>
                <p class="user-info__email">${email}</p>
              </div>
            </div>
            <div class="birthday-card__controls">
              <button
                class="birthday-card__button birthday-card__button--remove"
                type='button'
                value=${id}
              >
                <span class="button__icon"></span>
              </button>
              <button
                class="birthday-card__button birthday-card__button--edit"
                type='button'
                value=${id}
              >
                <span class="button__icon"></span>
              </button>
            </div>
          </div>
        `;
      })
      .join('');

  cardsRegion.innerHTML = createCardTemplate();

  function attachEventListeners() {
    const removeCardButton = document.querySelectorAll('.birthday-card__button--remove');
    const editCardButton = document.querySelectorAll('.birthday-card__button--edit');

    removeCardButton.forEach(item => {
      item.addEventListener('click', () => {
        removeFormData(item.value);
        showCalendarView(day, month);
      });
    });

    editCardButton.forEach(item => {
      item.addEventListener('click', () => {
        clearRegions();
        const currentFormData = getEditedFormCurrentData(item.value);
        showFormView(editFormData, item.value, currentFormData);
      });
    });
  }
  attachEventListeners();
}
