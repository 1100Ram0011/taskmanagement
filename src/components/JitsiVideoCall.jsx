import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JitsiVideoCall = ({ roomName, displayName }) => {
  const [roomUrl, setRoomUrl] = useState('');

  useEffect(() => {
    if (roomName) {
      axios
        .post('http://localhost:5000/api/create-room', { roomName })
        .then((response) => {
          setRoomUrl(response.data.url);
        })
        .catch((error) => {
          console.error('Error creating room:', error);
        });
    }
  }, [roomName]);

  return (
    <div>
      <h2>Join Video Call</h2>
      {roomUrl ? (
        <iframe
          src={roomUrl}
          width="100%"
          height="500px"
          allow="camera; microphone; fullscreen; display-capture"
          title="Jitsi Video Call"
        />
      ) : (
        <p>Loading the video call...</p>
      )}
    </div>
  );
};

export default JitsiVideoCall;
