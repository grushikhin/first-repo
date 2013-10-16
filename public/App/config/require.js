(function(root) {
    'use strict';

    root.require = {

        baseUrl: "/app/",

        paths: {
            "jquery": "vendor/jquery/jquery",
            "underscore": "vendor/lodash/dist/lodash.underscore",

            "backbone": "vendor/backbone/backbone",
            "localStorage": "vendor/backbone.localStorage/backbone.localStorage",
            "marionette" : "vendor/backbone.marionette/lib/backbone.marionette",

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
            },
            marionette: {
                deps: ['backbone', 'underscore'],
                exports: "Marionette"
            }
        },
        hbs: {
            disableI18n: true,
            disableHelpers: true
        },
        map: {
            "*": {
                "styl": "vendor/require-stylus/require-stylus", // RequireJS loader plugin
                "stylus": "vendor/require-stylus/stylus" // client-side stylus compiler instance (can/should be substituted with actual required stylus version)
            }
        }
    };


}(window));