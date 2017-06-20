var express = require('express');
var Rollbar = require('rollbar');
var throwError = require('./errors.js')
var app = express();

var rollbar = new Rollbar({
  accessToken: '63db8f8b9b4d40f49d7d6abf700ec498',
  handleUncaughtExceptions: true,
  handleUnhandledRejections: true,
  environment: 'nodejs-env',
});

var _rollbarConfig = {
  payload: {
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: "some version",
        guess_uncaught_frames: true
      }
    }
  }
};

rollbar.configure(_rollbarConfig);


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/display.html');
  throwError(rollbar);
});

app.get('/throw_error', function(req, res) {
  throw new Error('throwing an error!');
});

app.use(rollbar.errorHandler());

app.listen(8080);

module.exports = rollbar;
