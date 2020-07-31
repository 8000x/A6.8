let pbVal = 0;

function pbChange(count) {
 
  if (pbVal == 100) {
  pbVal = 0;
}
  pbVal += count;
  if (pbVal > 100) {
  pbVal = 100;
}
  $("#progress-bar").width(`${pbVal}%`);
  $("#progress-bar").text(`${pbVal}%`);
}

function init() {
 
  pbChange(pbVal) 
  $("#plus1").click(function () {
    pbChange(1);
  });
  $("#plus3").click(function () {
    pbChange(3);
  });
  $("#plus7").click(function () {
    pbChange(7);
  });
}

$(document).ready(init);
