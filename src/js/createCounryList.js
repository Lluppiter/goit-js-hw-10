import Notiflix from 'notiflix';
const countryList = document.querySelector('.country-list');
export function createMarcup(countriesArray) {
  if (countriesArray.length >= 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (countriesArray.length < 10 && countriesArray.length > 1) {
    const markupList = countriesArray
      .map(countri => {
        return `<li class="country-item">
        <div class='present-name'>
       <img
      class="country-flag"
      src="${countri.flags.svg}"
      alt="flag of ${countri.name.official}"
      width="32"
      height="18"
    />
      <h2 class="country-name">${countri.name.official}</h2>
      </div>
      </li>`;
      })
      .join('');
    countryList.innerHTML = markupList;
  } else if (countriesArray.length === 1) {
    const markupItem = `<li class="country-item">
    <div class='present-name'>
       <img
      class="country-flag"
      src="${countriesArray[0].flags.svg}"
      alt="flag of ${countriesArray[0].name.official}"
      width="32"
      height="18"
        />
      <h2 class="country-name">${countriesArray[0].name.official}</h2>
      </div>
      <p class="country-deskr--capital"><b>Capital</b>: ${
        countriesArray[0].capital
      }</p>
      <p class="country-deskr--population"><b>Population</b>: ${
        countriesArray[0].population
      }</p>
      <p class="country-deskr--languages"><b>Languages</b>: ${Object.values(
        countriesArray[0].languages
      )} </p>
      </li>`;
    countryList.innerHTML = markupItem;
  }
}
