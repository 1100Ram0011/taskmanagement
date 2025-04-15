// const meetingSchema = new mongoose.Schema({
//     roomName: String,
//     participants: [String],
//     type: String, // '1-on-1' or 'group'
//     createdAt: { type: Date, default: Date.now },
//     team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }
//   });
  
//   module.exports = mongoose.model('Meeting', meetingSchema);
  

const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  roomName: String,
  createdBy: String, // user ID
  participants: [String],
  startTime: Date,
  endTime: Date
});

module.exports = mongoose.model("Meeting", meetingSchema);
