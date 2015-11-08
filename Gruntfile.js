module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            name: 'small',
            width: 100
          },{
            name: 'medium',
            width: 360
          }]
        },
        files: [{
          expand: true,
          src: 'views/images/pizzeria.jpg',
          cwd: 'src/',
          dest: 'src/'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['img/*.{png,jpg}', 'views/images/*.{png,jpg}'],
          dest: 'dist/'
        }]
      }
    },
    validation: {
      options: {
        generateReport: false
      },
      files: ['src/*.html', 'src/views/pizza.html']
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'src/index.html',
          'dist/project-2048.html': 'src/project-2048.html',
          'dist/project-mobile.html': 'src/project-mobile.html',
          'dist/project-webperf.html': 'src/project-webperf.html',
          'dist/views/pizza.html': 'src/views/pizza.html',
        }
      }
    },
    csslint: {
      strict: {
        src: ['src/css/*.css', 'src/views/css/*.css']
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['css/*.css', 'views/css/*.css'],
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js', 'src/views/js/*.js']
    },
    uglify: {
      all: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['js/*.js', 'views/js/*.js'],
          dest: 'dist/',
          ext: '.min.js'
        }]
      }
    },
    watch: {
      html: {
        files: ['src/*.html', 'src/views/*.html'],
        tasks: ['validation'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['src/css/*.css', 'src/views/css/*.css'],
        tasks: ['csslint'],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['src/js/*.js', 'src/views/js/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('default', ['responsive_images', 'imagemin', 'validation', 'htmlmin', 'csslint', 'cssmin', 'jshint', 'uglify']);
};