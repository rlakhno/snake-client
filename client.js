
const net = require("net");
// establishes a connection with the game server
const connect = function() {
  console.log("Something to see !!!");
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

  return conn;
};

module.exports = {
  connect
};


