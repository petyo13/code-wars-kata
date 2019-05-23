/*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

The size will always be positive and will only use whole numbers.*/

function stringy(size) {
var str = "1";
for (var i = 0; i<size-1; i++) {
  if (i%2) {str += "1" } else {str += "0"}
}
return str
}
