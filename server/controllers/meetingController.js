const jwt = require("jsonwebtoken");
const Meeting = require("../models/Meeting");

const createMeeting = async (req, res) => {
  const { userId, roomName } = req.body;

  const payload = {
    aud: 'jitsi',
    iss: 'your_app_id',
    sub: 'meet.jit.si',
    room: roomName,
    context: {
      user: {
        name: 'User',
        id: userId
      }
    },
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
  };

  const token = jwt.sign(payload, 'your_app_secret', { algorithm: 'HS256' });

  const meetingLink = `https://meet.jit.si/${roomName}?jwt=${token}`;

  const newMeeting = new Meeting({
    roomName,
    createdBy: userId,
    participants: [userId],
    startTime: new Date(),
  });

  await newMeeting.save();

  res.json({ meetingLink });
};

module.exports = { createMeeting };
