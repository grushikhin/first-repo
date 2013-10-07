define([

    'lib/view'

], function(Model) {

    'use_strict';

    return Model.extend({
        defaults: {
            date: null,
            title: null,
            text: null
        }
    });

});