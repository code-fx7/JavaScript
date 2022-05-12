// Hour Tracking
const workingTime = [
  { day: "Mon", start: 9, end: 16 },
  { day: "Die", start: 9, end: 16 },
  { day: "Mit", start: 9, end: 16 },
  { day: "Don", start: 9, end: 16 },
  { day: "Fri", start: 9, end: 16 },
];
const myWorkingTime = workingTime.reduce((acc, day) => {
  // (end-start)
  return (acc += day.end - day.start);
}, 0);
console.log(myWorkingTime);
