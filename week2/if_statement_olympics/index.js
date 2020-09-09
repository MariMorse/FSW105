//Preliminaries
//Question 1
if(5 > 3) {
    console.log("is greater than")
}

//Question 2
if(("cat".length) === 3) {
    console.log("is the length")
}

//Question 3
if("cat" === "dog") {
    console.log("is the same")
} else {
    console.log("not the same")
}


//Bronze Medal
var person = {
    name: "Bobby",
    age: 12
}   

//Question 1
if(person.age >= 18) {
    console.log(person.name + " is old enough")
} else {
    console.log(person.name + " is not old enough")
}

//Question 2
if (person.name.startsWith("B")) {
    console.log(person.name + " can enter (begins with B)")
} else {
    console.log(person.name + " cannot enter (does not begin with B)")
}

//Question 3
if (person.age >= 18 && person.name.startsWith("B")) {
    console.log(person.name + " can enter (begins with B and older than 18)")
} else {
    console.log(person.name + " cannot enter (does not begin with B and/or under 18)")
}

//Silver Medal
//Question 1
if(1 === "1") {
    console.log("strict")
} else if(1 === "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}

//Question 2
if(1 <= 2 && 2 === 4) {
    console.log("yes")
} else {
    console.log("NO")
}