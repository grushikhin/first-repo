define([
    'marionette',
    'modules/posts/controllers/posts'
],
    function(Marionette, controller) {
        return Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                "post": "list",
                "post/new": "new",
                "post/:id": "show",
                "post/:id/edit": "edit"
            }
        });
    });
