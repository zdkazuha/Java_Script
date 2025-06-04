const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("car-list");
const clearBtn = document.getElementById("clearAllBtn");

const form = document.forms.carForm;
const modelInput = form.model;
const yearInput = form.year;
const colorInput = form.color;
const speedInput = form.speed;
const producerInput = form.producer;
const isElectroInput = form.electro;

addBtn.onclick = (event) => {
    event.preventDefault();

    let flag = check(modelInput, yearInput, colorInput, speedInput)
    if (!flag)
        return;

    // read form values
    const item = new Car(
        modelInput.value,
        yearInput.value,
        colorInput.value,
        speedInput.value,
        producerInput.value,
        isElectroInput.checked
    );

    tableBody.innerHTML += item.toHTMLRow();
}

clearBtn.onclick = () => {
    tableBody.innerHTML = "";
}

function check(model, year, color, speed) {
    if (!model.value) {
        alert("Будь ласка ведіть модель");
        return false;
    }
    if (+year.value < 2000) {
        alert("Неможна додати машину рік виробнидства якої меньше за 2000 рік");
        return false;
    }
    if (color.value === "#000000") {
        alert("Додайте колір машині");
        return false;
    }

    if (+speed.value < 80) {
        alert("Неможна додати машину швидкість якої меньше за 80 км/год");
        return false;
    }
    return true;
}
