const express = require("express");
const { createMeeting } = require("../controllers/meetingController");
const router = express.Router();

router.post("/create", createMeeting);

module.exports = router;
