define([
    'app',
    'backbone',
    'modules/posts/routers/posts',
    'modules/common/routers/common'


], function (app, Backbone, PostRouter, CommonRouter) {
    'use strict';

    app.start();

    new PostRouter();
    new CommonRouter();

    Backbone.history.start({
        pushState: true,
        root: '/'
    });

    return app;

});