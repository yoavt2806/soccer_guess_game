## Task Description
create a guessing game of football flayers.
the goal of the task is to test some React and JS fundementals:
1. getting data from async call.
2. state managment
3. css fundementals
4. components structure and code arrangment
5. Arrays manipulations
6. Using an existing component of external library

## Sub Tasks
We should discuss about the architecture with the candidate first, and see how he wants to build this feature,
but we might want to use the following order in order to test his skills one after the other:
1. Devide the screen to header of 200px height and content for the rest of the screen
   * check basic CSS knowledge
3. get the data and store it
   * An opputionity to discuss about where do we store our state. 
   * talk about global state and what are the options for it (Resuc Store, Context, props propogation) and the pros and cons.
5. create the comparison component between the real player and the last guess player
   * Check if the candidate builds it in a generic way
6. choose a random player for each game.
7. Manage the state of the game - Probably a list of guesses.
   * check if the candidate creates a minimal state without derivative of the data
   * working with list, talk with the candidate about render lists in React - key prop for list and the reconsalliation process.

## Level
The task requires intermediate-level knowledge of React

## Setup

This project was created with React's Create React App scripts. To
install the dependencies, please run:

```
yarn install
```

The development server can then be run via:

```
yarn start
```


# Game Instructions:

1. The user has five chances in order to guess the right player (in each session, we choose a random one).
2. All fields should be presented for each guess (age, team, etc.) and fill them with green for right guess and grey for
   wrong guess.
3. When the user guess the right player you should present a success message: "You're right! the right player is
   $RIGHT_PLAYER_NAME$"
4. If the number of guesses ends before the user guesses the right player you should present a failure message: "You
   lost! maybe next time"

# development notes:

1. You can get the players list by calling the async method "window.getPlayers" which returns array of player objects.

# expected result video:



https://user-images.githubusercontent.com/97841381/159259050-95884612-51ed-4401-be83-6a4a4edebc8a.mov

