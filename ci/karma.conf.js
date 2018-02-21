// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    singleRun: true,
    reporters: ['dots', 'junit'],
    junitReporter: {
      outputFile: 'test-results.xml'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
  });
};
