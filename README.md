# Hangman Game
## Setup
- Clone the repo to your local system
```
git clone <repo url> 
```
```
cd repo_name
```
- Initialize npm project
```
npm init
```

Note: Make sure you have `index.js` or `main.js` file, if not then just create it manually

- Install [ReadlineSync] package from `npm` and test it.

✨Start coding the game✨


## Hangman Gameplay

Here is an example of gameplay:
```
Guess the word:
_ _ _ _ _
You can make 3 incorrect guesses before losing
 
> input: a

Correct guess:
_ a _ _ _

> prompt: e

Incorrect guess, you have 2 more incorrect guesses left:
_ a _ _ _

> prompt: h

Correct guess:
h a _ _ _

> prompt: s

Incorrect guess, you have 1 more incorrect guesses left:
h a _ _ _

> prompt: p

Correct guess:
h a p p _

> prompt: y

Correct guess:
h a p p y

You have won the game!
```

In case the user runs out of the incorrect guesses then you should show this message
```
You have run out of guesses, the correct word was:
h a p p y
```


#### Requirements
- Wrap everything in a single main function.
  - You should write helper functions which will be called from the main function you wrote
- We should be able to play the game by running `node index.js`
- The random word should be chosen from an array of words as given in the file `words.js`


### Part 1
Break down the problem into at least 3 sub-parts 

### Part 2
Write the hangman game.

### Stretch
Draw the ASCII art of hangman with every step, like this
```
      ╔═══╗
      |   ║
      O   ║
     /|\  ║
       \  ║
     ███  ║
    ══════╩═══
```