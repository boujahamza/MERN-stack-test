var express = require('Express');
var app = express();
var cors = require("cors");
const bodyParser = require('body-parser');

var start = require("./routes/start.js");
var upload = require("./routes/upload.js");
var login = require("./routes/login.js");
var signup = require("./routes/signup.js");
var logout = require("./routes/logout.js");
var show = require("./routes/show.js");
var find = require("./routes/find.js");
var jwt = require('jsonwebtoken');

app.use(cors());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlencodedParser);

app.use('/', start);
app.use('/start', start);
app.use('/upload', upload);
app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/show', show);
app.use('/find', find);

app.get('*',function(req,res) {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end('404 - NOT FOUND');
});


app.listen(8080);