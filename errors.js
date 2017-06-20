var rollbar = require('./server.js');
console.log(rollbar);
var throwError = function(rollbar) {
  try {
    fakeMethod();
  } catch(err) {
    rollbar.error(err);
  }
};

module.exports = throwError;
