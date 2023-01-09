/* 
|Exercise 1: The World Translator
|--------------------
|Ask the user which language they speak.
|
|Convert the user’s answer to lowercase,
|so that all the user’s inputs will be accepted in the if statement.
|For example “english” or “English” or “ENGlish” ect…”
|
|Create a few conditions :
|If the user speaks French : display “Bonjour”
|If the user speaks English : display “Hello”
|If the user speaks Hebrew : display “Shalom”
|If the user doesn’t speak any of these 3 languages:
|display ‘01110011 01101111 01110010 01110010 01111001’
*/

let lang = prompt("What language do you speak ?");
lang = lang.toLowerCase();

switch(lang){
    case "French":
    case "FRENCH":
    case "french":
        console.log("Bonjour");
    break;
    case "English":
    case "ENGLISH":
    case "english":
        console.log("Hello");
    break;
    case "Hebrew":
    case "HEBREW":
    case "hebrew":
        console.log("Shalom");
    break;
    default: console.log("01110011 01101111 01110010 01110010 01111001");;
}

/* 
|Exercise 2 : The Grade Assigner
|-------------------------------
|Ask the user for their grade.
|If the grade is bigger than 90, console.log “A”
|If the grade is between 80 and 90 (included), console.log “B”
|If the grade is between 70(included) and 80 (included), console.log “C”
|If the grade is lower than 70, console.log “D”
*/
let grade = prompt("Hello, enter your grade");

if(!isNaN(grade)){
    if(grade > 90){
        console.log("Your grade is A");
    }else if(grade > 80 && grade <= 90){
        console.log("Your grade is B");
    }else if(grade >= 70 && grade <= 80){
        console.log("Your grade is C");
    }else if(grade < 70){
        console.log("Your grade is D");
    }
}else{
    alert("Invalid value, refresh to try again");
}

/* 
|Exercise 3 : Verbing
|-------------------------------
|Prompt the user for a string. It must be a verb.
|If the length of the string is at least 3 and the string doesn’t end with “ing”, 
|add ‘ing’ to the end of the string.
|If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
|If the length of the string is less than 3, leave it unchanged.
*/

let verb = prompt("Hello, enter a verb please");
let verbLength = verb.length;
verb = verb.toLowerCase(); 
if(isNaN(verb)){
    if(verbLength >= 3 && !verb.endsWith('ing') ){
        verb = verb+'ing';
        console.log(verb);
    }else if(verbLength >= 3 && verb.endsWith('ing')){
        verb = verb+'ly';
        console.log(verb);
    }else if(verbLength < 3){
        console.log(verb);
    }
}else{
    alert("Invalid value refresh to try again!");
}


