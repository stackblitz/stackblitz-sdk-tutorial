import './style.css';
import page from './page.html?raw'

const fragment = document.createRange().createContextualFragment(page);

// document.body.insertAdjacentHTML('afterbegin', page);
document.body.prepend(fragment)