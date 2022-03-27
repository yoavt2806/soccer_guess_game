## Task Description
Create a guessing game involving football players.
The purpose of this task is to test the following React and JS fundementals:
1. Getting data from an async call.
2. State managment
3. CSS fundementals
4. Component structure and coding arrangement
5. Array manipulation
6. Utilizing an existing component of an external library

## Sub Tasks
As a first step, we should discuss the architecture with the candidate, and see how he would like to implement this feature. However, we may choose to employ the following order in order to test his abilities one after another:
1. Provide a header of 200 pixels in height and content for the remainder of the screen
   * check basic CSS knowledge
2. Store the data
   * An opportunity to discuss where to store our state.
   * We will discuss the global state and its options (Resuc Store, Context, props propogation) as well as its pros and cons.
3. create the comparison component between the real player and the last guess player
   * Check if the candidate builds it in a generic way
4. Pick a random player..
5. Manage the state of the game - most likely a list of guesses.
   * Verify that the candidate creates a minimal state without derivation.
   * Talk with the candidate regarding rendering lists in React - key prop for the list and the reconcalliation process.

## Level
The task requires intermediate-level knowledge of React


# Game Instructions:

1. The user has five chances to guess the right player (each session, a random player is selected).
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

