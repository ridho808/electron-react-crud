const Mongoose = require('mongoose');


const TodoScheme = Mongoose.Schema({
    list : {
        type : String,
        require : true
    },
    Progress : {
        type : String,
        enume : ['Y','N'],
        default : 'N'
    }
});

module.exports = Mongoose.model('Todo-list',TodoScheme);