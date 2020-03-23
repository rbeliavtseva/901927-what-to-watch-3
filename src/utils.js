export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const pad = (number) => {
  if (number < 10) {
    return `0` + number;
  }
  return number.toString();
};

export const fullScreenVideoTimeDurationFormat = (durationMS) => {
  const durationTime = new Date(durationMS * 1000);

  return `${pad(durationTime.getUTCHours())}:${pad(durationTime.getUTCMinutes())}:${pad(durationTime.getUTCSeconds())}`;
};
