import './style.css';
import * as tools from './tools';
import addExercises from './data/addExercises.json';
import names from './data/names.json';

const title = tools.getTitle();

const num1 = tools.getRndInteger(1, 10);
const num2 = tools.getRndInteger(1, 10);

const nums = [4, 15, 6];
const nums2 = tools.doubleAllNumbers(nums);

const baseName = "Axel";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>${title}</h1>
    <h2>${tools.getSubtitle('fun learning')}</h2>
    <p>${tools.showFlashcard('sky', 'der Himmel')}</p>
    <p>${tools.showFlashcard('car', 'das Auto')}</p>
    <p>${tools.showFlashcard('house', 'das Haus')}</p>
    <hr>
    <p>${addExercises[0].num1} + ${addExercises[0].num2} = ${tools.add(addExercises[0].num1, addExercises[0].num2)}</p>
    <p>${addExercises[1].num1} + ${addExercises[1].num2} = ${tools.add(addExercises[1].num1, addExercises[1].num2)}</p>
  <hr>
  <h3>Base name: ${baseName}</h3>
  <p>Names with the same amount of letters are:</p>
  <ul>
    ${names.map(name => {
      return tools.textsHaveEqualLenth(baseName, name) ? `<li>${name}</li>` : ''
    }).join('')}
  </ul>
  <hr>
  <p>Random number between 6 and 10: ${tools.getRndInteger(6,10)}</p>
  <hr>
  <p>${num1} + ${num2} = ${tools.add(num1, num2)}</p>
  <hr>
  <p>${nums.join(', ')} doubled is ${nums2.join(', ')}</p>
  <hr>
  <p>${tools.getRandomMessage()}</p>
  <hr>
  <h3>Names</h3>
  <ul>
    ${names.map(name => {
      return `<li style="color: ${tools.startsWithCapitalLetter(name) ? 'green' : 'red'}">${name}</li>`;
    }).join('')}
  </ul>

  </div>
`;


