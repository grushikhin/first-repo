define([

    'marionette',
    'hbs!modules/posts/templates/item/post'


], function(Marionette, postItemTemplate) {

    'use_strict';

    return Marionette.ItemView.extend({
        template: postItemTemplate
    });

});