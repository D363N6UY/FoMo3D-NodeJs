var express = require('express');
var bodyParser = require('body-parser');
var locale = require("locale");
var supported = new locale.Locales(["zh_TW", "zh_CN", "en"]);
var fs = require('fs');

var router = express.Router();
var app = express();

function render(filename, params) {
    var data = fs.readFileSync(filename, 'utf8');
    for (var key in params) {
      data = data.replace('{' + key + '}', params[key]);
    }
    return data;
  }


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));
var change_lang = function(req, res){
  var locales = new locale.Locales(req.headers["accept-language"])
  if( locales.best(supported) == "zh_CN"){
    res.send(render('public/index_ch.html', {
      name: req.params.name
    }));
  } else if (locales.best(supported) == "zh_TW"){
    res.send(render('public/index_zh_tw.html', {
      name: req.params.name
    }));
  } else {
    res.send(render('public/index_en.html', {
      name: req.params.name
    }));
  }
}

app.get('/', function (req, res) {
  change_lang(req,res);
});

app.get('/:name', function (req, res) {
  change_lang(req,res);
});

port = process.env.PORT || 80;

app.listen(port);
