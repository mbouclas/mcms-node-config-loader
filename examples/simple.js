var path = require("path");
var environments = {
    'development' : ['ubuntu','mike-PC','mint-box'],
    'production' : 'myProductionBox'
};
var loader = require("../index").setEnv(environments);



console.log(loader.loadConfig(path.join(__dirname,'./config')));