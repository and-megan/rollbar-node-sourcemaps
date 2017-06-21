module.exports = {
  badMethod: function() {
    try {
      fakeMethod();
    } catch(err) {
      rollbar.error(err);
    }
  }
};
