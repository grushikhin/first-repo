define([
    'app',
    'marionette',
    'modules/posts/collections/posts',
    'modules/posts/models/post',
    'modules/posts/views/collection/post'

],
    function(app, Marionette, Posts, Post, PostCollectionView) {

        var Controller = Marionette.Controller.extend({

            list: function() {
                var posts = new Posts();

                posts.fetch().done(function() {

                    app.contentRegion.show(new PostCollectionView({collection: posts}));
                });
            },
            show: function() {
                debugger;

            },
            new: function() {
                var post = new Post({
                    title: 'foo'
                });

                post.save();

                debugger;

            },
            edit: function() {
                debugger;

            }

        });

        return new Controller();
    });
