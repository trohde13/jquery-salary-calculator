console.log('js is loaded');

let employees = [];



$(document).ready(handleReady);


function handleReady(){
    console.log('jquery is ready')

    renderToDom();
    
    //calling function to total annual salaries and return monthly total on DOM
    totalSalary();

    //click listeners
    $('#submitButton').on('click', handleClick);

    //delete button click listener
    $('#employeeList').on('click', "#deleteButton", deleteEmployee);

    

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
                <td><button type="submit" class="btn btn-primary" id="deleteButton">Delete</button></td>
            </tr>`);

        //adds to DOM
        $('#employeeList').append(employeeRow);

        totalSalary();
    }

    

 }; //end renderToDom

 

function handleClick(){
    console.log('clicked submit', employees);

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

function deleteEmployee (){
    console.log('clicked delete');

    $(this).parent().parent().remove();

 
}; //end deleteEmployee

function clearInputs(){
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');

}; //end clearInputs

function totalSalary(){

    let employeeSalaries = 0;
    for(let employee of employees){

        employeeSalaries += Number(employee.annualSalary);
    }

    // return employeeSalaries;

    employeeSalaries = employeeSalaries / 12;
    let totalMonthly = $('#monthlyTotal');
    
   
    totalMonthly.empty();

    
    totalMonthly.append(Math.ceil(employeeSalaries));


    if(employeeSalaries >= 20000){
        $('#monthlyTotal').addClass("overBudget")
        }else if(employeeSalaries >= 20000){
       $('#monthlyTotal').removeClass("underBudget")
    }
    console.log(employeeSalaries);

}; //end totalSalary























console.log('end of file');