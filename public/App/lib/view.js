define([
    'backbone'
], function (Backbone) {
    "use strict";


    return Backbone.View.extend({
        render: function() {
            if (!this.template) {
                return false;
            }
            var markup = '';
            return this;
        },
        serialize: function() {
            return {};
        }
    });
});