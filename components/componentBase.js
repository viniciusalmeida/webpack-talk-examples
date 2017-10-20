import $ from 'jquery';
import _ from 'underscore';

export default class ComponentBase {
  constructor(options) {
    this.container = $(options.element);
    this.render();
    this.attachEvents();
  }

  render() {
    $.error('The render method should be implemented in the extended class.');
  }

  attachEvents() {
    if (this.events.length > 1) { return }

    _.each(this.events, (event) => {
      this.container.on(event.event, event.selector, event.callback.bind(this));
    });
  }
}
