document.getElementById('submit-button').addEventListener('click', function(){
    const userEmail = document.getElementById('email-field');
    let emailField = userEmail.value;
    // console.log(emailField);
   // get user password
   const userPassword = document.getElementById('password-field');
    let passwordField = userPassword.value;
    // console.log(passwordField);
    if(emailField == 'riyadhossaint100@gmail.com' && passwordField == 'riyad'){
        window.location.href ='banking.html';
           
       
    }
});
