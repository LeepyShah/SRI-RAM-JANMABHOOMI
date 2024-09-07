function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMsg = document.getElementById('error-msg');


    if (name.trim() === '') {
        errorMsg.innerHTML = 'Please enter your name.';
        return false;
    }
    if (email.trim() === '') {
        errorMsg.innerHTML = 'Please enter your email.';
        return false;
    }

    if (message.trim() === '') {
        errorMsg.innerHTML = 'Please enter your message.';
        return false;
    }

    // If all validations pass, show thank you message and reset form
    document.getElementById('thank-you').style.display = 'block';
    document.getElementById('visitForm').reset();
    return false; // Prevent form submission to stay on the same page
}