var express = require('express')
, app = express()
, server = require('http').createServer(app);

	app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
  	app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
	//app.use(express.bodyParser());
	//app.use(express.methodOverride());
	app.use(express.static(__dirname + '/public'));
	app.use('/components', express.static(__dirname + '/components'));
	app.use('/js', express.static(__dirname + '/js'));
	app.use('/icons', express.static(__dirname + '/icons'));
	app.set('views', __dirname + '/views');
	app.engine('html', require('ejs').renderFile);

//minneapolis
app.get('/new_upload', function(req,res){
	res.render("upload2_new.html");
});

app.get('/map', function(req,res){
	res.render("spiritual_map.html");
});

server.listen(app.get('port'), app.get('ipaddr'), function(){
	console.log('Express server listening on  IP: ' + app.get('ipaddr') + ' and port ' + app.get('port'));
});
