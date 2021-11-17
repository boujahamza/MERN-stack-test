var express = require('Express');
var router = express.Router();

router.get('/', function(req,res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello find");
    res.end();
})

module.exports = router;
