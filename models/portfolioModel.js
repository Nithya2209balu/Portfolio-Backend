 
const mongoose = require('mongoose');

 const introSchema = new mongoose.Schema({
    welcomeText : {
        type:String,
        require:true,
    },
    firstName : {
        type:String,
        require:true,
    },
    lastName : {
        type:String,
        require:true,
    },
    caption : {
        type:String,
        require:true,
    },
    description : {
        type:String,
        require:true,
    },
 })

 const aboutSchema = new mongoose.Schema({
    lottieURL : {
        type:String,
        require:true,
    },
    description1 : {
        type:String,
        require:true,
    },
    description2 : {
        type:String,
        require:true,
    },
    skils:{
        type:Array,
        require:true,
    }
 });

 const projectsSchema = new mongoose.Schema({
    title : {
        type:String,
        require: true,
    },
    description : {
        type:String,
        require: true,
    },
    image : {
        type:String,
        require: true,
    },
    title : {
        type:String,
        require: true,
    },
    link : {
        type:String,
        require: true,
    },
    technologies : {
        type:Array,
        require: true,
    },

 })

 const contactSchema = new mongoose.Schema({
    name : {
        type:String,
        require: true,
    },
    gender : {
        type:String,
        require: true,
    },
    email : {
        type:String,
        require: true,
    },
    address : {
        type:String,
        require: true,
    },
 })

 module.exports = {
    Intro : mongoose.model("intros",introSchema),
    About : mongoose.model("abouts",aboutSchema),
    Project : mongoose.model("projects",projectsSchema),
    Contact : mongoose.model("contacts",contactSchema),

 }