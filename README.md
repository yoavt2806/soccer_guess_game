## Task Description
create a guessing game of football flayers.
the goal of the task is to test some React and JS fundementals:
1. getting data from async call.
2. state managment
3. css fundementals
4. components structure and code arrangment
5. Arrays manipulations
6. Using an existing component of external library

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

