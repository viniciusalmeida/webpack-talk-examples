import $ from 'jquery';
import componentToPluginConverter from '../componentToPluginConverter';
import ComponentBase from '../componentBase';
import on from '../../decorators/on';

import './modal.css';
import componentTemplate from './template.html';

class ModalComponent extends ComponentBase {
  render() {
    this.container = $('body');
    this.container.append(componentTemplate({ message: this.options.message }));
  }

  @on('click', '[data-close-modal]')
  closeModal(event) {
    event.preventDefault();
    this.detachEvents();
    this.container.find('[data-modal]').remove();
  }
}

componentToPluginConverter('modal', ModalComponent, true);
