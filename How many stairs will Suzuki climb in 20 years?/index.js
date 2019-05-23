function stairsIn20(s){
  var mapped = s.map(dayStairs);
  var result = 0;
  for (var i = 0; i<mapped.length; i++) {
    result = result + mapped [i]
  }
  return result*20
}

function dayStairs (day) {
  var result = 0;
  for (var i = 0; i<day.length; i++) {
result = result + day[i]
  }
  return result
}
