// const connection = require("./connection");
const mysql = require("mysql"); 

console.log("here");


const connection = mysql.createConnection({   
    host: "sql.freedb.tech",
    port: 3306, 
    database: "freedb_patrimony", 
    user: "freedb_patrimony",
    password: "v*T@H&VfkC8WV&x"
});

connection.connect(function (err) {
    if(err) console.log("error occurred while connecting");
    else console.log("connection created with Mysql successfully");
});

// connection.query('CREATE TABLE user_details (id int AUTO_INCREMENT, username varchar(255), password varchar(255), primary key (id))', function (error, results, fields) {
//     if (error) throw error;
// });

// connection.query('SELECT * from user_details', function (error, results, fields) {
//     if (error) throw error;
//     console.log("result is", results);
// });


// connection.query('CREATE TABLE land_details (id int AUTO_INCREMENT, data varchar(255), primary key (id))', function (error, results, fields) {
//     if (error) throw error;
// });

// connection.query('SELECT * from land_details', function (error, results, fields) {
//     if (error) throw error;
//     console.log("result is", results);
// });

// connection.query('CREATE TABLE land_details_v2 (id int AUTO_INCREMENT, name varchar(255), line1 varchar(255), line2 varchar(255), city varchar(255), state varchar(255), postalCode varchar(255), landId varchar(255), imageUrl varchar(255), price varchar(255), primary key (id))', function (error, results, fields) {
//     if (error) throw error;
// });

// connection.query('SELECT * from land_details', function (error, results, fields) {
//     if (error) throw error;
//     console.log("result is", results);
// });


connection.query('CREATE TABLE contact_us_feedback (id int AUTO_INCREMENT,name varchar(255), email varchar(255), feedback longtext, primary key (id))', function (error, results, fields) {
    if (error) throw error;
});


// connection.query('TRUNCATE TABLE land_details', function (error, results, fields) {
//     if (error) throw error;
// });

connection.end();
