const passwordEl = document.getElementById("pass-el");
const generateBtn = document.getElementById("generate-btn");
const checkLowercase = document.getElementById("lowercase");
const checkUppercase = document.getElementById("uppercase");
const checkNumbers = document.getElementById("numbers");
const checkSymbols = document.getElementById("symbols");
const lengthSlider = document.getElementById("length-slider");
const lengthValue = document.getElementById("length-value");
const copyBtn = document.getElementById("copy-btn");

const NUMBERS = "0123456789";
const LOWERCASE = "abcdedfghijklmnopqrstuvwxyz";
const UPPERCSE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SYMBOLS = "!@#$%^&*()+_";

passwordEl.innerText = "The password will appear here";
lengthValue.innerText = lengthSlider.value;

lengthSlider.addEventListener("input", () => {
  lengthValue.innerText = lengthSlider.value;
});

// EVENT LISTERNERS AND FUNCTIONS
const generatePassword = () => {
  let password = "";
  let charSets = [];
  let passwordLength = parseInt(lengthSlider.value);

  if (checkLowercase.checked) {
    charSets.push(LOWERCASE);
  }
  if (checkUppercase.checked) {
    charSets.push(UPPERCSE);
  }
  if (checkNumbers.checked) {
    charSets.push(NUMBERS);
  }
  if (checkSymbols.checked) {
    charSets.push(SYMBOLS);
  }

  if (!charSets.length) {
    alert("Please select at least one character type!");
  }

  for (i = 0; i < passwordLength; i++) {
    const charSet = charSets[Math.floor(Math.random() * charSets.length)]; // Pick a random character set
    const charIndex = Math.floor(Math.random() * charSet.length); // Pick a random character from that set
    password += charSet[charIndex];

    passwordEl.classList.add("active");
    passwordEl.textContent = password;
  }
};

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  let password = passwordEl.textContent;
  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch(() => {
      alert("Failed to copy password!");
    });
});
