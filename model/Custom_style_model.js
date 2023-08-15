import mongoose from "mongoose";

// Define a schema
const yourSchema = new mongoose.Schema({
  // Define your schema fields here
  // For example:
  name: String,
  html: String,
  css: String,
  javascript: String
  // ...
},{
    collection:"custom_style"
});

// Create a model
export const YourModel = mongoose.models.custom_style || mongoose.model('custom_style', yourSchema);
// Find all documents in the specified collection
// YourModel.find({}, (err, documents) => {
//     if (err) {
//       console.error('Error:', err);
//     } else {
//       console.log('All Documents:', documents);
//     }
//   });
// const custom_style = mongoose.models.custom_style ||mongoose.model("custom_style", newSchema);
// console.log(custom_style.find({}))
// export default custom_style;
