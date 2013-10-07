define([
    'backbone'
], function (Backbone) {
    debugger;

    var Router = Backbone.Router.extend({

        routes: {
            "":                     "index",
            "posts":                "posts",
            "post/:id":             "post"

        },

        index: function() {
            debugger;

        },

        posts: function() {
            debugger;

        },

        post: function(id) {
            debugger;
        }

    });

    return new Router();
});

