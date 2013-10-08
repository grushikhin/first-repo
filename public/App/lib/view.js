define([
    'backbone'
], function (Backbone) {
    "use strict";


    return Backbone.View.extend({
        render: function() {
            if (!this.template) {
                return false;
            }
            var markup = this.template(this.serialize());
            return markup;
        },
        serialize: function() {
            return {};
        }
    });
});