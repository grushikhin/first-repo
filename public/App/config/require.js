(function(root) {
    'use strict';

    root.require = {
        baseUrl: "/app/",
        paths: {
            "jquery": "vendor/jquery/jquery",
            "backbone": "vendor/backbone/backbone",
            "underscore": "vendor/lodash/dist/lodash"
        },
        shim: {
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            }
        }
    };


}(window));