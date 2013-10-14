define([
    'marionette',
    'hbs!modules/common/templates/navigation',
    'styl!modules/common/styles/navigation'
], function(Marionette, navigationTemplate) {
    'use strict';

    var MenuView = Marionette.ItemView.extend({
        template: navigationTemplate
    });

    return MenuView;
});