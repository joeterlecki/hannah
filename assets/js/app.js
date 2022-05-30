const PalindromeController = (() => {

  return {
    convertString: function (input) {
      let newString = [];
      for (let char = input.length - 1; char >= 0; char --) {
        newString += input[char];
      }
      return newString;
    },

    evaluatePalindrome: function (oldString, newString) {
      let palindromeStatus = false;
      if (oldString === newString) {
        palindromeStatus = true;
        return palindromeStatus;
      } else {
        return palindromeStatus;
      }
    }
  }
})();

const UIController = (() => {
  const uiSelectors = {
    submitButton: '#buttonSubmit',
    inputString: '#userString',
    palindromeOutput: '#message'
  }

  return {
    getSelectors: function () {
      return uiSelectors;
    },

    getStringInput: function () {
      return document.querySelector(uiSelectors.inputString).value
    },

    displayPalindrome: function (palindromeString, palindromeStatus) {
      if (palindromeStatus === true) {
        document.querySelector(uiSelectors.palindromeOutput).innerHTML = `<p>${palindromeString} IS A PALINDROME</p>`
      } else {
        document.querySelector(uiSelectors.palindromeOutput).innerHTML = `<p>${palindromeString} IS NOT A PALINDROME</p>`
      }
    }
  }

})();

const AppController = ((PalindromeController, UIController) => {
  const loadEventListeners = function () {
    const uiSelectors = UIController.getSelectors();
    document.querySelector(uiSelectors.submitButton).addEventListener('click', submitPalindrome);
  }

  const submitPalindrome = function (event) {
    const stringInput = UIController.getStringInput();
    const newString = PalindromeController.convertString(stringInput);
    const palindromeStatus = PalindromeController.evaluatePalindrome(stringInput, newString);
    UIController.displayPalindrome(newString, palindromeStatus);

    event.preventDefault();
  }

  return {
    init: function () {
      loadEventListeners();
    }
  }

})(PalindromeController, UIController);

AppController.init();