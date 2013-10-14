define([

    'marionette',
    'hbs!modules/common/templates/not-found',
    'styl!modules/common/styles/main'

], function(Marionette, notFoundTemplate) {
    'use strict';

    var NotFoundView = Marionette.CompositeView.extend({
        template: notFoundTemplate
    });

    return NotFoundView;
});