import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = (target) => {
    const now = new Date().getTime();
    const targetTime = new Date(target).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      return {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      total: timeDifference,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      {timeLeft.total > 0 ? (
        <div className="countdown">
          <div className="time-block">
            <span className="time">{timeLeft.days}</span>
            <span className="unit">Days</span>
          </div>
          <div className="time-block">
            <span className="time">{timeLeft.hours}</span>
            <span className="unit">Hours</span>
          </div>
          <div className="time-block">
            <span className="time">{timeLeft.minutes}</span>
            <span className="unit">Minutes</span>
          </div>
          <div className="time-block">
            <span className="time">{timeLeft.seconds}</span>
            <span className="unit">Seconds</span>
          </div>
        </div>
      ) : (
        <p>Countdown has ended!</p>
      )}
    </div>
  );
};

export default CountdownTimer;
