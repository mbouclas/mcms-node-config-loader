mcms-node-config-loader
======================

Easily load config files for multiple environments

## What does it do
This packages allows you to easily load the right config file depending on the environment you're working on

## Install
npm install mcms-node-config-loader

## Folder structure
The library expects a structure like so :
```
/configDir
        /devEnv
            configFile.json
        /anotherEnv
            configFile.json
configFile.json
anotherConfigFile.json
```

Every file under the configDir is loaded as production environment. If you create a subdirectory named after an environment you
have defined before calling the module, it will overwrite the default config. For example, you have a mysql.json 
config under the configDir with your mySQL connection settings. If you create the same file with different settings under
the configDir/development directory, when you're working on your dev machine theses settings will be loaded instead

## Usage
check [the examples folder](https://github.com/mbouclas/mcms-node-config-loader/tree/master/examples) for usage scenarios
Initialize like so :
```
var path = require("path");
var environments = {
    'development' : ['ubuntu','mike-PC','mint-box'],
    'production' : 'myProductionBox'
};
var configLoader = require("../index").setEnv(environments);
var Config = configLoader.loadConfig(path.join(__dirname,'./config'));
```

That's it, under the Config object you can now access all your settings
