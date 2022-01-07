var readlineSync = require('readline-sync');
let words = [
  'dome', 'charlatan', 'prairie', 'result',
  'gliding', 'effect', 'institution', 'march',
  'lemonade', 'celeriac', 'continent', 'distance',
  'pecan', 'canal', 'carbon', 'instantiation',
  'recess', 'pound', 'jewellery', 'vegetarian',
  'riding', 'illustration', 'macaroni', 'info',
  'increase', 'neuron', 'therapy', 'legislator',
  'arthur', 'ranger', 'rawhide', 'acquisition',
  'fine', 'event', 'accuracy', 'blue',
  'consequence', 'toast', 'brake', 'tosser',
  'drawing', 'sneaker', 'crook', 'intentionality',
  'plier', 'cemetery', 'arch', 'atmosphere',
  'seep', 'influx', 'piglet', 'oatmeal',
  'spouse', 'tablecloth', 'beheading', 'atheist',
  'daikon', 'armament', 'utility', 'ruffle',
  'factor', 'shoemaker', 'loquat', 'someplace',
  'sprout', 'entertainment', 'linguist', 'kitty',
  'volunteer', 'forte', 'journey', 'ability',
  'distribution', 'rhythm', 'depression', 'sewer',
  'privacy', 'dictaphone', 'prejudice', 'kiss',
  'ruckus', 'choker', 'hacienda', 'determination',
  'vest', 'mistake', 'trick', 'pliers',
  'eligibility', 'widow', 'hawk', 'nicety',
  'vine', 'dissemination', 'alcohol', 'upstairs',
  'coupon', 'diagram', 'corporal', 'apartment'
];

function hangman() {
  console.log("");
  let input = "";
  const randomWord = words[Math.floor(Math.random() * words.length)];
  let wordArr = randomWord.split("");
  let dashArr = [];
  for (let i in wordArr) {
    dashArr.push("_ ");
  }
  // console.log(randomWord);
  input = readlineSync.question(`Guess the word:

${dashArr.join("")}

You can make 7 incorrect guesses before losing

> input: ${input}`);
  let hangmancounter = 0;
  let chances = 7;
  while (chances > 0) {
    if (wordArr.includes(input)) {
      let indexes = [];
      for (let i = 0; i < wordArr.length; i++)
        if (wordArr[i] === input) {
          indexes.push(i);
        }
      // console.log(indexes);
      for (let k = 0; k < indexes.length; k++) {
        dashArr[indexes[k]] = input + " ";
      }
      if (!(dashArr.includes("_ "))) {
        console.log("");
        console.log(randomWord);
        console.log("You have won the game!");
        console.log("");
        return;
      }
      input = "";
      input = readlineSync.question(`Correct guess!

${dashArr.join("")}

> input: ${input}`);
      chances++;
    }
    else {
      input = "";
      if (chances - 1 === 0) {
        input = readlineSync.question(`
${hangmanArr[hangmancounter]}

Last chance! 

${dashArr.join("")}

> input: ${input}`);
        hangmancounter++;
      }
      else {
        input = readlineSync.question(`
${hangmanArr[hangmancounter]}

Incorrect guess you have ${chances - 1} more incorrect guess left: 

${dashArr.join("")}

> input: ${input}`);
        hangmancounter++;
      }
    }
    chances--;
  }
  console.log("");
  console.log(`
${hangmanArr[7]}

You have run out of guesses,
the correct answer was: ${randomWord}`);
  console.log("");
}

let hangman1 = (`
      
          ║
          ║
          ║
          ║
          ║
    ══════╩═══
`);
let hangman2 = (`
      ╔═══╗
          ║
          ║
          ║
          ║
          ║
    ══════╩═══
`);
let hangman3 = (`
      ╔═══╗
      |   ║
          ║
          ║
          ║
          ║
    ══════╩═══
`);
let hangman4 = (`
      ╔═══╗
      |   ║
      O   ║
          ║
          ║
          ║
    ══════╩═══
`);
let hangman5 = (`
      ╔═══╗
      |   ║
      O   ║
      |   ║
          ║
          ║
    ══════╩═══
`);
let hangman6 = (`
      ╔═══╗
      |   ║
      O   ║
     -|-  ║
          ║
          ║
    ══════╩═══
`);
let hangman7 = (`
      ╔═══╗
      |   ║
      O   ║
     -|-  ║
      LL  ║
     ███  ║
    ══════╩═══
`);
let hangman8 = (`
      ╔═══╗
      |   ║
      O   ║
     -|-  ║
     / l  ║
  ███     ║
    ══════╩═══
`);


let hangmanArr = [hangman1, hangman2, hangman3, hangman4, hangman5, hangman6, hangman7, hangman8];

hangman();

