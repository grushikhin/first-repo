define([

    'lib/view',
    'hbs!modules/common/templates/layout'

], function(View, layoutTemplate) {
    debugger;

    return View.extend({

        template: layoutTemplate,

        serialize: function() {
            return {
                title: "hello world"
            };
        }
    });
});