import React, { useState } from "react";

const MeetingRoom = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleNewMeeting = () => {
    setIsVideoOpen(!isVideoOpen);
    console.log("New meeting started!");
  };

  return (
    <>
      <div className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Start a Video Call</h2>
        <p className="text-gray-600 mb-6">
          Connect face-to-face with your members instantly.
        </p>
        <button
          onClick={handleNewMeeting}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          {isVideoOpen ? "Close Meeting" : "Start Meeting"}
        </button>
      </div>

      {/* Jitsi Video Meeting (Left side) */}
      {/* {isVideoOpen && (
        <div
          className="fixed top-24 left-4 bg-white border shadow-lg z-40 rounded-lg p-4"
          style={{
            width: `${videoWindowSize.width}px`,
            height: `${videoWindowSize.height}px`,
            resize: "both", // Make the window resizable
            overflow: "hidden", // Hide content overflow when resizing
            minWidth: "200px", // Set minimum width
            minHeight: "150px", // Set minimum height
          }}
          onMouseMove={handleResize}
        >
          <h2 className="text-lg font-semibold mb-2">Meeting</h2>
          {/* Jitsi Embed */}
          <iframe
            src="https://meet.jit.si/YourRoomName"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="camera; microphone; fullscreen; display-capture"
            className="rounded-md"
          ></iframe>
          <button
            onClick={() => setIsVideoOpen(false)}
            className="text-sm text-red-500 mt-4"
          >
            Close
          </button>
        </div>
      )} */}
    </>
  );
};

export default MeetingRoom;
