const mongoose = require("mongoose");

main().then(() => {console.log("connection successful");})
.catch(err => console.log(err));

async function main()
{
  await mongoose.connect('mongodb+srv://Prasham:Password1109@useranalytics.akzt3.mongodb.net/UserAnalytics');
}

const reportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  generatedAt: { type: Date, default: Date.now },
  reportType: { type: String, enum: ["daily", "weekly", "monthly"], required: true },
  insights: { type: Object, required: true }, // Summary data (e.g., most visited pages)
});

const Report = mongoose.model("Report",reportSchema);

module.exports = mongoose.model("Report", reportSchema);