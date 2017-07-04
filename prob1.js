const biggestThree = (array) => {
  let first = array[0];
  let second = array[1];
  let third = array[2];

  // n ln n
  // array = array.sort((a, b) => {
    // return b - a;
  // });

  for(let i = 0; i < array.length; i++){
    if (first < array[i]) {
      third = second;
      second = first;
      first = array[i];
    }
  }
  return [first, second, third];
}

console.log(biggestThree([5,3,7,1,8]));
