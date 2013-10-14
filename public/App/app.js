define([
    'marionette',
    'modules/common/views/navigation',
    'styl!modules/common/styles/common'


], function (marionette, NavigationView, _commonStyles_) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        headerRegion: 'header',
        contentRegion: 'section',
        footerRegion: 'footer'
    });

    app.addInitializer(function () {
        app.headerRegion.show(new NavigationView());
    });

    app.start();

    return app;

});