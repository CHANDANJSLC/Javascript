function isPalindrome(str) {
    
    //str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    return str === str.split('').reverse().join('');
  }
  
  var testString = prompt("Enter your string");
  if (isPalindrome(testString)) {
    console.log(testString + " is a palindrome.");
  } else {
    console.log(testString + " is not a palindrome.");
  }