define([
    'marionette',
    'modules/common/controllers/common'
],
    function(Marionette, controller) {
        return Marionette.AppRouter.extend({
            controller: controller,
            appRoutes: {
                "": "main"
//                ,"*path": "notFound"
            }
        });
    });
