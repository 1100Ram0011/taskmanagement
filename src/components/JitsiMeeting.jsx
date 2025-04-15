// components/JitsiMeeting.jsx
import { useEffect } from 'react';

const JitsiMeeting = ({ roomName, displayName }) => {
  useEffect(() => {
    const domain = 'meet.jit.si';
    const options = {
      roomName,
      width: '100%',
      height: 600,
      parentNode: document.getElementById('jitsi-container'),
      userInfo: {
        displayName
      }
    };
    new window.JitsiMeetExternalAPI(domain, options);
  }, [roomName, displayName]);

  return <div id="jitsi-container"></div>;
};

export default JitsiMeeting;
