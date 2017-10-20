import $ from 'jquery';
import _ from 'underscore';

export default function() {
  // This code is used to find out the self-discoverable components in the page
  // in order to trigger the initialization for each one of them
  $('[data-component]').not('[started=true]').each(function (index, elem) {
    const dispatcher = $(elem);
    const componentOrPluginName = dispatcher.data('component');
    const options = _.omit(dispatcher.data(), 'component');

    // Properly apply the component or plugin based on dispatcher's information
    dispatcher[componentOrPluginName](options);
    dispatcher.attr('started', true);
  });
}
