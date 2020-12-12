console.log('js is loaded');

let employees = [];



$(document).ready(handleReady);


function handleReady(){
    console.log('jquery is ready')

     renderToDom();

    //click listeners
    $('#submitButton').on('click', handleClick);

    $('#employeeList').on('click', '.employee', handleEmployeeClick);

}; //end handleReady

function renderToDom(){

    $('#employeeList').empty();

    for(let employee of employees){

        let employeeRow = $(`
            <tr class="employee">
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
            </tr>`);

        //adds to DOM
        $('employeeList').append(employeeRow);
    }

 }; //end renderToDom

 function handleEmployeeClick(){
     console.log('clicked an Employee');

 }; //end handleEmployeeClick

function handleClick(){
    console.log('clicked submit');

    //adds employee info from inputs to employees array
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
    };
    console.log(newEmployee); //check input in console
    employees.push(newEmployee); //pushes newEmployee object to array

    renderToDom(); //calls renderToDom to run function to append to table

    clearInputs(); //calls clearInputs to clear imput fields on DOM


}; //end handleClick

function clearInputs(){
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');

}; //end clearInputs


























console.log('end of file');