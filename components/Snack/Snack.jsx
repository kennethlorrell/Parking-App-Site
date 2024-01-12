import { useEffect, useState } from 'react';

const Snack = () => {
  const [notificationData, setNotificationData] = useState({});
  const { title, message } = notificationData;

  useEffect(() => {
    window.Echo.channel('notifications').listen('EmergencyDetected', (response) => {
      setNotificationData(response);

      setTimeout(() => {
        setNotificationData({});
      }, 15000)
    });

    return () => {
      window.Echo.channel('notifications').stopListening('EmergencyDetected');
    };
  }, []);

  return (
    <div className={`container md:px-2 px-4 mx-auto ${message ? '' : 'hidden'} `} role="alert">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        {title}
      </div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Snack;
