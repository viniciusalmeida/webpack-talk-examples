import $ from 'jquery';

export default function componentToPluginConversor(pluginName, pluginClass) {
  $.fn[pluginName] = function (options = {}) {
    return this.each((_i, element) => {
      const dispatcher = $(element);
      const params = $.extend(options, { element: dispatcher });

      dispatcher.data('pluginData', new pluginClass(params));
    });
  };
}
