// №1

let randomNumber = function () {
    let number = Math.floor(Math.random() * 89) + 10;
    return number;
}

let p_id = document.querySelector("#number");
let btn_1 = document.querySelector(".Task1").lastElementChild;

btn_1.onclick = function () {
    p_id.textContent = randomNumber();
}

// №2

let p_2 = document.querySelector(".Task2").lastElementChild
let btn_2 = document.querySelector(".Task2").firstElementChild;

btn_2.onclick = function () {
    p_2.classList.toggle("text")
}

// №3

let task3 = document.querySelector(".Task3");
let list_p = task3.querySelectorAll("div > p");
let text = task3.querySelector("#text3");

list_p[0].onclick = function () {
    text.textContent = "Lorem1";
};

list_p[1].onclick = function () {
    text.textContent = "Lorem2";
};

list_p[2].onclick = function () {
    text.textContent = "Lorem3";
};