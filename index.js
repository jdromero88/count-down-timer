// function takes 2 arguments: minutes and seconds to countDown (both arguments needs to be a positive integer)
function countDown(minutes, secs) {

  //variables to reset timer
  let startingMinutes = minutes
  let startingSeconds = secs

  // check if the arguments received are type of number
  if (typeof minutes != 'number' || typeof secs != 'number') return
  // variable tiempo will run the function countDownSeconds every second.
  let tiempo = setInterval(countDownSeconds, 1000)

  // decrease the seconds and minutes.
  function countDownSeconds() {
    console.log(`time left: ${minutes}:${secs}`)

    if (secs <= 0) {
      // secs = startingSeconds + 1 // when timer is up it set back the seconds
      secs = 60 // when timer is up it reset the seconds

      // if seconds and minutes are equal to 0 then finalize the program
      if (checkIfExpires(minutes)) {
        // reset timer
        minutes = startingMinutes
        secs = startingSeconds
        return
      }
      minutes --
    }
    secs--
  }

  // check if any minutes are left if not clear the interval
  function checkIfExpires(min) {
    if (min == 0 ) {
      console.log('Times Up')
      clearInterval(tiempo)
      return true
    }
  }
}

countDown(2, 0)
