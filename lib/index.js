module.exports = (function(Env){
    var os = require('os');
    var hostname = os.hostname();
    var fs = require('fs');
    var lodash = require('lodash');
    var wrench = require('wrench'),
        util = require('util'),
        path = require('path');


    return {
        detectEnv : function(env){
            for (var index in env){
                if (lodash.isString(env[index])){
                    if (hostname == env[index]){
                        return index;
                    }
                }
                else if (lodash.isObject(env[index])) {
                    if (env[index].indexOf(hostname)!= -1){
                        return index;
                    }
                }
            }

            return 'production';
        },
        loadConfig : function(configPath){
            var Config = {};
            var configFiles = wrench.readdirSyncRecursive(configPath);
            var env = this.detectEnv(Env);

            for (var a in configFiles){
                var file = configFiles[a];
                if (path.extname(file) == '.json'){
                    var conf = path.basename(file,'.json');
                    if (typeof Config[conf] != 'undefined'){
                        if (file.match(env)){
                            Config[conf] = lodash.merge(Config[conf],require(configPath + '/' + file));
                        }
                        continue;
                    }
                    Config[conf] = require(configPath + '/' + file);
                }
            }
            return Config;
        }
    };

});