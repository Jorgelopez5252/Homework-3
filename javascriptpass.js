document.getElementById("password-btn").addEventListener("click", function() {
  getPasswordOptions();
});

var values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
var password ="";
var complexity=[]

for (var i = 0; i <=complexity.length; i++) {
  password = password+values.charAt(Math.floor(Math.random()))

  
}

document.getElementById("password").values= password;

console.log(password)

function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  if (isNaN(length)) {
    alert("Password length must be a number");
    return;
  }

  if (length < 8) {
    alert("Password length must be greater than 8");
    return;
  }

  if (length > 128) {
    alert("Password length must be less than 128");
    return;
  }
  /////////////////////////////////////////////////////////////////////////
  var specialChars = confirm("Would you like to use special character?");

  var numericChars = confirm("Would you like to use numeric character?");

  var uppercaseChars = confirm("Would you like to use uppercase character?");

  var lowercaseChars = confirm("Would you like to use lowercase character?");

  if (!specialChars && !numericChars && !uppercaseChars && !lowercaseChars) {
    alert("We can't help you, you are to picky...");
    return;
  }

  var passwordOptions = {
    specialChars: specialChars,
    numericChars: numericChars,
    uppercaseChars: uppercaseChars,
    lowercaseChars: lowercaseChars
  };
  // var passwordOptions = {
  //   specialChars,
  //   numericChars,
  //   uppercaseChars,
  //   lowercaseChars
  // };
  return passwordOptions;
}
