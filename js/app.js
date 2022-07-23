window.onload = function () {
  upTime("31 October, 2021 00:00");
};

function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  //milliseconds = Math.abs(countTo - now) * 0.0025 + 5200000; //Prior to Dec 28th
  //milliseconds = Math.abs(countTo - now) * 0.0016975 + 5200000; //New Dec 28th
  milliseconds = Math.abs(countTo - now) * 0.000470618 + 5200000; //New March 17th
  milliseconds = milliseconds * 4; //Post Split (July 22, 2022)
  document.getElementById('float').firstChild.nodeValue = milliseconds.toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  clearTimeout(upTime.to);
  upTime.to = setTimeout(function () {
    upTime(countTo);
  }, 1);
}
