window.onload = function () {
  upTime("31 October, 2021 00:00");
};

function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  milliseconds = Math.abs(countTo - now) * 0.000002611 + 5200000;
  hours = milliseconds / 36e5;
  document.getElementById('floor').firstChild.nodeValue = '$' + milliseconds.toLocaleString("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  clearTimeout(upTime.to);
  upTime.to = setTimeout(function () {
    upTime(countTo);
  }, 1);
}
