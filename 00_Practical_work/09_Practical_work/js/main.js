let p = document.querySelector(".Task1 p");

function updateTime() {
    let date = new Date().toLocaleTimeString();
    p.textContent = date;
}

updateTime(); 

setTimeout(() => {
    location.reload(); 
}, 1000);
