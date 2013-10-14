define([

    'marionette',
    'hbs!modules/posts/templates/collection/post',
    'modules/posts/views/item/post'


], function(Marionette, postCollectionTemplate, postItemView) {

    'use_strict';

    return Marionette.CollectionView.extend({
        tagName: 'ul',
        itemView: postItemView,
        template: postCollectionTemplate
    });

});