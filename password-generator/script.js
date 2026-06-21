function passGen(length, lowerCase, upperCase, numbers, symbols) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_";
    const error = document.getElementById("error")
    const resBtn = document.querySelector(".pass-result")

    let allowedChar = "";
    allowedChar += lowerCase ? lowerChars : "";
    allowedChar += upperCase ? upperChars : "";
    allowedChar += numbers ? numberChars : "";
    allowedChar += symbols ? symbolChars : "";

    if (length < 6 || length > 20) {
        error.textContent = "Password length must be between 6 and 20 characters"
        return
    }
    else if (allowedChar.length === 0) {
        error.textContent = "At least one option must be selected"
        return 
    }
    else {
        let password = "";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * allowedChar.length);
            password += allowedChar[randomIndex];
        }
        error.textContent = ""
        resBtn.classList.add("active")
        return password;
    }
    error.textContent = "Something went wrong"
    return
}

const passBtn = document.getElementById("passBtn");
passBtn.onclick = function () {
    const passLength = document.getElementById("passLength").value;
    const passLower = document.getElementById("passLower").checked;
    const passUpper = document.getElementById("passUpper").checked;
    const passNumbers = document.getElementById("passNumbers").checked;
    const passSymbols = document.getElementById("passSymbols").checked;
    const passRes = document.getElementById("passRes");

    passRes.textContent = passGen(passLength, passLower, passUpper, passNumbers, passSymbols);
}

function copyPass() {
    const text = document.getElementById('passRes').textContent;
    navigator.clipboard.writeText(text);
}