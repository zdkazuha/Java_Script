//document.body.style.backgroundColor = "pink";

// - one line
/* - more lines */

// number
// string
// boolean
// null
// undefined
// object
// symbol

// var, let, const

// console.log(number)
// var number = 12;
// console.log(number);
// let number = 12;
// const PI = 3.14
// console.log(PI);
// PI = 4555;


// let number = 12;
// let line = "Hello World"
// let flag = true;
// let zero = null;
// let un = undefined;
// let obj = {
//     name: "NoneName"
// }

// console.log(typeof (number), number);
// console.log(typeof (line), line);
// console.log(typeof (flag), flag);
// console.log(typeof (zero), zero);
// console.log(typeof (un), un);
// console.log(typeof (obj), obj);


// alert("Hello");
// let res = confirm("Allow cookies")
// res ? document.body.style.backgroundColor = "green" : document.body.style.backgroundColor = "red";

// let name_ = prompt("Enter your name");
// console.log(name_)
// name_ == null ? console.error("Error name ") : console.log("Hello " + name_);

/*
    *,/,+,-,%,**
*/

// Унарний оператор
// a++, b--, +, -, !

// Бінарний оператор
// a + b

// Тернарний оператор
// a ? b : c

/*
    ()
    ++a, --b
    %, /, *
    +, -
    a--, b++
*/

// let a = 5;
// console.log(a++); // 5
// console.log(a);   // 6

// let a = 5, b = 3, c = 2;
// console.log(a++ + b - --c); //
// --c => = 1
// a + b => 5 + 3 = 8
// 8 - c = 7
// console.log(a);


// > < >= <= == != [===, !==]

// let day = Number(prompt("Enter day"));
// let day = parseInt(prompt("Enter day"));
// let day = parseFloat(prompt("Enter day"));
// let day = +prompt("Enter day");

// if(day === 1)
//     console.log("Monday")
// else if(day === 2)
//     console.log("Tuesday")
// else
//     console.log("Error day")

// || - or
// && - and

// let nubmer = +prompt("Enter number"); // [0,20]
// if (number >= 0 && number <= 20)
//     console.log("OK")
// else
//     console.error("Error")

// let day = +prompt("Enter number");
// switch (day) // [===]
// {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     default:
//         console.log("Error")
//         break;
// }

// let month = +prompt("Enter month")
// switch(month)
// {
//     case 1:
//         case 3:
//             case 5:
//                 case 8:
//                     case 10:
//                         case 12:
//                             console.log("31 days");
//                                 break;
//     case 4:
//         case 6:
//             case 9:
//                 case 11:
//                     console.log("30 days");
//                         break;
//     case 2:
//         let year = +prompt("enter year")
//         let res = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28
//         console.log(res + " days")
//             break;

//     default:
//         console.error("Error number month");
//             break;
// }

// 04.12
// 31 + 28 + 31 + 4

// let day = +prompt("Enter day")
// let month = +promth("Enter month")
// let sum_days = day;

// switch (month - 1) {
//     case 11:
//         sum_days += 30;
//     case 10:
//         sum_days += 31;
//     case 9:
//         sum_days += 30
//     case 8:
//         sum_days += 31
//     case 7:
//         sum_days += 31
//     case 6:
//         sum_days += 30
//     case 5:
//         sum_days += 31
//     case 4:
//         sum_days += 30
//     case 3:
//         sum_days += 31
//     case 2:
//         sum_days += 28
//     case 1:
//         sum_days += 31
// }

// console.log(365 - sum_days)

// +
// -
// flag = true
// !flag => false