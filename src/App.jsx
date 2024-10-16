import { useState, useEffect } from 'react';

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer when component unmounts
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <div className="text-center p-8 rounded-lg shadow-lg bg-gray-900 bg-opacity-70">
        {/* Time Display */}
        <h1 className="text-8xl font-extrabold text-teal-400 mb-4 transition-all duration-300">
          {formatTime(currentTime)}
        </h1>
        {/* Date Display */}
        <p className="text-2xl text-gray-200 font-semibold transition-all duration-300">
          {formatDate(currentTime)}
        </p>
      </div>
    </div>
  );
}

export default DigitalClock;
