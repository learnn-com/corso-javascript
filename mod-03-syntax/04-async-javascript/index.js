// Event loop and async javascript

// SetTimeout example
function callMeIn3Seconds() {
  setTimeout(() => {
    console.log('I was called after 3 seconds')
  }, 3000)
}

callMeIn3Seconds()

// SetInterval example
function callMeEvery3Seconds() {
  setInterval(() => {
    console.log('I was called every 3 seconds')
  }, 3000)
}

callMeEvery3Seconds()

// Callback Example
function callMeAfter3Seconds(callback) {
  setTimeout(callback, 3000)
}

callMeAfter3Seconds(() => {
  console.log('I was called after 3 seconds')
})

function callMeEvery3Seconds(callback) {
  setInterval(callback, 3000)
}

callMeEvery3Seconds(() => {
  console.log('I was called every 3 seconds')
})

// Promise
function callMeAfter3Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I was called after 3 seconds')
    }, 3000)
  })
}

callMeAfter3Seconds().then((message) => {
  console.log(message)
})

function callMeEvery3Seconds() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve('I was called every 3 seconds')
    }, 3000)
  })
}

callMeEvery3Seconds().then((message) => {
  console.log(message)
})

// Promise error example

function callMeEvery3Seconds() {
  let counter = 0
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (counter === 3) {
        reject('I was called 3 times')
      } else {
        resolve('I was called every 3 seconds')
      }
    }, 3000)
  })
}

callMeEvery3Seconds()
  .then((x) => console.log(x))
  .catch((x) => console.log(x))
  .finally(() => console.log('finally'))

// Async/Await
async function callMeAfter3Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I was called after 3 seconds')
    }, 3000)
  })
}

const message = await callMeAfter3Seconds()
console.log(message)

// Async await error
function callMeEvery3Seconds() {
  let counter = 0
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (counter === 3) {
        reject('I was called 3 times')
      } else {
        resolve('I was called every 3 seconds')
      }
    }, 3000)
  })
}

try {
  const message = await callMeEvery3Seconds()
  console.log(message)
} catch (error) {
  console.log(error)
} finally {
  console.log('finally')
}

// Async always returns a promise
async function example() {
  return 'hello'
}

example().then((x) => console.log(x))
const foo = await example()

console.log(foo)