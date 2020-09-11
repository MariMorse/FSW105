console.log("\n***Question 1***")
function sum(num1, num2){
        return num1 + num2
}
var result = sum(20, 13)
console.log(result)

console.log("\n***Question 2***")
function largestOfThree(para1, para2, para3) {
    return Math.max.apply(Math, array);
}

let array = [36, 78, 5];
console.log(largestOfThree(array))

console.log('\n***Question 3***')

function oddOrEven(n){
    if(n % 2 == 0) {
        return "even";
    } else if (n % 2 != 0) {
        return "odd";
    }       
}
var answer = oddOrEven(35);
    console.log(answer);


console.log("\n***Question 4***")

function letterC(param) {
    if (param.length >= 20) {
        return param + param;
    } else {
        //Instructor talked about using math.floor to return only the interger when dividing the length of the string. I found .slice doesn't care about the remainder and is able to handle an odd number of characters without having to code the process.
        var halfway = (param.length / 2)
        return param.slice(0, halfway)
    }
}  

//var str = "Really big string goes here!";
var str = "123456789"

var answer2 = letterC(str);
    console.log(answer2);



console.log("\n***Question Extra Credit***")
/// Note to Instructor: Do not count the extra credit work. This was NOT done by me. I have had some help with the assignments from my boyfriend. For fun, he wanted to do the Extra Credit. This is HIS work. (I don't know anything about JavaScript... Have background in Visual Basic for Applications (Excel) but that is all. -- Derek)

function fibonacciSequence(param) {
    var a = 1
    var b = 0
    var summation = 0   
    for (var i = 1; i <= param; i++) { 
        summation = summation + a
        var temp = a
        var a = a + b
        var b = temp
     }
    return summation
}

n = 3
var fib = fibonacciSequence(n)
console.log(fib)



var alphabet = "abcdefghifjklmnopqrstuvwxyz"
var str = "Bad-ass letter counter program right here!"

function char_counter(str) {
    var high_counter = 0
    var high_letter = ""
    for (var alphabet_position = 0; alphabet_position < alphabet.length; alphabet_position++) {
        var letter = alphabet.charAt(alphabet_position)
        var letter_Count = 0
        for (var position = 0; position < str.length; position++) {
            if (str.charAt(position) == letter) {
                letter_Count += 1
            }
            if (letter_Count > high_counter) {
                var high_letter = letter
                var high_counter = letter_Count
            }
        } 
    }
    response = "The letter '" + high_letter + "' was used " + high_counter + " times."
    return response 
}

console.log(char_counter(str))