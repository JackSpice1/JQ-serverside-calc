//requires
let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );

//uses
app.use( express.static( 'server/public' ));
app.use( bodyParser.urlencoded({ extended: true }));

//globals
const port = 3000;
let history = [];
let answer = [];

//spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
})

//routes
app.get( '/', ( req, res )=>{
    console.log( ' GET route hit' );
})

app.post( '/calculator', ( req, res)=>{
    console.log( 'POST route hit' );
    let equation = req.body;
    console.log( equation ); 
    equation.equals = "=" ;
    // + equation
    if (equation.operationToSend === '+' ){
        equation.answer = Number(equation.inputOne) + Number(equation.inputTwo);
    };
    // - equation
    if (equation.operationToSend === '-' ){
        equation.answer = Number(equation.inputOne) - Number(equation.inputTwo);
    };
    // * equation
    if (equation.operationToSend === '*' ){
        equation.answer = Number(equation.inputOne) * Number(equation.inputTwo);
    };
    // '/' equation
    if (equation.operationToSend === '/' ){
        equation.answer = Number(equation.inputOne) / Number(equation.inputTwo);
    };
    // push and pop from array then push to historical
    answer.pop();
    answer.push( equation.answer );
    history.push( equation );
    // if all is good send back the generic OK 200, 201 = created
    res.sendStatus( 200 );
})

//historical route
app.get( '/history', ( req, res )=>{
    console.log( ' /history route hit' );
    res.send( history );
})

//equation route
app.get( '/answer', ( req, res )=>{
    console.log( ' /answer route hit' );
    res.send( answer );
})