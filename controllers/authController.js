'use strict';
const {LocalStorage}  = require('node-localstorage');
const localstorage = new LocalStorage('./scracth');

const loginView = async (req, res, next) => {
    try {
        res.render('login', {layout: 'loginlayout'});
    } catch (error) {
        console.log(error);
    }
}
const registerView = async (req, res, next) => {
    try {
       res.render('register', {layout: 'loginlayout'});
    } catch (error) {
        console.log(error);
    }
}
const handleLogin = (req, res, next) => {
    console.log('11');
    if(req.body.email=="info@educheck91.com" && req.body.password=="educheck@2022"){
    const obj = {
        email: req.body.email,
        password: req.body.password
    };
    console.log('22');
    
    console.log(obj);
    localstorage.setItem('user', JSON.stringify(obj));
    res.redirect('/');
    }
    else
    {
        res.render('login', {layout: 'loginlayout'},{err:"Invalid Credential"});
    }
}

const logOut = (req, res, next) => {
    localstorage.removeItem('user');
    res.redirect('/');
}

module.exports = {
    loginView,
    registerView,
    handleLogin,
    logOut
}