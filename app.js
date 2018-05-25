var express = require('express');
var ssr = require('done-ssr-middleware');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use( express.static(__dirname + '/public') );

//can-ssr:
app.use( "/", ssr({
  config: __dirname + "/public/package.json!npm",
  main: "myapp/index.stache!done-autorender",
  liveReload: false
}));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});