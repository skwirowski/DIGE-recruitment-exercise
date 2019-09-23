export default function showUserDataFrom() {
  const addUserDataFormRegion = document.querySelector(
    '#user-data-form-region'
  );
  const userDataFormTemplate = `
    <div class="div-class-name">
      <p class="paragraph-class-name">This is template HTML to check if all is good</p>
    </div>
  `;
  const htmlElement = document.createElement('div');
  htmlElement.innerHTML = userDataFormTemplate;
  addUserDataFormRegion.appendChild(htmlElement);
}
