function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
      console.log(items[index]);
      index++;
  }

  for (var i = 0; i < 100; i++) {
      console.log('hi');
  }
}

// In inital case, this function have this Big O(1 + n/2 + 100)
// But we drop the constants bc is simplier based on Rule #2. So then our Big O is O(n)