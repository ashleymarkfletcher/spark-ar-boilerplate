const Time = require('Time')

export const helloWorld = async () => {
  await wait(4000)

  return 'Hello World!'
}

function wait(ms) {
  return new Promise(function (resolve, reject) {
    Time.setTimeout(resolve, ms)
  })
}
