const form = document.form

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
})

var fName = document.form.firstName
var lName = document.form.lastName
var age = document.form.age
var submit = document.form.submit
var gender = document.form.gender
var city = document.form.city

function getSelected() {
    var restrictions = document.form.restrictions
    var checkedBox = []
    for (let i = 0; i < restrictions.length; i++) {
        if (restrictions[i].checked) {
        checkedBox.push(restrictions[i].value)
        }
    }
    return checkedBox
}

submit.addEventListener('click', function() {
    alert('First Name: ' + fName.value + '\n' +
         'Last Name: ' + lName.value + '\n' + 'Age: ' + age.value + '\n' + 'Gender: ' + gender.value + '\n' + 'Location: ' + city.value + '\n' + 'Dietary Restrictions: ' + getSelected(name))

    fName.value = ''
    lName.value = ''
    age.value = ''
    gender[0].checked = false
    gender[1].checked = false
    city.selectedIndex= -1
    var restrictions = document.form.restrictions
        for (let i = 0 ; i < restrictions.length; i++) {
            restrictions[i].checked = false
        }
})