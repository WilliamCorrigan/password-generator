var generateBtn = document.querySelector("#generateBtn");
var copyBtn = document.querySelector("#copyBtn");

var specialChars = document.querySelector("#specialChars");
var numericChars = document.querySelector("#numericChars");
var lowercaseChars = document.querySelector("#lowercaseChars");
var uppercaseChars = document.querySelector("#uppercaseChars");
var lengthOfPassword = document.getElementById("lengthOfPassword");

var passwordText = document.querySelector("#password");

lengthOfPassword.defaultValue = "16";

var Numbers = "0123456789";
var Lowercase = "abcdefghijklmnopqrstuvwxyz";
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function GetLengthOfPassword() {

  var lengthOfPassword = document.querySelector("#lengthOfPassword").value;

  if ((lengthOfPassword < 8) || (lengthOfPassword > 128)) {
    return -1;
  }
  else {
    return lengthOfPassword;
  }
};

generateBtn.addEventListener("click", function () {

  var password = "";
  var charSet = "";

  var length = GetLengthOfPassword();

  if (length == -1) {
    passwordText.style.color = "red";
    passwordText.style.fontWeight = "300";
    passwordText.value = "Passsword length must be greater than or equal to 8 or less than or equal to 128";
  }

  else {

    var special = specialChars.checked;
    if (special) {
      charSet += Special;
    }

    var numeric = numericChars.checked;
    if (numeric) {
      charSet += Numbers;
    }

    var lowercase = lowercaseChars.checked;
    if (lowercase) {
      charSet += Lowercase;
    }

    var uppercase = uppercaseChars.checked;
    if (uppercase) {
      charSet += Uppercase;
    }

    if (charSet.length == 0) {
      passwordText.style.color = "red";
      passwordText.style.fontWeight = "300";
      passwordText.value = "Please select at least one character set";
    }
    else {
      var charSetLength = charSet.length;

      var r = Math.floor(Math.random() * charSetLength);

      for (var i = 0; i < length; i++) {
        var r = Math.floor(Math.random() * charSetLength);
        password += charSet[r];
      }

      passwordText.style.color = "black";
      passwordText.style.fontWeight = "600";

      passwordText.value = password;

      copyBtn.removeAttribute("disabled");
      copyBtn.focus();
    }
  }
}
)

copyBtn.addEventListener("click", function () {

  var passwordText = document.querySelector("#password");

  passwordText.select();
  document.execCommand("copy");

  passwordText.value = "Your password " + passwordText.value + " was copied to your clipboard.";
}
)