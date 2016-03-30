/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-aqua-window',

  included: function(app) {
    app.import('vendor/assets/red.png');
    app.import('vendor/assets/yellow.png');
    app.import('vendor/assets/green.png');
    app.import('vendor/assets/title-bg.png');
  },
};
