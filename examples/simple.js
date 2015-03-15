var path = require("path");
var environments = {
    'development' : ['ubuntu','mike-PC','mint-box'],
    'production' : 'myProductionBox'
};
var loader = require("../lib/index")(environments);


console.log(loader.loadConfig(path.join(__dirname,'./config')));