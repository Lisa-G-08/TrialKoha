// workstudy.js
// Set the initial active menu item
let prevActiveItemID = 'ProfileViewing';
let prevActiveTextID = 'Profile_txt';
document.getElementById(prevActiveTextID).style.color = "#A5494D";


function toggleMenu(contentID, clickedElement) {
    var activeItem = document.getElementById(contentID);
    var clickedText = document.getElementById(clickedElement);

    // Hide the previously active content
    if (prevActiveItemID) {
        document.getElementById(prevActiveItemID).style.display = "none";
        document.getElementById(prevActiveTextID).style.color = "black";

    }

    // Show the selected content
    activeItem.style.display = (activeItem.style.display === 'none' || activeItem.style.display === '') ? 'block' : 'none';

    if (activeItem.style.display === 'block') {
        clickedText.style.color = '#A5494D';
    }

    // Update the previously active menu item
    prevActiveItemID = contentID;
    prevActiveTextID = clickedElement;

}

function toggleSignIn() {
    toggleMenu('signin', 'SignIn_txt');
}
function toggleSignOut() {
    toggleMenu('SignOut', 'SignOut_txt');
}
function toggleViewProfile() {
    toggleMenu('ProfileViewing', 'Profile_txt');
}

function toggleViewSchedule() {
    toggleMenu('ViewSchedule', 'ViewSchedule_txt');
}

function EditProfile(){
    var inputs = document.querySelectorAll('.editable[disabled]');
      // Loop through each input and enable it
      inputs.forEach(function(input) {
        input.removeAttribute('disabled');
        input.style.border = '1px solid #A5494D'; // Set border style using JavaScript
      });

    document.getElementById("EditProfile").style.display = "none";
    document.getElementById("SaveProfile").style.display = "inline-block";
    document.getElementById("Cancel").style.display = "inline-block";

}

function Cancel() {
    document.getElementById("EditProfile").style.display = "block";
    document.getElementById("SaveProfile").style.display = "none";
    document.getElementById("Cancel").style.display = "none";

    var inputs = document.querySelectorAll('.editable:not([disabled])');
      inputs.forEach(function(input) {
        input.setAttribute('disabled', 'disabled');
        input.style.border = '0';
      });
}


