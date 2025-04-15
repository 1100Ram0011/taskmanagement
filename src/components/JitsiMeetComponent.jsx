import React, { useEffect, useRef } from 'react';

const JitsiMeetComponent = ({ roomName, displayName }) => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    const loadJitsiScript = () => {
      const script = document.createElement('script');
      script.src = 'https://meet.jit.si/external_api.js';
      script.async = true;
      script.onload = () => startMeeting();
      document.body.appendChild(script);
    };

    const startMeeting = () => {
      const domain = 'meet.jit.si';
      const options = {
        roomName,
        parentNode: jitsiContainerRef.current,
        userInfo: {
          displayName,
        },
      };
      new window.JitsiMeetExternalAPI(domain, options);
    };

    if (window.JitsiMeetExternalAPI) {
      startMeeting();
    } else {
      loadJitsiScript();
    }

    return () => {
      jitsiContainerRef.current.innerHTML = '';
    };
  }, [roomName, displayName]);

  return <div ref={jitsiContainerRef} style={{ height: '90vh', width: '100%' }} />;
};

export default JitsiMeetComponent;
