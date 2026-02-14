// -------------------- practice_1 -------------------- 

let city = "Chattogram";
// console.log(city.length);
console.log(city.indexOf("g"));


let division = "Sylhet";
console.log(division.includes("y"));


const nameOfStr = "Rifat";
console.log(nameOfStr.charAt(4));

/* comon way
console.log(nameOfStr.charAt(nameOfStr.length -1 )); */


let language = "javascript";
console.log(language.indexOf("rip"));


// -------------------- practice_2 -------------------- 

const email = "User@Example.Com";
const toLowerConvert = email.toLowerCase();
console.log(toLowerConvert);


const greeting = "hElo WoRLd";
const toLowerConvertPractice = greeting.toLowerCase();
console.log(toLowerConvertPractice);


let languageCheck = "javascript";

if(languageCheck.toLowerCase().includes("script")){
    console.log("Checking Done");
}
else{
    console.log("Not included");
}



const textCheck = "NodeJs";

const fristCharacter = textCheck.charAt(0);
// const fristCharacter = textCheck[0];


if(fristCharacter >= "A" && fristCharacter <= "Z"){
    console.log("First character is uppercase");
}
else{
    console.log("First character is not uppercase");

}



/*
const textCheck = "NodeJs";

if (textCheck[0] === textCheck[0].toUpperCase()) {
    console.log("First character is uppercase");
} else {
    console.log("First character is NOT uppercase");
}
*/

let newPc = 3400;
console.log(newPc);