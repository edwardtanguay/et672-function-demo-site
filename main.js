import './style.css';
import * as tools from './tools';

const title = tools.getTitle();

document.querySelector('#app').innerHTML = `
  <div>
    <h1>${title}</h1>
    <h2>${tools.getSubtitle()}</h2>
    <p>${tools.showFlashcard('sky', 'der Himmel')}</p>
    <p>${tools.showFlashcard('car', 'das Auto')}</p>
    <p>${tools.showFlashcard('house', 'das Haus')}</p>
    
  </div>
`;


