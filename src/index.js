import './styles.css';
import menuTpl from './templates/menu-item.hbs';
import menuItems from "./menu.json"

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};


refs.menuList.innerHTML = menuItems.map(menuTpl).join('');
if (JSON.parse(localStorage.getItem('checked-dark-theme'))) {
  refs.body.classList.remove(`${Theme.LIGHT}`);
  refs.body.classList.add(`${Theme.DARK}`);
  refs.checkbox.setAttribute('checked', true);
}

refs.body.classList.add(`${Theme.LIGHT}`);

refs.checkbox.addEventListener('change', checkboxChange);

refs.body.classList.add(`${Theme.LIGHT}`);

refs.checkbox.addEventListener('change', checkboxChange);

function checkboxChange() {
  refs.body.classList.toggle(`${Theme.LIGHT}`);
  refs.body.classList.toggle(`${Theme.DARK}`);

  if (refs.checkbox.getAttribute('checked') === 'true') {
    refs.checkbox.removeAttribute('checked');
    refs.checkbox.setAttribute('checked', false);

    localStorage.removeItem('checked-dark-theme');
    localStorage.setItem('checked-dark-theme', false);
  } else {
    refs.checkbox.removeAttribute('checked');
    refs.checkbox.setAttribute('checked', true);

    localStorage.removeItem('checked-dark-theme');
    localStorage.setItem('checked-dark-theme', true);
  }
}
