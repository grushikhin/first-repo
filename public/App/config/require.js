(function(root) {
    'use strict';

    root.require = {

        baseUrl: "/app/",

        paths: {
            "jquery": "vendor/jquery/jquery",
            "backbone": "vendor/backbone/backbone",
            "underscore": "vendor/lodash/dist/lodash.underscore",
            "localStorage": "vendor/Backbone.localStorage/backbone.localStorage",

            "handlebars": "vendor/handlebars/handlebars",
            "hbs": "vendor/hbs/hbs",
            "i18nprecompile": "vendor/hbs/hbs/i18nprecompile",
            "json2": "vendor/hbs/hbs/json2"

        },
        shim: {
            'underscore': {
                exports: '_'
            },
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            handlebars: {
                exports: "Handlebars"
            }
        },
        hbs: {
            disableI18n: true,
            disableHelpers: true
        }
    };


}(window));