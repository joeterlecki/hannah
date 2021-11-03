function getString() {
  let userString = document.getElementById("userString").value;

  let palindromeString = reversedString(userString);

  let palindromeStatus = checkPalindrome(userString, palindromeString);

  displayPalindrome(palindromeStatus, palindromeString);

}

function reversedString(userString) {
  let newString = []

  for (let char = userString.length - 1; char >= 0; char--) {
    newString += userString[char];
  }

  return newString;

}

function checkPalindrome(userString, reversedString) {
  let palindromeStatus = true;

  if (userString === reversedString) {
    return palindromeStatus;
  } else {
    palindromeStatus = false;
    return palindromeStatus;
  }
}

function displayPalindrome(palindromeStatus, finalString) {
  if (palindromeStatus == true) {
    document.getElementById("message").innerHTML = `<p>${finalString} IS A PALINDROME!</p>`;
  } else {
    document.getElementById("message").innerHTML = `<p>${finalString} IS NOT A PALINDROME!</p>`;
  }
}