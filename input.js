// input.js
const setupInput = function(connection) {
  const handleUserInput = function(key) {
    // Logic to handle various key presses
    if (key === '\u0003') {
      // This unicode represents Ctrl+C, which is commonly used to exit applications.
      process.exit();
    }
    if (key === 'h') {
      connection.write("Say: Hi.");
    }
    if (key === 'b') {
      connection.write("Say: Bye");
    }
    if (key === 'o') {
      connection.write("Say: OK");
    }
    if (key === 'w') {
      connection.write("Move: up");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'd') {
      connection.write("Move: right");
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