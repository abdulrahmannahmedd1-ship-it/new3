const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const studentSchema = new Schema({
 FirstName:String,
 LastName:String,
 email:String,
 Department:String,
});
 
 
// Create a model based on that schema
const Student = mongoose.model("Student", studentSchema);
 
 
// export the model
module.exports = Student;