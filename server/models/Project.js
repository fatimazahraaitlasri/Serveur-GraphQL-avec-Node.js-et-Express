const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name : {
        type: String,
        require:true
    },
    description : {
        type: String,
        require:true
    },
    status : {
        type: String,
        require:true,
        enum: ['no started' , 'In Progress' , 'Completed']
    },
    clientId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'client'
    }
})
module.exports = mongoose.model('Project',ProjectSchema);