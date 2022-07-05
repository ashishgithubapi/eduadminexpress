'use strict';
const {LocalStorage}  = require('node-localstorage');
const localstorage = new LocalStorage('./scracth');
const axios = require('axios');

const indexView = (req, res, next) => {
    let data = null;
    
    if (localstorage.getItem('user')!=null) {
        data=JSON.parse(localstorage.getItem('user'));
    }
    
    if (data !== null) {
        res.render('home');        
    }else {
        res.redirect('/login');
    }
}

const iconsView = (req, res, next) => {
    res.render('icons');
}
 
const mapView = (req, res, next) => {
    res.render('map');
}

const profileView = (req, res, next) => {
    res.render('profile');
}

const userView = async (req, res, next) => {
    
    //console.log(fetchData);
    let userData = [];
    
    const fetchData = await axios.get("http://65.0.85.130:3001/api/getUser");
    
    if(fetchData['data']){
        const userFetchData = fetchData.data;
        console.log(userFetchData);
        if(userFetchData.err==false)
        {
            userData=userFetchData.data;
        }
    }
    
    res.render('user',{userData:userData});
}

const updateStatus = async (req, res, next) => {
    
    const userObject = {
        login_user_id: req.body.id,
        is_activate: req.body.currentActivateStatus
    };
    
    
    const fetchData = await axios.post(`http://65.0.85.130:3001/api/updateUser`,userObject);
    //console.log("fetchData",fetchData);
    //res.JSON({"msg":"success"});
    //res.redirect('/user');
    res.redirect('/user');  
    
    
}


module.exports = {
    indexView,
    iconsView,
    mapView,
    profileView,
    userView,
    updateStatus
}