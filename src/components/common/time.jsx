const timeRegEx = /\d\d:\d\d/g;

export const timeToSeconds = time => {
  if (!timeRegEx.test(time)) {
    return 0;
  }
  const parsedTime = time.split(":");
  let seconds = 0;
  seconds += parseInt(parsedTime[0]) * 60;
  seconds += parseInt(parsedTime[1]);
  return seconds;
};

export const secondsToTime = seconds => {
  if (!Number.isInteger(seconds)) {
    return "ERR";
  }
  const secondsRemaining = seconds % 60;
  const minutes = (seconds - secondsRemaining) / 60;

  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    secondsRemaining.toString().padStart(2, "0")
  );
};
