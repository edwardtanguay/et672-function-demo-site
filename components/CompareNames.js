import names from '../data/names.json';
import * as tools from '../tools';

export const CompareNames = () => {

	const baseName = "Axel";

	return /*html*/ `
  <hr>
  <h3>Base name: ${baseName}</h3>
  <p>Names with the same amount of letters are:</p>
  <ul>
	${names.map(name => {
		return tools.textsHaveEqualLenth(baseName, name) ? `<li>${tools.capitalizeFirstLetter(name)}</li>` : '';
	}).join('')}
  </ul>
	`;
};