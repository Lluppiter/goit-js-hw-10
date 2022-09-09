import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { createMarcup } from './js/createCounryList';
import * as debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const input = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;

input.addEventListener(
  'input',
  debounce(event => {
    try {
      fetchCountries(event.target.value.trim())
        .then(e => {
          createMarcup(e);
        })
        .catch(error => error);
    } catch (e) {}
  }, DEBOUNCE_DELAY)
);
