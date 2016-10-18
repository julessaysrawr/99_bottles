function sing() {
  for (i = 99; i > 0; i--) {
    var plural = (i > 1) ? "bottles" : "bottle";
    var nextCount = (i > 1 ) ? (i - 1) : "no more";
    var nextContainer = ((i - 1) === 0) ? "bottles" : "bottle";
    console.log(i + " " + plural + " of beer on the wall, " + i + " " + plural + " of beer.");
    console.log("Take one down and pass it around, " + nextCount + " " + nextContainer + " of beer on the wall.");
  };

  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}

sing();



//
// var bottleNum = 99;
// var currentCount = (bottleNum - 1);   //if bottleNum > 1 use bottles else bottle
//
