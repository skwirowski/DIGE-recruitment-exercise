import { getFormatedDateString } from './utils/helper-functions';
import apodApiUrl from './static/api';
import apodApiKey from './static/auth';

export default function showModalView(day, month, year) {
  const modalRegion = document.querySelector('#modal-region');
  const getDateQuery = getFormatedDateString(day, month, year);

  const modalContainerTemplate = /* html */ `
    <div class="modal-container">
      <div id="modal-content-region"></div>
      <button id="close-modal">X</button>
    </div>
  `;
  const loaderTemplate = /* html */ `
    <div>Loading ...</div>
  `;

  modalRegion.innerHTML = modalContainerTemplate;

  const modalContentRegion = document.querySelector('#modal-content-region');

  modalContentRegion.innerHTML = loaderTemplate;

  function fetchApodData() {
    fetch(`${apodApiUrl}?api_key=${apodApiKey}&date=${getDateQuery}`)
      .then(response => response.json())
      .then(data => {
        const { title, explanation, url } = data;

        const modalTemplate = /* html */ `
          <div class="modal-container">
            <h2>${title}</h2>
            <img src=${url} alt=${title} />
            <p>${explanation}</p>
          </div>
        `;

        modalContentRegion.innerHTML = modalTemplate;
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
