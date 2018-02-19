// Get the modal
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//GETTING THE INPUT
var input = document.getElementById("terminal");
input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13 && input.value == 0) {
    modal.style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function(e) {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}