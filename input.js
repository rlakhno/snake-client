// input.js
const {HI, BYE, OK, UP, LEFT, DOWN, RIGHT} = require('./constants');
const setupInput = function(connection) {
  const handleUserInput = function(key) {
    // Logic to handle various key presses
    if (key === '\u0003') {
      // This unicode represents Ctrl+C, which is commonly used to exit applications.
      process.exit();
    }
    if (key === 'h') {
      connection.write(HI);
    }
    if (key === 'b') {
      connection.write(BYE);
    }
    if (key === 'o') {
      connection.write(OK);
    }
    if (key === 'w') {
      connection.write(UP);
    }
    if (key === 'a') {
      connection.write(LEFT);
    }
    if (key === 's') {
      connection.write(DOWN);
    }
    if (key === 'd') {
      connection.write(RIGHT);
    }
  };
  // ==>> Implementation of setupInput function

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};