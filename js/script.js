// Cristiano
// ICS2O-Unit5-01-HTML
// April 20 2022

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-HTML/sw.js", {
    scope: "/ICS2O-Unit5-01-HTML/",
  })
}

var randomnumber = Math.floor(Math.random() * 6) + 1;
var number = 1

/**
 * Alerts "Hello, World!"
 */
function onButtonClick() {
  if (number == randomnumber) {
    document.getElementById("result").innerHTML = "<br><h5>The random number was " + randomnumber + "!</h5><br><h5>You got it right!</h5>"
  } else {
    document.getElementById("result").innerHTML = "<br><h5>The random number was " + randomnumber + "!</h5><br><h5>You got it wrong...</h5>"
  }
  randomnumber = Math.floor(Math.random() * 6) + 1;
  console.log("The current random number is " + randomnumber + "!")
}

/**
 * Updates the user's selected number to the number currently in the slider.
 */
function updateNumber() {
  number = document.getElementById("slider").value
  document.getElementById("slider-number").innerHTML = "<h4>Selected Number: " + number + "</h4>"
}

console.log("The current random number is " + randomnumber + "!")
