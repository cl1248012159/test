'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-autoprefixer");

    var path = require('path');
    var webpack = require('webpack');

    grunt.initConfig({
        project: {
            root: path.join(__dirname) + '/skin/frontend/default/default'
        },
        watch: {
            scss: {
                files: ['<%= project.root %>/dress/css/*.scss'],
                tasks: ['compass:server', 'autoprefixer']
            },
            js: {
                files: ['<%= project.root %>/dress/js/*.js', '<%= project.root %>/dress/js/**/*.jsx', '!<%= project.root %>/dress/js/build/*.js'],
                tasks: ['webpack:dev']
            }
        },
        clean: {
            server: {
                files: [{
                    dot: true,
                    src: [
                        '<%= project.root %>/dress/js/build/*.js',
                        '<%= project.root %>/dress/css/*.{css,map}'
                    ]
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= project.root %>/dress/css',
                cssDir: '<%= project.root %>/dress/css',
                generatedImagesDir: '<%= project.root %>/dress/images/generated',
                imagesDir: '<%= project.root %>/dress/images',
                javascriptsDir: '<%= project.root %>/dress/js',
                fontsDir: '<%= project.root %>/fonts',
                httpImagesPath: '/dress/images',
                httpGeneratedImagesPath: '/dress/images/generated',
                httpFontsPath: '/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                sourcemap: true,
                noLineComments:true,
                outputStyle:'compact',
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= project.root %>/dress/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: false
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 version']
            },
            server: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= project.root %>/dress/css',
                    src: ['*.css'],
                    dest: '<%= project.root %>/dress/css'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= project.root %>/dress/css',
                    src: ['*.css'],
                    dest: '<%= project.root %>/dress/css'
                }]
            }
        },
        webpack: {
            dev: {
                context: '<%= project.root %>/dress/js',
                entry: {
                    dress: './dress'
                },
                output: {
                    path: path.join(__dirname)+'/js/dress',
                    filename: '[name].bundle.js'
                },
                externals: {
                    "jquery": "jQuery",
                    "react": "React"
                },
                plugins: [
                    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
                ],
                module: {
                    loaders: [
                        {test: /\.jsx$/, loader: 'jsx-loader?harmony'}
                    ]
                },
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                stats: {
                    colors: true,
                    modules: false,
                    reasons: false
                },
                progress: false,
                keepalive: false
            }
        }
    });

    grunt.registerTask('default', [
        'clean:server',
        'compass',
        'autoprefixer:server',
        'webpack:dev',
        'watch'
    ]);

};
