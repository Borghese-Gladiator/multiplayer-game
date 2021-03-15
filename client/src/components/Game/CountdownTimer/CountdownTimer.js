import React, { useState, useEffect } from 'react';

const minutesToAdd = 5;
const currentTime = new Date().getTime();
const futureTime = new Date(currentTime + minutesToAdd*60000);

function CountdownTimer() {
  
  const calculateTimeLeft = () => {
    const difference = futureTime - new Date();
    console.log(difference)
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] === null) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <p>Time Left: {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
  );
}

export default CountdownTimer;