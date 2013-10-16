define([
    'app',
    'marionette',
    'modules/common/views/main',
    'modules/common/views/not-found'
],
    function (app, Marionette, MainView, notFoundView) {

        var Controller = Marionette.Controller.extend({

            main: function() {
                app.contentRegion.show(new MainView());
            },
            notFound: function() {
                app.contentRegion.show(new notFoundView());

            }
        });

        return new Controller();
    });
