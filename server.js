const express  = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'html');
app.set('views',__dirname+'/views');

app.use('/', routes);

app.listen(3000, function(){
	console.log('Listening to 3000');
});
