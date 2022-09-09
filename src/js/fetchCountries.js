import Notiflix from 'notiflix';
const countryList = document.querySelector('.country-list');
export function fetchCountries(input) {
  const baseUrl = 'https://restcountries.com/v3.1/';
  const servise = 'name/';
  const desiredContent = `${input}`;
  const options = '?fields=name,flags,capital,population,languages';
  // const options = {
  //   headers: {
  //     'fields': 'name,flags,capital,population,languages',
  //   },
  // };
  if (input.length === 0) {
    countryList.innerHTML = '';
  } else {
    return fetch(`${baseUrl}${servise}${desiredContent}${options}`).then(
      response => {
        if (!response.ok) {
          Notiflix.Notify.failure('Oops, there is no country with that name');
          throw new Error(response.status);
        }
        return response.json();
      }
    );
  }
}
