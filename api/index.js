require('dotenv').config();
const express = require('express');
const postgres = require('postgres');
const app = express();
const port = 6000

app.get('/',async (req, res) => {
    const sql = postgres(`${process.env.DATABASE_URL}`);
    const response = await sql`SELECT version()`;
    const { version } =  response[0];
    res.json({version});
    res.send('Hello World');
})

app.listen(port, () => {
    console.log('example app listening on port', port)
})