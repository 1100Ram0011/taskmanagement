import React from 'react';
import JitsiMeetComponent from '../components/VideoCall/JitsiMeetComponent';

const MeetingRoom = () => {
  const roomName = "team-meeting-123"; // You can dynamically generate this
  const displayName = "Admin"; // Get from logged-in user

  return (
    <div>
      <h2 className="text-xl font-bold p-4">Video Meeting</h2>
      <JitsiMeetComponent roomName={roomName} displayName={displayName} />
    </div>
  );
};

export default MeetingRoom;
