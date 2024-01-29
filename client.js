
const net = require("net");
let connection;
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "172.19.179.140",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ROS");
  });

  conn.on("connect", () => {
    console.log("Moved Up");
    conn.write("Move: up");
  });

  conn.on("connect", () => {
    console.log("Moved Up - Again");
    conn.write("Move: up");
  });

  connection = conn;
  return conn;
};

const handleUserInput = function(key) {
  // Logic to handle various key presses
  if (key === '\u0003') {
    // This unicode represents Ctrl+C, which is commonly used to exit applications.
    process.exit();
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

module.exports = {
  connect,
  handleUserInput
};