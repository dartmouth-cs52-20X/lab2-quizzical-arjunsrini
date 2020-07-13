// hide answers at first
$('.result').hide()

// when submit pressed
document.getElementById('submit').addEventListener("click", function(e) {

  // get selected choices
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();

  // if not all questions answered
  if (choices.length < 7) {

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    return;

  } else {

    // hide popup and all rests
    $(".popup").hide();
    $('.result').hide()

    // score quiz
    var sideOfTT = scoreQuiz(choices);

    // show result
    modal.style.display = "block";
    var resutdiv = document.getElementById(sideOfTT);
    resutdiv.style.display = "block";

    return;
  }   
});

// return side of tik tok you voted for most
function scoreQuiz(choices) {
  var scores = new Map;

  //since choices can have more than value
  //tally values for each choice
  for (i = 0; i < choices.length; i++) {

    var elms = choices[i].split(" ",2);
    for (j = 0; j < elms.length; j++) {
      if (scores.has(elms[j])) {
        scores.set(elms[j], (scores.get(elms[j]) + 1));
      } else {
        scores.set(elms[j], 1);
      }      
    }
  }

  // loop, return most frequencht choice
  var maxval = 0;
  var maxtrait = "";
  for (let key of scores.keys()) {
    if (scores.get(key) > maxval) {
      maxval = scores.get(key);
      maxtrait = key;
    }
  }
  return maxtrait;
}

// handle the modal
// adapted from https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}