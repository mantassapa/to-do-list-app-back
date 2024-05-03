const mongoose = require("mongoose")

const toDoModelSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true, "add title"]
    },
    description: {
        type:String,
    },
    start:{
        type:String,
        required:[true, "add start date"]
    },
    end:{
        type:String,
        required:[true, "add end date"]
    },
    added:{
        type:Number
    },
    updated:{
        type:Number,
        required:[true, "add update time"]
    },
    finished:{
        type:Boolean,
        required:[true, "add finish"]
    },
})

module.exports = mongoose.model("ToDo", toDoModelSchema)

// interface ToDoInterexample {
//     _id?:string;
//     title:string;
//     description:string;
//     start:String;
//     End:String;
//     Added?:Number;
//     updated?:Number;
//     finished?:Number;
// }[]