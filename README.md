# Project Name

Phase 1: Setup
 
- git init
-npm init --y
- npm install express
- add "start": node server/server.js to package.json scripts
- create a folder w/ server.js inside
- create a public folder w/ index.html and scripts/clients.js, JQ and styles/style.cs
- initial server.js
- link thru html
- add to js file $( document ).ready( onReady ); and function OnReady()
- add //requires, //uses, //global, //spin up server, //routes on server.js
    - const express = require( 'express' );
    - const app = express();
    - const bodyParser = require( 'body-parser' );
    - app.use( express.static( 'server/public' ) );
    - app.use( bodyParser.urlencoded( { extended: true } ) );
- COMMIT!!!!!!!

PHASE 2: server GET route

- add to server.js: 

'''
app.get('/messages/', ( req, res)=>{
    console.log('/messages GET hit' ); //will show in server terminal 
    res.send( 'meow' ); 
})
'''
- restart server
- test handshake by going to "localhost:5000/messages in browser 
- GET is the browser default 

PHASE 3: CHECK LIST: What must the calculator have?
- input 2 values (2 input elements)
- select mathematical operation 
- when the submit (= button) is clicked, capture this input, bundle it up as an object,a nd send this object to the server via a POST 
- 'C' button to clear input fields
- server should be able to handles addition, subtraction, multiplication, and division
- send back the okay,l do a GEt requeset after the POST to get the actual calculation
- Display history on the DOM 

## Description
Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).