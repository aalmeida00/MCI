const nemo = ['nemo'];
const massive = new Array(100000).fill('nemo')


function clock(start) {
  if ( !start ) return process.hrtime();
  var end = process.hrtime(start);
  return Math.round((end[0]*1000) + (end[1]/1000000));
}

function findNemo(array) {
  let t0 = clock();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }

  let t1 = clock(t0);

  console.log(`Call to fin Nemo took ${t1} milisseconds`)

}

findNemo(massive)