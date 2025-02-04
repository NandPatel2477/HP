const mongoose = require("mongoose");

main().then(() => {console.log("connection successful");})
.catch(err => console.log(err));

async function main()
{
  await mongoose.connect('mongodb+srv://Prasham:Password1109@useranalytics.akzt3.mongodb.net/UserAnalytics');
}


const analyticsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  page: { type: String, required: true }, // Page URL or name
  event: { type: String, required: true }, // Example: "click", "view", "scroll"
  timestamp: { type: Date, default: Date.now },
  metadata: { type: Object, default: {} }, // Extra details like button clicked
});

const Analyse = mongoose.model("Analytic",analyticsSchema);


module.exports = mongoose.model("Analytics", analyticsSchema);