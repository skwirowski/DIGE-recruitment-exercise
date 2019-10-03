import { getFormatedDateString } from './utils/helper-functions';
import apodApiUrl from './static/api';
import apodApiKey from './static/auth';

export default function showModalView(day, month, year) {
  const modalRegion = document.querySelector('#modal-region');
  const getDateQuery = getFormatedDateString(day, month, year);

  const modalContainerTemplate = /* html */ `
  <div class="modal__background">
    <div class="modal__container">
      <div class="modal__container-top-strip">
        <button id="close-modal" class="close-modal-button">&times;</button>
      </div>
      <div id="modal-content-region" class="modal-content-region"></div>
    </div>
  </div>
  `;
  const loaderTemplate = /* html */ `
    <div class="modal-loader">
      <div class="modal-loader__inner">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `;

  modalRegion.innerHTML = modalContainerTemplate;

  const modalContentRegion = document.querySelector('#modal-content-region');

  modalContentRegion.innerHTML = loaderTemplate;

  function fetchApodData() {
    fetch(`${apodApiUrl}?api_key=${apodApiKey}&date=${getDateQuery}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then(data => {
        const { title, explanation, url, date } = data;

        const modalTemplate = /* html */ `
          <div class="modal-content">
            <h2 class="modal-content__title">${title}</h2>
            <img src=${url} alt=${title} class="modal-content__picture" />
            <small class="modal-content__picture-date">
              Date ${date}
            </small>
            <p class="modal-content__description">${explanation}</p>
          </div>
        `;

        modalContentRegion.innerHTML = modalTemplate;
      })
      .catch(() => {
        const errorTemplate = /* html */ `
          <div class="modal-content-error">
            <h1 class="modal-content-error__title">Oops!</h1>
            <h2 class="modal-content-error__description">Something went wrong...</h2>
            <span class="modal-content-error__image"></span>
          </div>
        `;

        modalContentRegion.innerHTML = errorTemplate;
      });
  }

  fetchApodData();

  function attachEventListeners() {
    const closeModalButton = document.querySelector('#close-modal');
    closeModalButton.addEventListener('click', () => {
      modalRegion.innerHTML = '';
    });
  }
  attachEventListeners();
}
