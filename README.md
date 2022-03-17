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