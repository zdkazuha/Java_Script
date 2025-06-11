// №1

// let apple = "apple";
// let banana = "banana";
// let orange = "orange";

// const stock = {
//     apple: 10,
//     banana: 0,
//     orange: 5,
// };

// function checkStock(product) {
//     return new Promise((res, rej) => {
//         const quantity = stock[product];

//         if (quantity > 0) {
//             res(`Product ${product} is in stock`);
//         } else {
//             rej(new Error(`Product ${product} is out of stock`));
//         }
//     });
// }

// checkStock(apple)
//     .then((e) => console.log(e))
//     .catch((err) => console.log(err.message));

// checkStock(banana)
//     .then((e) => console.log(e))
//     .catch((err) => console.log(err.message));

// checkStock(orange)
//     .then((e) => console.log(e))
//     .catch((err) => console.log(err.message));

// №2

// function fetchUser(id) {
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             if(id !== 1) {
//                 rej(new Error("User not found"))
//             }
//             else {
//                 res({id: 1, name: 'John Doe'})
//             }
//         })
//     },2000)
// }

// const id_1 = 1;
// const id_2 = 2;

// fetchUser(id_1)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// fetchUser(id_2)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// №3

// function getUser() {
//     return new Promise((res, rej) => {
//         res({ id: 1, name: 'Artem' });
//     });
// }

// function getOrders(userId) {
//     return new Promise((res, rej) => {
//         if (userId === 1) {
//             res([
//                 { id: 1, name: "book" },
//                 { id: 2, name: "phone" }
//             ]);
//         } else {
//             rej(new Error("User not found"));
//         }
//     });
// }

// function getOrdersDetails(orderId) {
//     return new Promise((res, rej) => {
//         if (orderId === 1) {
//             res({ id: 1, name: "book" });
//         } else {
//             rej(new Error("Order not found"));
//         }
//     });
// }

// getUser()
//     .then((res_1) => getOrders(res_1.id))
//         .then((res_2) => getOrdersDetails(res_2[0].id)) 
//             .then((res_3) => console.log("Order details:", res_3))
//     .catch((err) => console.log("Error:", err.message));


// Task 2

let arrColor = [];

function getColor() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

document.querySelector(".addBlock").addEventListener("click", () => {
    let number = document.querySelectorAll(".blocks p");
    if (number.length >= 14) {
        number.forEach(element => {
            element.remove();
        });
        return;
    }

    let p = document.createElement("p");
    p.style.backgroundColor = getColor();
    arrColor.push(p.style.backgroundColor)
    if (arrColor >= 14)
        arrColor = []
    document.querySelector(".blocks").appendChild(p);

    save();
});

function save() {
    localStorage.setItem("colors", JSON.stringify(arrColor));
}

function load() {
    arrColor = JSON.parse(localStorage.getItem("colors")) ?? []

    arrColor.forEach(element => {
        let p = document.createElement("p");
        p.style.backgroundColor = element;
        document.querySelector(".blocks").appendChild(p);
    });
}

load();

//
let color = localStorage.getItem("color") ?? "green";
let number = Number(localStorage.getItem("number") ?? 0);

let p = document.querySelectorAll(".Task2_1 p");
p[number - 1].style.backgroundColor = color;

document.querySelector(".next").addEventListener("click", () => {
    let p = document.querySelectorAll(".Task2_1 p");

    p.forEach(el => el.style.backgroundColor = "gray");

    if (number === 0) {
        color = "green";
        p[0].style.backgroundColor = color;
    } else if (number === 1) {
        color = "orange";
        p[1].style.backgroundColor = color;
    } else if (number === 2) {
        color = "red";
        p[2].style.backgroundColor = color;
    }

    number = (number + 1) % 3;

    localStorage.setItem("color", color);
    localStorage.setItem("number", number);
});
