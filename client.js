console.log('js is loaded');

let employees = [];



$(document).ready(handleReady);


function handleReady(){
    console.log('jquery is ready')

    renderToDOM();

    //click listeners
    $('#submitButton').on('click', handleClick);

}

function renderToDom(){


}

function handleClick(){
    console.log('clicked submit');

}


























console.log('end of file');