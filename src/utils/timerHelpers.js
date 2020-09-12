const getSeconds = seconds => {
  if (seconds < 10) {
    return `0${seconds}`;
  }
  return seconds;
};

const getMinutes = minutes => {
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return minutes;
};

const getHours = hours => {
  if (hours < 10) {
    return `0${hours}`;
  }
  return hours;
};

export default {
  getSeconds,
  getMinutes,
  getHours,
};
