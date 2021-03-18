import React, { useState, useEffect } from 'react';
// Material UI Components
import Typography from '@material-ui/core/Typography';

const minutesToAdd = 1;
const currentTime = new Date().getTime();
const futureTime = new Date(currentTime + minutesToAdd*60000);

function CountdownTimer() {
  
  const calculateTimeLeft = (difference) => {
    let timeLeft = {
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(futureTime - currentTime);

  useEffect(() => {
    const difference = futureTime - new Date();
    if (difference > 0) {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft(difference));
      }, 1000);
    }
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
    <Typography variant="body1">Time Left: {timerComponents.length ? timerComponents : <span>Time's up!</span>}</Typography>
  );
}

export default CountdownTimer;