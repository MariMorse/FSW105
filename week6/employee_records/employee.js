const employees = [

]

function Employee(Name, Job_Title, Salary, Status = "Full Time") {
    this.Name = Name;
    this.Job_Title = Job_Title;
    this.Salary = Salary;
    this.Status = Status;
};

var employee1 = new Employee("Clark Kent", "Reporter", "$35,860/yearly")
var employee2 = new Employee("Bruce Banner", "Research Scientist", "$97,000/yearly")
var employee3 = new Employee("Anna Nicole", "Escort", "$7,000/nightly", "Contract")

let printString = (employee1.value, employee2.value, employee3.value)

console.log(printString);