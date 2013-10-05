define([
    'backbone',
    'lib/router'
], function (Backbone, router) {

    Backbone.history.start({
        pushState: true,
        root: '/'
    });

    Backbone.history.navigate('posts');
    window.router = router;
    return '';

});