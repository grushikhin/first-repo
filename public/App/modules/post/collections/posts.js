define([

    'lib/collection',
    'localStorage'

], function(Collection, LocalStorage) {

    'use_strict';

    return Collection.extend({
        localStorage: new LocalStorage('posts')
    });

});