module.exports = function(config) {
  config.set({
    frameworks: ['qunit'],
    plugins: ['karma-qunit'],
    files: [
      'tests/qunit/*.js'
    ]
  });
};