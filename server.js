const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

var patientDB = require('./Database/PatientDB');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended:true}));
//need this for bodyparser
var json_body_parser = bodyParser.json();

//listen to server on port 3000
app.listen(port,function() {
    console.log('Example app listening on port');
})

app.get('/',function(req,res) {
    //res.send('Hello World');
    res.send("server open");

    //testing-remove later
    var sessionid = 'projects/epione-test/agent/2';
    //getPatientThru(sessionid);

});

//webhook post function
app.post('/webhook',json_body_parser,function(req,res){

    //get session id to determine patient

    //get intent,params

    //get contexts 



})


//TODO CONNECT TO DATABASE
//AND DO RELAVENT CALLS TO OTHER API IF NEEDED

/**
 * Get patient through the session id 
 * @param sessionid 
 */

function getPatientThru(sessionid) {  
    //projects/epione-test/agent/intents/facd16aa-e3db-4de0-b26e-74f9c771e9b6
    //uncomment later
    //var str = req.body.session;
    var str = sessionid;
    var sessions = str.split("/");
    //console.log("Patient ID: " + sessions[sessions.length - 1 ] );
    var patientid = sessions[sessions.length - 1 ];
    patientDB.getPatientThruID(patientid);

}