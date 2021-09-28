$( document ).ready( onReady );

function onReady(){

    $( `#addButton` ).on( `click`, setoperation );
    $( `#subtractButton` ).on( `click`, setoperation );
    $( `#multiplyButton` ).on( `click`, setoperation );
    $( `#divideButton` ).on( `click`, setoperation );
    $( `#equalsButton` ).on( `click`, doMath );
    $( `#clearButton` ).on( `click`, clearFields );
}

// global
let operation = '+' ;

// functions
function setoperation(){
    if( $( this).attr( `id` )==='addButton'){
        operation='+';
    }
    if( $( this).attr( `id` )==='subtractButton'){
        operation='-';
    }
    if( $( this).attr( `id` )==='multiplyButton'){
        operation='*';
    }
    if( $( this).attr( `id` )==='divideButton'){
        operation='/';
    }
   
}


function doMath(){
    if( $( `#inputOne`).val()==='' || $( `#inputTwo`).val()==='' ){
        alert( 'You are missing a number! Please try again.');
    }
    else if ( operation === 'monkey' ){
        alert( 'Please select an operation.');
    }
    else{
    let objectToSend ={
        inputOne: $( `#inputOne` ).val(),
        operationToSend: operation,
        inputTwo: $( `#inputTwo` ).val()
    };
    console.log( objectToSend);
    
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: objectToSend
    }).then( function ( response ){
        console.log( 'calculation sent to server' );
    }).catch( function ( err ){
        alert( 'error! See console for details!' )});
    };
    displayAnswer();
    displayHistory();
}

function clearFields(){
    $( `#inputOne`).val('');
    operation = '+';
    $( `#inputTwo`).val('');
}

function displayHistory(){
    
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then( function( response ){
        let el = $( `#history` );
        el.empty();
        for( let i=0; i<response.length; i++){
        el.append(
            `<li> ${response[i].inputOne} ${response[i].operationToSend} ${response[i].inputTwo} ${response[i].equals} ${response[i].answer} </li>`
        )}
    }).catch( function ( err ){
        alert( 'Not able to display history, check back later :/')
    })
}

function displayAnswer(){
    $.ajax({
        method: 'GET',
        url: '/answer'
    }).then( function( response ){
        let displayAnswer = $( `#answer` );
        displayAnswer.empty();
        displayAnswer.append(
            `<h2>${ response }</h2>`);
    }).catch( function ( err ){
        alert( 'Unable to display answer, try again soon!')
    })
}