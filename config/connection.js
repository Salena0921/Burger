console.log("connection.js");

var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});


if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: "",
		database: "burgers_db"
	});
}

connection.connect(function(err) {
  console.log("connect?");
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;