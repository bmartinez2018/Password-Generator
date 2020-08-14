"use strict";
$(document).ready(function() {
var getRandomNumber = function(max) {
var random;
if (!isNaN(max)) {
random = Math.random(); //value >= 0.0 and < 1.0
random = Math.floor(random * max); //value is an integer between 0 and max - 1
random = random + 1; //value is an integer between 1 and max
}
return random;
};
$("#generate").click(function() {
$("#password").val( "" ); // clear previous entry
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
var password = "";
var start, stop, char;
// get password length entered by user
var num = parseInt( $("#num").val() );
// loop number of times entered by user - on each iteration...
for (var i = 0; i < num; i++) {
// get a random character from the chars string
start = getRandomNumber(chars.length);
stop = start + 1;
char = chars.substring(start, stop);
// add the random character to the password string
password = password += char;
}
// display the password string when the loop is done
$("#password").val( password );
}); // end click()
$("#clear").click(function() {
$("#num").val( "" );
$("#password").val( "" );
$("#num").focus();
}); // end click()
// set focus on initial load
$("#num").focus();
}); // end ready()
//caling a javascript function on onKeyPress event of textbox
//this function will allow only number ,
//for rest of the characters and symbol key stroke will be disabled
function numbersonly(e)
        {
//getting charCode of key
        var unicode=e.charCode? e.charCode : e.keyCode
        if (unicode!=8)
            {
                //if the key isn't the backspace key (which we should allow)
        if (unicode<48||unicode>57) //if not a number
                {
        return false //disable key press
                }
        }
            else
            {
                return true;
            }
        }