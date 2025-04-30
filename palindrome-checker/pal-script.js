const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

checkBtn.addEventListener('click', () => {
  const inputValue = textInput.value;

  if (inputValue === '') {
    alert('Please input a value');
    return
  }

  if (isPalindrome(inputValue) ) {
    result.innerText = `${inputValue} is a palindrome`
  } else {
    result.innerText = `${inputValue} is not a palindrome`
  }
})
