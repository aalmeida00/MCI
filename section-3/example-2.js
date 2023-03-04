const nemo = ['nemo'];
const massive = new Array(100000).fill('nemo')

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(massive) // O(n) --> Linear Time -> It takes linear time to find Nemo.