/*Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.*/

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
