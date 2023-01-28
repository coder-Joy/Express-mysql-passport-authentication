const express = require('express');
const crypto = require('crypto');
const localStrategy = require('passport-local');
const session  = require('express-session');
const MYSQLStore = require('express-mysql-session')(session);
const mysql = require('mysql');
const passport = require('passport');
const app = express();

const cn = require('./connection');

const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'not yet configured',
    password: 'none for now'
}

const sessionStore = new MYSQLStore(options);
app.use(session({
    key: 'no key was kept here',
    secret: 'no secret from you my friend',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

app.listen(3000,
    ()=> console.log("The app runs in http://localhost:3000"));