import autocomplete from './autocomplete.js';
import {fetchData} from './data.js';

const searchInput = document.querySelector("#search");

const state = {}
const setState = async () => {
    state.data = await fetchData();
}
setState()

searchInput.addEventListener("input", () => autocomplete(searchInput.value, state.data));