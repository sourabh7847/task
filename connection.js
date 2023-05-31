const mysql = require("mysql"); 

const pool = mysql.createPool({   
                                waitForConnections: true,
                                host: "sql.freedb.tech",
                                port: 3306, 
                                database: "freedb_patrimony", 
                                user: "freedb_patrimony",
                                password: "v*T@H&VfkC8WV&x",
                                acquireTimeout: 100000000
                            });
module.exports = pool;
