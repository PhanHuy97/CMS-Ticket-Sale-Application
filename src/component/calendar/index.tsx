import style from "./calendar.module.scss";

function CalendarCustom() {
  // Xác đinh là thứ mấy
  function Zeller(D: number, M: number, Y: number) {
    if (M < 3) {
      M = M + 12;
      Y = Y - 1;
    }

    var C = Math.floor(Y / 100);
    var K = Y - 100 * C;

    var S =
      Math.floor(2.6 * M - 5.39) +
      Math.floor(K / 4) +
      Math.floor(C / 4) +
      D +
      K -
      2 * C;

    var ans = S - 7 * Math.floor(S / 7);
    return ans;
  }

  // xác định năm nhuận
  function isLeap(year: number) {
    if (year % 4 || (year % 100 === 0 && year % 400)) return 0;
    else return 1;
  }

  // tìm số ngày mỗi tháng
  function daysIn(month: number, year: number) {
    return month === 2 ? 28 + isLeap(year) : 31 - (((month - 1) % 7) % 2);
  }

  // lập lịch tháng
  function calendar(month: number, year: number) {
    var startIndex = Zeller(1, month, year);
    var endIndex = daysIn(month, year);
    var result = Array.apply(0, Array(35)).map(function (i) {
      return 0;
    });
    if (startIndex === 0) {
      for (var i = startIndex; i < endIndex + startIndex; i++) {
        result[i + 6] = i - startIndex + 1;
      }
    } else {
      for (var i: number = startIndex; i < endIndex + startIndex; i++) {
        result[i - 1] = i - startIndex + 1;
      }
    }
    return result;
  }
  const monthnames = new Array(
    "January",
    "Februrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemeber"
  );
  let todayDate = new Date();
  let thismonth = todayDate.getMonth() + 1;
  let thisyear = todayDate.getFullYear();
  return <div></div>;
}

export default CalendarCustom;
