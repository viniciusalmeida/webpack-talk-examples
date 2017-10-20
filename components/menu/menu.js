import $ from 'jquery';
import componentToPluginConversor from '../componentToPluginConverter';
import ComponentBase from '../componentBase';
import on from '../../decorators/on';
import 'jQuery.toggleModifier';

import './menu.css';
import componentTemplate from './template.html';

class MenuComponent extends ComponentBase {
  render() {
    this.container.append(componentTemplate());
  }

  @on('click', '[data-action]')
  menuToggle(event = false) {
    if (event) event.preventDefault();
    this.container
      .find('[data-menu-items]')
      .toggleModifier('opened');
  }

  @on('click', '[data-show-about]')
  openAboutModal(event) {
    event.preventDefault();
    this.menuToggle();
    $.modal({ message: '<b>About</b> section in the site!' });
  }
}

componentToPluginConversor('menu', MenuComponent);