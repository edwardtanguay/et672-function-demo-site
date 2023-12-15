import './style.css';
import * as tools from './tools';

const title = tools.getTitle();

document.querySelector('#app').innerHTML = `
  <div>
    <h1>${title}</h1>
    <h2>${tools.getSubtitle()}</h2>
    
  </div>
`;


