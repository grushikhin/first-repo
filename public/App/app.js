define([

    'backbone',
    'lib/router',
    'modules/common/views/layout'


], function (Backbone, router, LayoutView) {
    'use strict';
    var layout = new LayoutView();

    Backbone.history.start({
        pushState: true,
        root: '/'
    });

    document.getElementById('main').innerHTML(layout.render());

});