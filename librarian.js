// librarian.js
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

function toggleViewProfile() {
    toggleMenu('ProfileViewing', 'Profile_txt');
}

function toggleBookManagement() {
    toggleMenu('BookManagement', 'BookManagement_txt');
}

function toggleCheckIn() {
    toggleMenu('CheckIn', 'CheckIn_txt');
}

function toggleCheckOut() {
    toggleMenu('CheckOut', 'CheckOut_txt');
}

function toggleWorkStudy() {
    toggleMenu('WorkStudy', 'WorkStudy_txt');
}

function EnterBookInfo() {
    document.getElementById("card").style.display = "none";
    document.getElementById("card1").style.display = "none";
    document.getElementById("formContainer").style.display = "block";
}

function CancelBookInfo(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    document.getElementById("card").style.display = "block";
    document.getElementById("card1").style.display = "block";
    document.getElementById("formContainer").style.display = "none";
}

function Schedule(){
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("ScheduleManagement").style.display = "block";
}

function StudentInfo(){
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
    document.getElementById("formContainer1").style.display = "block";
}

function Action(event){
    event.preventDefault(); // Prevent the default form submission behavior
    document.getElementById("card2").style.display = "block";
    document.getElementById("card3").style.display = "block";
    document.getElementById("formContainer1").style.display = "none";
}

function EditSchedule() {
    document.getElementById("card4").style.display = "none";
    document.getElementById("card5").style.display = "none";
    document.getElementById("card6").style.display = "none";
    document.getElementById("card7").style.display = "none";
    document.getElementById("ScheduleEditing").style.display = "block";
}

function PreviousPage(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    document.getElementById("card7").style.display = "inline-block";
    document.getElementById("card6").style.display = "inline-block";
    document.getElementById("card5").style.display = "inline-block";
    document.getElementById("card4").style.display = "inline-block";
    document.getElementById("ScheduleEditing").style.display = "none";
}

function BookSearch() {
    document.getElementById("card").style.display = "none";
    document.getElementById("card1").style.display = "none";
    document.getElementById("BookEditor").style.display = "block";
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

function Cancel(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    document.getElementById("EditProfile").style.display = "block";
    document.getElementById("SaveProfile").style.display = "none";
    document.getElementById("Cancel").style.display = "none";

    var inputs = document.querySelectorAll('.editable:not([disabled])');
      inputs.forEach(function(input) {
        input.setAttribute('disabled', 'disabled');
        input.style.border = '0';
      });
}