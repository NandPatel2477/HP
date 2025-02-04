const mongoose = require("mongoose");

main().then(() => {console.log("connection successful");})
.catch(err => console.log(err));

async function main()
{
  await mongoose.connect('mongodb+srv://Prasham:Password1109@useranalytics.akzt3.mongodb.net/UserAnalytics');
}

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  action: { type: String, required: true }, // Example: "logged in", "updated profile"
  timestamp: { type: Date, default: Date.now },
  details: { type: Object, default: {} }, // Extra information
});

const Activity = mongoose.model("Activity",activitySchema);

module.exports = mongoose.model("Activity", activitySchema);