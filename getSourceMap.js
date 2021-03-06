var UglifyJS = require('uglify-js');

var result = UglifyJS.minify({'server.js' : 'var express=require("express"),Rollbar=require("rollbar"),app=express(),rollbar=new Rollbar({accessToken:"63db8f8b9b4d40f49d7d6abf700ec498",handleUncaughtExceptions:!0,handleUnhandledRejections:!0,environment:"nodejs-env",payload:{client:{javascript:{source_map_enabled:!0,code_version:"some version",guess_uncaught_frames:!0}}}});app.get("/",function(e,r){r.sendFile(__dirname+"/display.html")}),app.get("/throw_error",function(e,r){throw new Error("testing source maps error!")}),app.get("/main.min.js",function(e,r){r.sendFile(__dirname+"/main.min.js")}),app.use(rollbar.errorHandler()),app.listen(process.env.PORT||8080);'}, {
  sourceMap: {
    root: 'https://foo',
    filename: 'server.min.js',
    url: 'server.min.js.map'
  }
});

console.log(result.code);
console.log(result.map);
