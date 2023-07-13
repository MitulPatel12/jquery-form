$(function(){


$(document).ready(function() {
    $('#fname').on('blur', function() {
        validateFirstName();
    });

    $('#fname').on('focus', function() {
        $('#fname-error').hide();
    });

    $("#lname").on('blur',function(){
        validateLastName();
    })

    $('#lname').on('focus', function() {
        $('#lname-error').hide();

    });

    $('#email').on('blur', function() {
        validateEmail();
    });

    $('#email').on('focus', function() {
        $('#email-error').hide();
    });

    $('#password').on('blur', function() {
        validatePassword();
    });

    $('#password').on('focus',function(){
        $('#password-error').hide();
    })

    $('#cpassword').on('blur', function() {
        validateCPassword();
    });

    $('#cpassword').on('focus',function(){
        $('#cpassword-error').hide();
    })

    $('#myform').on('submit', function(e) {
        e.preventDefault();

        validateFirstName();
        validateLastName();
        validateEmail();
        validatePassword();
        validateCPassword();
    });

    function validateFirstName() {
        var fullName = $('#fname').val();
        if (fullName === '') {
            $('#fname-error').text('First Name is required').show();
        } 
        else {
            $('#fname-error').hide();
        }
    }

    
    function validateLastName() {
        var fullName = $('#lname').val();
        if (fullName === '') {
            $('#lname-error').text('Last Name is required').show();
        } else {
            $('#lname-error').hide();
        }
    }

    function validateEmail() {
        var email = $('#email').val();
        if (email === '') {
            $('#email-error').text('Email is required').show();
        } else if (!isValidEmail(email)) {
            $('#email-error').text('Invalid Email').show();
        } else {
            $('#email-error').hide();
            checkEmailAvailability(email);
        }
    }

    
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    function validatePassword() {
        var password = $('#password').val();
        if (password === '') {
            $('#password-error').text('Password is required').show();
        }
        // else if(password.length < 5){
        //     $('#password-error').text('Password must be greater than 5 characters')
        // } 
        else {
            $('#password-error').hide();
        }
    }

    function validateCPassword() {
        var password = $('#password').val();
        var confirmPassword = $('#cpassword').val();
        if (confirmPassword === '') {
            $('#cpassword-error').text('Confirm Password is required').show();
        } else if (password !== confirmPassword) {
            $('#cpassword-error').text('Passwords do not match').show();
        } else {
            $('#cpassword-error').hide();
        }
    }



});

})