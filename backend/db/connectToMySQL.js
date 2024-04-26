import mysql from "mysql";

export const connectionWithDB = () => {
  const password = process.env.PASSWORD;
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: password,
    port: 3306,
  });
  try {
    // connecting with database....
    connection.connect();
    // creating complete database for complete project
    connection.query("CREATE DATABASE IF NOT EXISTS Project", (err) => {
      if (err) throw err;
      console.log("database creation succssfull....");
      connection.query("USE Project", (error) => {
        if (error) throw error;
        console.log("Using Project database of mysql");
      });
    });
    console.log("Connection with db succsss...");
  } catch (error) {
    console.log(error);
  }
};
