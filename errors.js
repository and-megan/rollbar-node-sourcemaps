var Rollbar = require('rollbar');
var rollbar = new Rollbar({
  accessToken: '63db8f8b9b4d40f49d7d6abf700ec498',
  handleUncaughtExceptions: true,
  handleUnhandledRejections: true,
  environment: 'nodejs-env',
  payload: {
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: "some version",
        guess_uncaught_frames: true
      }
    }
  }
});

module.exports = {
  badMethod: function(rollbar) {
    try {
      fakeMethod();
    } catch(err) {
      rollbar.error(err);
    }
  }
};
