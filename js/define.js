(function () {
    "use strict";

    define("selectize-css", ['webui-cssloader'], function (loader) {
        loader.inject('vendor/webui-selectize-js/selectize');
        return null;
    });
}());
