function getString() {
  let userString = document.getElementById("userString").value;
  displayPalindrome(userString);

}

function displayPalindrome(normalString) {

  const url = `https://api.joeterlecki.io/hannah?request_string=${normalString}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data["response"]["isPalindrome"] == true) {
        document.getElementById("message").innerHTML = `<p>${data["response"]["reversedString"]} IS A PALINDROME!</p>`;
      } else {
        document.getElementById("message").innerHTML = `<p>${data["response"]["reversedString"]} IS NOT A PALINDROME!</p>`;
      }
    })
}