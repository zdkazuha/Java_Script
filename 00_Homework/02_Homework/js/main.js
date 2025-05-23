// №1

// function maxNumber(a,b)
// {
//     if(a == b)
//         return 0
//     else if(a < b)
//         return -1
//     else 
//         return 1
// }

// console.log(maxNumber(3,2))

// №2

// function factorial (a)
// {
//     if(a == 1 || a == 0)
//         return 1;

//     return a * factorial(a-1);
// }

// console.log(factorial(5))

// №3

// function taskThree(a,b,c)
// {
//     a = a * 100
//     b = b * 10
    
//     return a + b + c
// }

// console.log(taskThree(1,2,3))

// №4

// function taskFour(a,b = 0)
// {
//     if(b == 0 )
//     {
//         return 4 * a
//     }
//     else{
//         return a * b
//     }
// }
// console.log(taskFour(10,20))
// console.log(taskFour(10))

// №5

// function taskFife(a)
// {
//     let sum = 0;
//     for(let i = 1; i < a;i++)
//     {
//         if(a % i == 0)
//             sum += i;
//     }
//     if(sum == a)
//         return true
//     else
//         return false
// }

//console.log(taskFife(6))

// №6

// function taskSix(a,b)
// {
//     for(let i = a; i <=b;i++)
//     {
//         if(taskFife(i) == true)
//             console.log(i)
//     }
// }
// taskSix(1,10000);

// №7

// let format = (n) => n < 10 ? `0${n}` : `${n}`

// function taskSeven(a,b = 0,c = 0)
// {
//     console.log(`${format(a)}:${format(b)}:${format(c)}`)
// }

// taskSeven(1,1,1)

// №8

// function taskEight(a,b,c)
// {
//     let second = c 

//     second += (b * 60)
//     second += (a * 3600)

//     return second
// }

// console.log(taskEight(10,10,10))

// №9

// function taskNine(a)
// {
//     let second = a % 60
//     let min = parseInt(a / 60)
//     let hour = parseInt(min / 60)
//     min = min % 60

//     return taskSeven(second,min,hour)
// }

// taskNine(36610)

// №10

// function taskTen(a1,b1,c1,a2,b2,c2)
// {
//     let time1 = taskEight(a1,b1,c1);
//     let time2 = taskEight(a2,b2,c2);

//     let res = time2 - time1

//     taskNine(res)
// }

// taskTen(10,10,10,11,11,11)