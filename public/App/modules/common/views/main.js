define([

    'marionette',
    'hbs!modules/common/templates/main',
    'styl!modules/common/styles/main'

], function(Marionette, mainTemplate) {
    'use strict';

    var AppLayout = Marionette.CompositeView.extend({
        template: mainTemplate,

        regions: {
            lastPosts: "#last-posts"
        }
    });



//    var layout = new AppLayout();
    return AppLayout;
});