var express = require('express');
var path = require('path');
var app = express();
var compress = require('compression');

app.set('port', (process.env.PORT || 5000));
app.use(compress());
app.use(express.static(__dirname));

app.get('*', function(request, response){
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
