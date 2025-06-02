// <!-------------------------------- 1 ------------------------------

let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

red.addEventListener('click',(e)=>{
    document.querySelector("p").style.color = "red";
    alert("red");
    e.stopPropagation();
},false);

green.addEventListener('click',(e)=>{
    document.querySelector("p").style.color = "green";
    alert("green");
    e.stopPropagation();
},false);

blue.addEventListener('click',(e)=>{
    document.querySelector("p").style.color = "blue";
    alert("blue");
    e.stopPropagation();
},false);

// <!-------------------------------- 2 ------------------------------

document.querySelector("a").addEventListener("click",(e)=>{
    e.preventDefault();
});

document.querySelector("button").addEventListener("click",(e)=>{
    e.preventDefault();
});

// document.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// });

// <!-------------------------------- 3 ------------------------------

// let li =  document.querySelectorAll("ul li");
// li.forEach(el=>{
//     el.addEventListener("click",()=>{
//         el.style.backgroundColor = "yellow";
//     });
// });

document.querySelector("ul").addEventListener("click",(e)=>{
    if(e.target.tagName == "LI")
        if(e.target.style.backgroundColor == "")
            e.target.style.backgroundColor = e.target.dataset.color
        else
            e.target.style.backgroundColor = ""
});

// <!-------------------------------- 4 ------------------------------

let div = document.createElement("div");
div.classList.add("block");

let p = document.createElement("p");
p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum, ipsam at cum, ab labore debitis ipsa rem veritatis magnam quidem cupiditate, molestiae eligendi et. Debitis tenetur magni expedita vero natus distinctio asperiores repudiandae at minus laborum! Tempore, in molestias ad ex labore iure, quas sequi perferendis illo sunt consequuntur, maiores quia cumque! Fugit eius voluptatem sit rem hic vero, eveniet temporibus est, explicabo nihil possimus dolorum! Atque pariatur similique iste illo officiis doloremque libero quo illum delectus. Quos quidem aliquid nemo delectus? Iure quos, quisquam et accusamus eligendi modi adipisci facere hic voluptas veniam quo exercitationem molestiae veritatis numquam? ";
p.setAttribute("title","test create element");
div.append(p);

let img = new Image();
img.src = "https://www.google.com/imgres?q=cat&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4d%2FCat_November_2010-1a.jpg%2F960px-Cat_November_2010-1a.jpg&imgrefurl=https%3A%2F%2Fru.m.wikipedia.org%2Fwiki%2F%25D0%25A4%25D0%25B0%25D0%25B9%25D0%25BB%3ACat_November_2010-1a.jpg&docid=q_Uh8GTnBrfpVM&tbnid=qbSS319ZRpsjqM&vet=12ahUKEwjPgpCPy8uNAxVJEBAIHSxvJMcQM3oECBcQAA..i&w=960&h=1282&hcb=2&ved=2ahUKEwjPgpCPy8uNAxVJEBAIHSxvJMcQM3oECBcQAA";
img.style.width = "100%";
div.append(img)

let btn = document.createElement("button");
btn.textContent = "Remove";
div.append(btn);

// document.body.append(div);
// document.body.prepend(div);
document.querySelector(".preventDefault").before(div);
document.querySelector(".preventDefault").after(div);

btn.addEventListener("click",function(){
    this.previousElementSibling.remove();
    this.parentElement.remove();
})