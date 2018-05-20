// This is a Callback example for returning an API call's response

function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function (err, temp) {
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

// This is a Promise example for returning an API call's response - Don't always need this
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    // Simulates a server call
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

// Use Promise's ".then" method to define how success/failure is handled
getTempPromise('Brownsville').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
})

// Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('These are not both numbers');
      }
    });
  }

addPromise(3, 5).then(function (sum) {
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
})

addPromise('f', 5).then(function (sum) {
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
})
