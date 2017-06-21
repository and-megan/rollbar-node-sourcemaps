var rollbar = require('./server.js');
var functions = require('./functions.js');
var errors = require('./errors.js');

functions.iglify('pug');
functions.multiplyByThree(5);
errors.badMethod();
