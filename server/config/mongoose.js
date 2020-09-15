var mongoose = require('mongoose');

var path = require("path");
var fs = require('fs');

mongoose.connect('mongodb://localhost/RESTFUL_TASKS_CRUD',{ useNewUrlParser: true, useUnifiedTopology: true  },);

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0)
        require(models_path+'/'+file);
});