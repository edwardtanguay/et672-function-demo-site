import names from '../data/names.json';
import * as tools from '../tools';

export const CheckNames = () => {
	return /*html*/ `
  <hr>
  <h3>Names</h3>
  <ul>
    ${names.map(name => {
      return `<li style="color: ${tools.startsWithCapitalLetter(name) ? 'green' : 'red'}">${name}</li>`;
    }).join('')}
  </ul>
	`;
}