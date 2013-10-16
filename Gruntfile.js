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
//        ,
//        stylus: {
//            // ���������� Stylus � CSS
//            compile: {
////                options: {
////                    'compress': true,
////                    'paths': ['public/js/modules/common/styles/']
////                },
//                files: {
//                    'public/js/modules/common/styles/menu.css': 'menu.styl'
//                }
//            }
//        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

//    // �������� ������ ��� ���������� �������
//    grunt.loadNpmTasks('grunt-stylus');
//
//    // ���������� ������
//    grunt.registerTask('default', 'stylus');
};
