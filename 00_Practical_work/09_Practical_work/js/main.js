// let p = document.querySelector(".Task1 p");

// function updateTime() {
//     let date = new Date().toLocaleTimeString();
//     p.textContent = date;
// }

// updateTime(); 

// setTimeout(() => {
//     location.reload(); 
// }, 1000);

let arr = [];
let wrappers = document.querySelectorAll('.image-wrapper');

wrappers.forEach(wrapper => {
    let img = wrapper.querySelector('img');
    let overlay = wrapper.querySelector('.overlay');

    overlay.addEventListener('click', () => {
        img.classList.remove('hidden');
        overlay.style.display = 'none';

        arr.push(img);

        if (arr.length === 2) {
            if (arr[0].src === arr[1].src) {
                arr = [];
            } else {
                setTimeout(() => {
                    arr[0].classList.add('hidden');
                    const overlay = arr[0].parentElement.querySelector('.overlay');
                    overlay.style.display = 'flex';


                    arr[1].classList.add('hidden');
                    const overlay2 = arr[1].parentElement.querySelector('.overlay');
                    overlay2.style.display = 'flex';

                    arr = [];
                }, 100);
            }
        }
    });
});
