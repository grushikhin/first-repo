define([

    'lib/collection',
    'localStorage',
    'modules/posts/models/post'

], function(Collection, LocalStorage, Post) {

    'use_strict';

    return Collection.extend({
        localStorage: new LocalStorage('posts'),
        model: Post
    });

});