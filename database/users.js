const mongoose = require("mongoose");

main().then(() => {console.log("connection successful");})
//.catch(err => console.log(err));

async function main()
{
  await mongoose.connect('mongodb+srv://Prasham:Password1109@useranalytics.akzt3.mongodb.net/UserAnalytics');
}


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User",userSchema);

/*const User1= new User
(
    {
        name: "Prasham",
        email: "padiyaprasham1@gmail.com",
        password: "Password",
        createdAt: new Date()
    }
)

User1.save().then(()=> {console.log("Data Inserted Successfuly.")});*/

module.exports = mongoose.model("User", userSchema);