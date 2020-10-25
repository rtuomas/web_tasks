// contact.js
// This script checks a contact form submission for HTML and a valid email address.

// Function called when the form is submitted.
// Function validates the data and returns a Boolean. (Logs to console in this example)
function process() {
    'use strict';

    // Variable to represent validity:
    let nameB = true;
    let emailB = true;
    let commentB = true;

    // Get form references:
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const comments = document.getElementById('comments');

    //Validate name
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name.value)
    && !(name.value.length<2 || name.value.length>100)){
        nameB=false;
    }else{
        console.log("Valid name")
    }
    /*
    if(!name.value.length<3 || !name.value.length>100
    || !(name.value.indexOf(' ')>=0)){
        nameB=false;
        alert("Enter valid name");
    }

     */

    // Validate the email address:
    if (!email || !email.value 
    || (email.value.length < 6) 
    || (email.value.indexOf('@') == -1)) {
        console.log("unvalid email");
        emailB = false;
        alert('Please enter a valid email address!');
    } else {
        console.log("valid email")
    }

    // Validate the comments:
    var maxLength = 100;
    if (!comments || !comments.value 
    || (comments.value.indexOf('<') != -1) ) {
        commentB = false;
        alert('Please enter your comments, without any HTML!');
    } else if (comments.value.length > maxLength) {
        commentB = false;
        var originalText = comments.value;
        // Find the last space before the limit:
        var lastSpace = originalText.lastIndexOf(' ', maxLength);
        // Trim the text to that spot:
        var limitedText = originalText.slice(0, lastSpace);
        comments.value = limitedText;
        commentB = true;

        alert('Comment was trimmed under ' + maxLength + ' characters');
    }
        
    // Normally you would "return okay;" here to submit/block the form submission
    // return okay;

    // For this example we alert the user and log details to the console
    var message;
    if (nameB && emailB && commentB) {
        message = "Form submitted";
    } else {
        message = "Form not submitted";
    }
    console.log(message);
    console.log("Email: " + email.value);
    console.log("Comments: " + comments.value);
    alert(message);

    // Prevent submission for the purposes of this example:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;