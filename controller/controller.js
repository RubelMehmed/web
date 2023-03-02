
// //mongodb+srv://rubelmehmed:mehmed@myemployeedb.s8kzshg.mongodb.net/?retryWrites=true&w=majority
// //mongodb+srv://rubelmehmed:<password>@myemployeedb.s8kzshg.mongodb.net/?retryWrites=true&w=majority


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rubelmehmed:<password>@myemployeedb.s8kzshg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  designation: { type: String, required: true },
  employee_type: { type: String, required: true }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports.getAllEmployees = async () => {
  try {
    const employees = await Employee.find();
    return employees;
  } catch (error) {
    console.error('Error getting employees:', error);
    return [];
  }
};


// const { MongoClient } = require('mongodb');

// // Replace <password> with your MongoDB Atlas password
// const uri = "mongodb+srv://rubelmehmed:mehmed@myemployeedb.s8kzshg.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function main() {
//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();
//     console.log("Connected to MongoDB Atlas");

//     // Create the Employee collection
//     const db = client.db("EmployeeDB");
//     await db.createCollection("Employee");
//     console.log("Employee collection created");

//     // Insert a sample document into the Employee collection
//     const result = await db.collection("Employee").insertOne({
//       name: "John Doe",
//       department: "Sales",
//       salary: 50000,
//       designation: "Sales Manager",
//       employee_type: "Full Time"
//     });
//     console.log(`Inserted ${result.insertedCount} document(s) into the Employee collection`);

//   } catch (err) {
//     console.error(err);
//   } finally {
//     // Close the MongoDB client
//     await client.close();
//     console.log("Connection closed");
//   }
// }

// main().catch(console.error);
