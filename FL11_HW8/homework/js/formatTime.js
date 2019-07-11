const MINUTES_IN_DAY = 1140;
const MINUTES_IN_HOUR = 60;
let formatTime = (m) => {
  let d = parseInt(m / MINUTES_IN_DAY);
  m = m - (MINUTES_IN_DAY * d);
  let h = parseInt(m / MINUTES_IN_HOUR);
  m = m - (MINUTES_IN_HOUR * h);
  console.log(`${d} day(s) ${h} hour(s) ${m} minute(s)`);
};
formatTime(3601);