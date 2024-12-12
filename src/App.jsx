import { useState, useEffect } from 'react';

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const timeZones = [
    { label: 'India', timeZone: 'Asia/Kolkata' },
    { label: 'Canada', timeZone: 'America/Toronto' },
    { label: 'New York', timeZone: 'America/New_York' },
    { label: 'London', timeZone: 'Europe/London' },
    { label: 'Tokyo', timeZone: 'Asia/Tokyo' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date, timeZone = undefined) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // Enables AM/PM
      timeZone,
    };
    return new Intl.DateTimeFormat(undefined, options).format(date);
  };

  const formatDate = (date, timeZone = undefined) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone,
    };
    return new Intl.DateTimeFormat(undefined, options).format(date);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      {/* Local Time Display */}
      <div className="text-center p-8 rounded-lg shadow-lg bg-gray-900 bg-opacity-70 mb-6 animate-fade-in-down">
        <h1 className="text-8xl font-extrabold text-teal-400 mb-4 animate-bounce">
          {formatTime(currentTime)}
        </h1>
        <p className="text-2xl text-gray-200 font-semibold transition-all duration-300">
          {formatDate(currentTime)}
        </p>
      </div>

      {/* World Clock */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {timeZones.map((zone) => (
          <div
            key={zone.timeZone}
            className="p-6 rounded-lg shadow-lg bg-gray-800 bg-opacity-80 hover:scale-105 transform transition-transform duration-300 hover:bg-gradient-to-r from-black-400 to-green-500"
          >
            <h2 className="text-xl text-teal-300 font-bold mb-2">{zone.label}</h2>
            <p className="text-4xl text-gray-100 font-semibold">
              {formatTime(currentTime, zone.timeZone)}
            </p>
            <p className="text-lg text-gray-400">{formatDate(currentTime, zone.timeZone)}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-gray-200 mt-8">
        <p className="mb-4">
          Made with 💖 by <span className="font-bold text-teal-400">Somanath</span>
        </p>
        <div className="flex space-x-4">
          {/* GitHub Link */}
          <a
            href="https://github.com/SOMANATHPANDA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.033-1.612-4.033-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.11-.774.42-1.304.763-1.604-2.665-.3-5.466-1.334-5.466-5.933 0-1.311.47-2.382 1.236-3.222-.124-.303-.536-1.523.118-3.176 0 0 1.007-.322 3.301 1.23a11.44 11.44 0 013.006-.404c1.02.005 2.045.137 3.006.404 2.293-1.552 3.3-1.23 3.3-1.23.655 1.653.243 2.873.118 3.176.77.84 1.236 1.91 1.236 3.222 0 4.61-2.807 5.628-5.478 5.922.432.372.815 1.102.815 2.222v3.293c0 .318.218.69.825.573C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/somanath-panda-software-engineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM8 20h-3v-11h3v11zM6.5 7.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM20 20h-3v-5.5c0-3.8-4-3.5-4 0v5.5h-3v-11h3v1.5c1.4-2.6 7-2.8 7 2.5v7z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default DigitalClock;