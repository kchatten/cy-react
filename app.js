let name = "Kyal";

let numVar1 = 1;
let numVar2 = 2;

console.log(numVar1 + numVar2);

let greeting = "Hello";

console.log(greeting, name);

function Add(val1, val2) {
    let result = val1 + val2;
    return result;
}

let numVariable = 42;

if (numVariable < 10) {
    console.log(numVariable, "is less than 10");
} else if (numVariable > 10) {
    console.log(numVariable, "is greater than 10");
} else if (numVariable == 10) {
    console.log(numVariable, "equals 10");
};

let concat = "";
for (let i = 0; i <= 10; i++) {
    concat = concat + i.toString();
    if (i == 10) {
        console.log(concat);
    }
}

function CheckForVowels(string) {
    let stringToCheck = string.toLowerCase();
    let letterToCheck = stringToCheck[0];
    if (/[aeiouy]/.test(letterToCheck)) {
        console.log(string, "starts with a vowel!")
    } else {
        console.log(string, "starts with a consonant!")
    }
}

CheckForVowels("Kookaburra");


array = ["A","B","C","D","E","F"]
for(let i = 0; i < array.length; i++ ){
    console.log(array[i]);
}