// №1

// let age = prompt("Введіть свій вік")

// if(age >= 0 && age <= 12)
//     console.log("Ви дитина")
// else if (age > 12 && age <= 18)
//     console.log("Ви підліток")
// else if (age > 18 &&  age <= 60)
//     console.log("Ви дорослий")
// else if (age > 60)
//     console.log("Ви пенсионер")
// else
//     console.log("Некоректний вік")

// №2

// let number = prompt("Ведіть число")

// switch(number)
// {
//     case "0":
//         console.log(")")
//         break;
//     case "1":
//         console.log("!")
//         break;
//     case "2":
//         console.log("@")
//         break;
//     case "3":
//         console.log("#")
//         break;
//     case "4":
//         console.log("$")
//         break;
//     case "5":
//         console.log("%")
//         break;
//     case "6":
//         console.log("^")
//         break;
//     case "7":
//         console.log("&")
//         break;
//     case "8":
//         console.log("*")
//         break;
//     case "9":
//         console.log("(")
//         break;
//     default:
//         console.log("Некоректне число")
// }

// №3

// let number = prompt("Введіть трох значне число")

// if(number >= 100 && number <= 999)
// {
//     let one = parseInt(number / 100)
//     number = number % 100
//     let two = parseInt(number / 10)
//     number = number % 10
//     let three = parseInt(number / 1)

//     let res = one + two + three
    
//     console.log(`Сума трох чисел ${res} ${one} ${two} ${three}`)
// }
// else
// {
//     console.log("Число не є коректним введіть трох значне число")
// }

// №4

// let year = prompt("Ведіть рік")

// if(year % 4 == 0 && year % 400 == 0 && year || year % 100 != 0)
// {
//     console.log(`Так ${year} є високосним`)
// }
// else 
// {
//     console.log(`Ні ${year} не є високосним`)
// }

// №5

// let number = prompt("Введіть число")

// let str = number.toString();
// let strReverse = str.split("").reverse().join("");

// if(str == strReverse)
// {
//     console.log("Число є паліндромом")
// }
// else
// {
//     console.log("Число не є паліндромом")
// }

// №6

// let usd = prompt("Введіть суму в долара")

// let currency = prompt("Введіть валюту в яку хочете перевести")

// switch(currency)
// {
//     case"EUR":
//         console.log(`${usd * 0.89}`)
//         break;
//     case"UAN":
//         console.log(`${usd * 7.2}`)
//         break;
//     case"AZN":
//         console.log(`${usd * 1.7}`)
//         break;
//     default:
//         console.log(`курса такої валюти :: ${currency} немає`)
// }

// №7

// let money = prompt("Введіть суму")

// if(money >= 200 && money <= 300)
// {
//     console.log(`Сума до оплати ${money * 0.97}`)
// }
// else if (money >= 300 && money <= 500)
// {
//     console.log(`Сума до оплати ${money * 0.95}`)
// }
// else if (money >= 500)
// {
//     console.log(`Сума до оплати ${money * 0.93}`)
// }
// else
// {
//     console.log(`Сума до оплати ${money}`)
// }

// №8

// let length = prompt("Введіть довжину кола")
// let pCub = prompt("Введіть периметр квадрата")

// let diameter = length / 3.14
// let side = pCub / 4

// if(diameter <= side)
// {
//     console.log("Коло поміститсья")
// }
// else 
// {
//     console.log("Коло не поміститсья")
// }

// №9

// let questionOne = prompt("Якого кольору сонце?\n№1 Зеленого\n№2 Синього\n№3 Жовтого")
// let questionTwo = prompt("Якого кольору трава?\n№1 Зеленого\n№2 Синього\n№3 Жовтого")
// let questionThree = prompt("Якого кольору вода?\n№1 Зеленого\n№2 Синього\n№3 Жовтого")

// let point = 0;

// if(questionOne == "Жовтого")
//     point++
// if(questionTwo == "Зеленого")
//     point++
// if(questionThree == "Синього")
//     point++

// console.log(`Ви набари ${point} балів`)

// №10

// let day   = +prompt("Введіть день")
// let month = +prompt("Введіть місяц")
// let year  = +prompt("Введіть рік")

// let maxDay = 0;

// if(year <= 1)
//     console.log(`Некоректний рік :: ${year}`)
// else if(month <= 1 || month >= 12)
//     console.log(`Некоректний місяц :: ${month}`)

// switch(month)
// {
//     case 1:
//         case 3:
//             case 5:
//                 case 8:
//                     case 10:
//                         case 12:
//                             maxDay = 31;
//                                 break;
//     case 4:
//         case 6:
//             case 9:
//                 case 11:
//                     maxDay = 30;
//                         break;
//     case 2:
//         maxDay = year  % 4 == 0 && year  % 100 != 0 || year  % 400 == 0 ? 29 : 28
//             break;

//     default:
//         console.error("Error number month");
//             break;
// }

// if(day <= 1 || day >= maxDay)
//     console.log(`Некоректний день :: ${day}`)

// day++
// if(day > maxDay)
// {
//     day = 1
//     month++

//     if(month > 12)
//     {
//         month = 1
//         year++
//     }
// }

// console.log(`Слідуючий день :: ${day} ${month} ${year}`)