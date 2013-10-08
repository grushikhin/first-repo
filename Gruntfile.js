var fs = require('fs');

module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: 'grushikhin.local',
                    base: 'public',
                    keepalive: true,
                    middleware: function(connect, options) {
                        return [
                            connect.static(options.base),
                            function(req, res, next) {
                                fs.readFile(options.base + '/index.html', 'utf8', function(e, html) {
                                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                                    res.end(html);
                                });
                            }
                        ];
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
