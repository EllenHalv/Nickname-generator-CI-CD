// Importing descriptions and adjectives from separate files
import descriptions from './descriptions.js';
import adjectives from './adjectives.js';

const nameInput = document.getElementById('name');
const generatedNickname = document.getElementById('generated-nickname');

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const generateNameAndNickname = (event) => {
  event.preventDefault(); // Prevent form submission behavior

  const fullName = capitalizeFirstLetter(nameInput.value);

  const firstLetter = fullName.charAt(0).toUpperCase(); //TODO print a message if invalid name is entered

  const firstWord = descriptions[Math.floor(Math.random() * descriptions.length)];
  const secondWord = adjectives[firstLetter][Math.floor(Math.random() * adjectives[firstLetter].length)];

  const generatedNameAndNicknameText = `Your nickname could be: "${firstWord} ${secondWord} ${fullName}".`;

  // Set the text content of the 'generated-nickname' div
  generatedNickname.textContent = generatedNameAndNicknameText;
};

const buttonElement = document.getElementById('generate-name-and-nickname-button');
buttonElement.addEventListener('click', generateNameAndNickname);
