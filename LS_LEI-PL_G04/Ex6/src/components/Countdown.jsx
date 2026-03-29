import { useEffect, useState } from "react";

const targetDate = new Date("2027-01-01T09:00:00");

function getTimeLeft() {
  const totalSeconds = Math.floor((targetDate - new Date()) / 1000);

  if (totalSeconds < 0) return null;

  return {
    days: Math.floor(totalSeconds / (60 * 60 * 24)),
    hours: Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)),
    minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
    seconds: totalSeconds % 60,
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <h3>The event starts in:</h3>
      <div id="counter" className="counter-text">
        {timeLeft
          ? `${timeLeft.days} days, ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
          : "The event has started!"}
      </div>
    </div>
  );
}

export default Countdown;
