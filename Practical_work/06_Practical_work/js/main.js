// №1

let p_list = document.querySelectorAll("p");

p_list[1].addEventListener("click", () => {
    p_list[0].textContent++;
})
p_list[2].addEventListener("click", () => {
    p_list[0].textContent--;
})

// №2

function getColor() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

document.querySelector("button").addEventListener("click", () => {
    let number = document.querySelectorAll(".blocks p");
    if (number.length >= 14) {
        number.forEach(element => {
            element.remove();
        });
        return;
    }

    let p = document.createElement("p");
    p.style.backgroundColor = getColor();
    document.querySelector(".blocks").appendChild(p);

});

// №3

document.querySelectorAll(".Task3 p").forEach(p => {
    p.style.backgroundColor = p.dataset.color;
});

document.querySelector(".Task3").addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
        let p = document.querySelector("body > p:last-of-type");
        p.style.color = e.target.dataset.color;
    }
});
