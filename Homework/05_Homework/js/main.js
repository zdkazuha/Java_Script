// №1

document.querySelector(".img_1").addEventListener("click", function(e) {
    let img = document.querySelector(".img_2");
    
    img.style.position = "absolute";

    if(e.clientX < 785 && e.clientX > 130){
        img.style.left = (e.clientX - 25) + "px";
    }
    if(e.clientY < 487 && e.clientY > 130){
        img.style.top = (e.clientY - 25) + "px";
    }

    // img.style.left = (e.clientX - 25) + "px";
    // img.style.top = (e.clientY - 25) + "px";

    console.log(`x${e.clientX} , y${e.clientY}`)

}); 

// №2

let number = 0;

document.querySelector("button").addEventListener("click", () => {
    let p = document.querySelectorAll(".Task2_1 p");

    p.forEach(el => el.style.backgroundColor = "gray");

    if (number === 0)
         p[0].style.backgroundColor = "green";
    else if (number === 1)
         p[1].style.backgroundColor = "orange";
    else if (number === 2)
         p[2].style.backgroundColor = "red";

    number = (number + 1) % 3;
});
