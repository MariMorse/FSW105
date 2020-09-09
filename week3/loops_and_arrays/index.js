var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

console.log("*** Question 1 ***")
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    //console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name)

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("old enough")
    } else {
        console.log("not old enough")
    }
}

console.log("\n*** Question 2 ***")
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.")
    }
}

console.log("\n*** Question 3 ***")
for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    //I chose to use a (Ternary) for this question, because had I of used the if statements, the code would have been 15 lines or more. With this conditional operator brought the code down to 6. This is a lot easier to read and while it took me a little longer to learn and reading about it. It will be a less amount of time at another time when I have it down. 
    
    var status1 = (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) ? "NOT ":"";
    var status2 = (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) ? "don't ":"";
    var pronoun = (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") ? "HIM":"HER";
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + status1 + "old enough to see Mad Max Fury Road, " + status2 + "let " + pronoun + " in.")
}

console.log("\n***Question 4***")
//I deviated from the console.log instrutions a little bit because I wanted to ensure that the code was running properly and not simply reporting random ODDs and EVENs (so I shouldn't see: "99 is EVEN").
for (var i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
       console.log(i + " is EVEN")
    } else {
        console.log(i + " is ODD")
    }
}





//for (x in peopleWhoWantToSeeMadMaxFuryRoad) {
//    console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name)
//    console.log("-" + x)
//}
