const nameInput = document.getElementById('name');
const generatedNickname = document.getElementById('generated-nickname');
const firstRandomWord = ['Little', 'Mr', 'Miss', 'Sir', 'Madame', 'Big', 'Bad', 'Lil', 'Feisty', 'Brave', 'Sassy', 'Captain', 'Dr.', 'Insane', 'Crazy', 'Major', 'Serious', 'Bootylicious', 'Sex-worker', 'Thirsty', 'Lonely', 'Under-aged', 'Old', 'Wrinkle-faced', 'Sad, old', 'Balding', 'Drunk', 'High-on-meth', 'Fucked-your-mom', 'Fucked-your-dad', 'Little Miss', 'Sad', 'Trump-supporting', 'Never on time', 'Horny', 'Slutty', 'Overworked', 'Glitter-Tits'];
const secondRandomWord = ['Boo-Thang', 'SparkleTail', 'and tired', 'Ridinghood', 'Babe', 'Body-Builder', 'Baddie', 'Snake', 'Stoneface', 'Shame', 'Unusual', 'with-high-Ape-index', 'Hottie', 'Horseface', 'with an attitude', 'Party-pooper', 'with a drinking problem', 'and desperate', 'and horny for your dad', 'and horny for your mom', 'with a dildo', 'and always hungry', 'and always horny'];
const nameEndings = ['-boi', '-licious'];

const generateNameAndNickname = (event) => {
    event.preventDefault(); // Prevent form submission behavior

    const fullName = nameInput.value;

    // Check if a random number should be added to the name
    const shouldAddRandomNumber = Math.random() > 0.8;

    // If a random number should be added, select a random nameEnding
    const randomLetters = shouldAddRandomNumber ? nameEndings[Math.floor(Math.random() * nameEndings.length)] : '';

    const firstWord = firstRandomWord[Math.floor(Math.random() * firstRandomWord.length)];
    const secondWord = secondRandomWord[Math.floor(Math.random() * secondRandomWord.length)];
    const generatedNameAndNicknameText = `Your nickname could be: "${firstWord} ${secondWord}-${fullName}${randomLetters}".`;

    // Set the text content of the 'generated-nickname' span
    generatedNickname.textContent = generatedNameAndNicknameText;
};

const buttonElement = document.getElementById('generate-name-and-nickname-button');
buttonElement.addEventListener('click', generateNameAndNickname);
