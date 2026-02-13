// № 1

let arr1 = []

for (let i = 0; i < 20; i++) {
    arr1.push(Math.floor(Math.random() * 100));
}

console.log(arr1);

// № 2

for (let i = 1; i < arr1.length; i++) {
    console.log(`[${i}] - ${arr1[i - 1]} `)
}

// № 3

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 7 == 0) {
//         console.log(true);
//         break;
//     }
//     else {
//         console.log(false);
//         break;
//     }
// }

let arrRes_1 = arr1.filter(a => a % 7 === 0);
if(arrRes_1.length != 0)
    console.log(true);
else 
    console.log(false);

// № 4

arr1.sort((a, b) => b - a);
console.log(arr1);

// № 5

arr1.fill(0, arr1.length / 2, arr1.length)
console.log(arr1);

// № 6

arr1.splice(0, 3)
console.log(arr1);

// № 7

// for (let i = 0; i < arr1.length; i++) {
//     let number = arr1[i]
//     if (number === arr1[i]) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

let arrRes_2 = arr1.filter((a,b) => a === b);
if(arrRes_2.length != 0)
    console.log(true);
else 
    console.log(false);

// № 8

let arr2 = arr1.slice(1, arr1.length - 1);
console.log(arr2);

// № 9

let counter = 0;
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== 0) {
//         if (arr1[i] % 2 === 0)
//             counter++;
//     }
// }

let arrRes_3 = arr1.filter(a => a !== 0 && a % 2 === 0 ? counter++ : counter += 0);
console.log(counter);

// Task 2

// № 10

function Task1 (text){
    let counter = 0;

    for (let char of text) {
      if (char === ' ') 
        counter++;
    }
    
    console.log(counter); 
}

Task1("Привіт !")

// № 11

function Task2(text){
    return text[0].toUpperCase() + text.slice(1);
}

console.log(Task2("привіт !"));

// № 12

function Task3(text){
    let counter = 0;

    if(text[0] !== ' '){
        counter++;
    }

    for(let i = 1; i < text.length;i++){
        if(text[i - 1] !== ' ' && text[i] === ' '){
            counter++;
        }
    }
    
    console.log(counter);
}

Task3("Привіт як ти і що ти робиш")

// № 13

function Task4(text){
    let arr = [];

    if(text[0] !== ' '){
        arr.push(text[0].toUpperCase())
    }

    for(let i = 1; i < text.length;i++){
        if(text[i - 1] !== ' ' && text[i] === ' '){
            arr.push(text[i+1].toUpperCase())
        }
    }

    return arr.join('');
}

console.log(Task4("обєктно оріеннтовне програмування"))

function Task5(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(Task5("aba"))

function Task6(text) {
    let arr = text.split("/");
    return arr.join("");
}

console.log(Task6("Привіт/z/"))

