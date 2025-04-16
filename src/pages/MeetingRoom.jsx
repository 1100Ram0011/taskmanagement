import React, { useState } from "react";

const MeetingRoom = () => {
  const [showMeeting, setShowMeeting] = useState(false);
  const [videoWindowSize, setVideoWindowSize] = useState({
    width: 400,
    height: 300,
  });

  const toggleMeeting = () => {
    setShowMeeting((prev) => !prev);
  };

  return (
    <>
      <div className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Start a Video Call</h2>
        <p className="text-gray-600 mb-6">
          Connect face-to-face with your teammates instantly.
        </p>
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleMeeting}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {showMeeting ? "Close Meeting" : "Start Meeting"}
          </button>
        </div>
        </div>
        {showMeeting && (
          <div
            className="border border-gray-300 rounded shadow-lg p-2"
            style={{
              width: `${videoWindowSize.width}px`,
              height: `${videoWindowSize.height}px`,
              resize: "both",
              overflow: "hidden",
              minWidth: "200px",
              minHeight: "150px",
              maxWidth: "1000px",
              maxHeight: "425px",
            }}
          >
            <iframe
              src="https://meet.jit.si/YourRoomName"
              allow="camera; microphone; fullscreen; display-capture"
              style={{
                width: "100%",
                height: "100%",
                border: "0px",
              }}
              title="Jitsi Meeting"
            />
          </div>
        )}
      {/* </div> */}
    </>
  );
};

export default MeetingRoom;
