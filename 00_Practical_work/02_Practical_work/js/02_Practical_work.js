// №1

// let maxNumber = (a,b) => a > b ? a : b

// console.log(maxNumber(1,2))

// №2

// let powerNumber = (a,b) => a ** b
// console.log(powerNumber(5,2))

// №3

// function calculate (a,b,c)
// {
//     switch(c)
//     {
//         case "*":
//             return a * b
//         case "-":
//             return a - b
//         case "/":
//             return a / b
//         case "+":
//             return a + b
//         default:
//             return 0;
//     }
// }

// console.log(calculate(2,4,"+"))
// console.log(calculate(2,4,"*"))
// console.log(calculate(2,4,"/"))
// console.log(calculate(2,4,"-"))

// №4

// function isPrime(a)
// {
//    let counter = 0;
//      for(let i = 0; i <= a;i++)
//      {
//          if(a % i == 0)
//              counter++;
//      }

//      if(counter == 2)
//         return true
//     else
//         return false
// }
// console.log(isPrime(5))

// №5

// function multiplicationTable(a)
// {
//     if(a < 2 || a > 9)
//         return

//     document.write(`Таблиця множення на ${a}`)

//     for(let i = 1; i <= 10; i++)
//         document.write(`<p>${a} * ${i} = ${a * i}</p>`)
// }

// multiplicationTable(10);

// №6

// function division(a,b)
// {
//     let res_division = a / b
//     let res_parse_int = parseInt(res_division)
//     let res = res_division - res_parse_int
//     return res * 2

// }

// console.log(division(2,5))