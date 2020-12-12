console.log('js is loaded');

let employees = [];



$(document).ready(handleReady);


function handleReady(){
    console.log('jquery is ready')

    renderToDOM();

    //click listeners
    $('#submitButton').on('click', handleClick);

}; //end handleReady

function renderToDom(){


}; //end renderToDom

function handleClick(){
    console.log('clicked submit');

    //adds employee info from inputs to employees array
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idIn: $('idIn').val(),
        titleIn: $('titleIn').val(),
        annualSalaryIn: $('annualSalaryIn').val(),
    };
    console.log(newEmployee); //check input in console
    employees.push(newEmployee); //pushes newEmployee object to array

    renderToDom(); //calls renderToDom to run function to append to table


}; //end handleClick


























console.log('end of file');