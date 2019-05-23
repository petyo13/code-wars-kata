/*Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. */

function points(games) {
  {
  var tot = games.map(point);
  var result = 0;
for (var i = 0; i<tot.length; i++) {
  result = result + tot[i]
}
return result
}
}

function point (result) {
  if (result[0]>result[2]) {return 3} if (result [0] === result[2]) {return 1} else { return 0}
}
