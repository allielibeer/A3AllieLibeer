//function
    
let password1 = prompt("Enter password:")
let password2 = prompt("Re-enter password:")

//function to compare two passwords from prompts
    
function compare(pw1, pw2) {
    if (pw1 === pw2)
        return true
    else
        return false
}

//outputs a message if same or not same
let answer = compare(password1, password2)

if (answer === true)
    console.log("The passwords are the same.")
else
    console.log("The passwords are NOT the same.")
    