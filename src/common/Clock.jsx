import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className='tw-box-border ' style={{ fontSize: '2em', fontWeight: 'bold', textAlign: 'center' }}>
        <p className='tw-text-lg'>Local Time (IST)</p>
      {formattedTime}
    </div>
  );
}

export default DigitalClock;
