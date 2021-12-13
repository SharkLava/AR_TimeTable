var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var minute = today.getMinutes();
var flag = -1;
var frac_time = hour + (minute / 60);
var class_list = [
  [
    "CS1001", "PH1801T", "MA1001", "EN1001", "Lunch", "CS1703", "CS1801/Sports",
    "CS1801/Sports"
  ],
  [
    "BS1001", "CS1801/PH1801T", "CS1801/PH1801T", "Library", "Lunch", "PH1801T",
    "MA1001", "MOOC/Self Learning"
  ],
  [
    "CS1001", "MA1001", "CS1703", "CS1703", "Lunch", "Seminar", "Seminar",
    "Seminar"
  ],
  [
    "CS1001", "BS1001", "PH1801T", "EN1001", "Lunch", "CS1703", "CS1801/Sports",
    "CS1801/Sports"
  ],
  [
    "EN1001", "CS1801/PH1801T", "CS1801/PH1801T", "MOOC/Self Learning", "Lunch",
    "MA1001", "Seminar", "Mentoring"
  ]
];
if (frac_time >= 8 && frac_time <= 9) {
  flag = 0;
} else if (frac_time < 10) {
  flag = 1;
} else if (frac_time < 11) {
  flag = 2;
} else if (frac_time < 12) {
  flag = 3;
} else if (frac_time < 13) {
  flag = 4;
} else if (frac_time < 13.67) {
  flag = 5;
} else if (frac_time < 14.67) {
  flag = 6;
} else if (frac_time < 14.67) {
  flag = 7;
} else if (frac_time < 15.67) {
  flag = 8;
}
if (flag == -1 || day > 5) {
  return("No Classes at the moment");
} else
  return(class_list[day][flag]);
