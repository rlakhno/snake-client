# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

Download server: https://github.com/lighthouse-labs/snek-multiplayer

Download client: https://github.com/rlakhno/snake-client/edit/master

## Getting Started

- Follow steps inside the snek server repo to run the server side
- First start the server by `cd snek-multiplayer` and run this command `npm run play`
- Run the development snake client using the `node play.js` command.
- Use the w, a, s, and d keys to be the up, left, down, right movement keys and let them send messages to the server for the respective movements.
- The concept of the game is where a player trying to eat food items (represented as quare shape) by colliding with them using the snake's head. As the snake consumes each object, it grows longer, making navigation increasingly challenging.

#### Real lpay looks live that: 

<img width="655" alt="image" src="https://github.com/rlakhno/snake-client/assets/116111453/47685ffe-94f0-414f-8987-30bfa5cbc5f6">

#### The snake can display messages by sending them from clien to server
<img width="762" alt="image" src="https://github.com/rlakhno/snake-client/assets/116111453/24e7eae0-6c4c-4cf7-92bb-a84add6f0fdb">



## Enjoy the Snake Game
