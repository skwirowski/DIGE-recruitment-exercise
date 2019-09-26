export default function showUserBirthdayCard(birthdayData) {
  const addBirthdayCard = document.querySelector('#birthday-cards-region');

  const createBirthdayCardTemplate = () =>
    birthdayData
      .map(card => {
        const { picture, name, birthdate, email, phone } = card;

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
          </div>
        `;
      })
      .join('');

  addBirthdayCard.innerHTML = createBirthdayCardTemplate();
}
