// №1

// let car = Object.create({
//     print:
//         function () {
//             document.write(`<p>Manufacture :: ${this.manufacturer}<br>Model :: ${this.model}<br>Year of manufacture :: ${this.yearOfManufacture}<br>Average Speed ::  ${this.averageSpeed}</p>`)
//         },
//     timeСalculation:
//         function (a) {
//             let fullTime = 0;
//             let res = a / this.averageSpeed
//             let res_ = 0;
//             if(res % 4 == 0)
//                 res_ = res / 4;
//             fullTime = res + res_ 
//             console.log(fullTime.toFixed(2))
//         }
// },{
//     manufacturer:
//     {

//         value: "Ford Motor Company",
//         writable: false,
//         configurable: false,
//         enumerable: true
//     },
//     model:
//     {
//         value: "Ford",
//         writable: false,
//         configurable: false,
//         enumerable: true
//     },
//     yearOfManufacture:
//     {

//         value: 2020,
//         writable: false,
//         configurable: false,
//         enumerable: true
//     },
//     averageSpeed:
//     {

//         value: 120,
//         writable: false,
//         configurable: false,
//         enumerable: true
//     }
// })

// console.log(car);
// car.print();
// car.timeСalculation(350);

// №2

// let fraction1 = Object.create({
//     add:
//     function (a,b)
//     {
//         let num = a.num * b.denum + b.num * a.denum;
//         let denum = a.denum * b.denum;
//         return `numerator :: ${num}\ndenum :: ${denum}`
//     },
//     divide:
//     function (a,b) {
//         let num = a.num * b.denum
//         let denum = a.denum * b.num
//         return `numerator :: ${num}\ndenum :: ${denum}`
//     },
//     multiply:
//     function (a,b) {
//         let num = a.num * b.num
//         let denum = a.denum * b.denum
//         return `numerator :: ${num}\ndenum :: ${denum}`
//     },
//     substract:
//     function(a,b) {
//         let num = a.num * b.denum - b.num * a.denum;
//         let denum = a.denum * b.denum;
//         return `numerator :: ${num}\ndenum :: ${denum}`
//     }
// },{
//     num:
//     {

//         value: 2,
//         writable: true,
//         configurable: true,
//         enumerable: true
//     },
//     denum:
//     {
//         value: 4,
//         writable: true,
//         configurable: true,
//         enumerable: true
//     }
// })

// let fraction2 = Object.create(fraction1);
// fraction2.num = 1;
// fraction2.denum = 3;

// console.log(fraction1.add(fraction1,fraction2))
// console.log(fraction1.divide(fraction1,fraction2))
// console.log(fraction1.multiply(fraction1,fraction2))
// console.log(fraction1.substract(fraction1,fraction2))

// №3

function taskOne(a, b, c) {
    let sec = c;
    sec += b * 60;
    sec += a * 3600;

    return sec;
}

function taskTwo(a) {
    let sec = a % 60;

    let min = parseInt(a / 60)

    let hour = parseInt(min / 60)
    min = parseInt(min % 60)

    return `${hour}:${min}:${sec}`
}

let time = Object.create({
    addSecond:
        function (a) {
            console.log(taskTwo(taskOne(this.hour, this.minutes, this.second + a)))
        },
    addMinutes:
        function (a) {
            console.log(taskTwo(taskOne(this.hour, this.minutes + a, this.second)))

        },
    addHour:
        function (a) {
            console.log(taskTwo(taskOne(this.hour + a, this.minutes, this.second)))
        }
}, {
    second:
    {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    },
    minutes:
    {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    },
    hour:
    {
        value: 30,
        writable: true,
        configurable: true,
        enumerable: true
    }
})

time.addSecond(60)
time.addMinutes(60)
time.addHour(60)