const pool = require("./connection");
const express = require("express");

const router = express.Router();

const getData = (query) => new Promise((res, rej) => {
    pool.getConnection( function(err,connection){
        if (err) {
            return rej(err);
        }   
        connection.query(query, function(error, results){
            connection.release();
            if (error) return rej(error);
            return res(results);        
        });
        connection.on('error', function(err) {      
            return rej(err);   
        });
    });
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username);
        const query = `SELECT * from user_details where username = "${username}" and password = "${password}"`;
        const data = await getData(query);
        if(data.length == 0) return res.status(404).send("not ok");
        return res.status(200).send("ok");
    }
    catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

router.post('/signup', async (req,res) => {
    try {
        const { username, password } = req.body;
        console.log(username);
        let query = `SELECT * from user_details where username = "${username}"`;
        const data = await getData(query);
        if(data.length != 0) return res.status(404).send("not ok");

        query = `insert into user_details (username, password) values ("${username}", "${password}")`;
        await getData(query);
        return res.status(200).send("ok");
    }
    catch (err) {
        res.status(500).send(err);
    }
})


router.get('/landDetails', async (req,res) => {
    try {
        const query = `SELECT * from land_details_v2`;
        const data = await getData(query);
        // console.log(data[0].data[0]);
        console.log(data);
        return res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})

router.post('/landDetails', async (req,res) => {
    try {
        const { name, line1, line2, city, state, postalCode, landId, imageUrl, price } = req.body;
        console.log("name, line1", name, line1)
        const query = `insert into land_details_v2(name, line1, line2, city, state, postalCode, landId, imageUrl, price) values ("${name}", "${line1}", "${line2}", "${city}", "${state}", "${postalCode}", "${landId}", "${imageUrl}", "${price}")`;
        await getData(query);
        return res.status(200).send("ok");
    }
    catch (err) {
        res.status(500).send(err);
    }
})

router.post('/contactUs', async (req,res) => {
    try {
        const { name, email, message, username } = req.body;
        const query = `insert into contact_us_feedback(name, email, message, username) values ("${name}", "${email}", "${message}", "${username}")`;
        await getData(query);
        return res.status(200).send("ok");
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
