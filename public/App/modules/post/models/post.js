define([

    'lib/view'

], function(Model) {

    'use_strict';

    return Model.extend({
        defaults: {
            date: new Date(),
            title: null,
            text: null
        }
    });

});