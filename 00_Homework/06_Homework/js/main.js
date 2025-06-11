// №1

function styleLinks() {
    let links = document.querySelectorAll(".Task1 a");
    links.forEach(a => {
        let href = a.getAttribute("href");
        if (href.startsWith("http://") || href.startsWith("https://")) {
            a.style.textDecoration = " dashed underline";
        } else {
            a.style.textDecoration = "none";
        }

    });
}

    styleLinks();

function AddElementA(text) {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.href = text;
    a.textContent = text;

    li.appendChild(a);
    li.appendChild(document.createElement("br"));

    let ul = document.querySelector(".Task1 ul");
    ul.appendChild(li);



    styleLinks();
}

AddElementA("http://test.com");
AddElementA("https://no-style.com");
AddElementA("/local/path");

// №2

document.querySelector(".Task2").addEventListener("click", function (e) {
    if (e.target.tagName === "LI" && e.target.classList.contains("disk") ||e.target.classList.contains("PC")) {
        let ul = e.target.querySelector("ul");
        if (ul) {
            ul.classList.toggle("task2");
        }
    }
});

// №3

let div = document.querySelector(".Task3");
let li = div.querySelectorAll("ol li");

div.addEventListener("contextmenu", e => e.preventDefault());
div.addEventListener("mousedown", function (e) { if (e.shiftKey) {e.preventDefault(); } });

div.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            e.target.style.backgroundColor = e.target.style.backgroundColor === "orange" ? "" : "orange";
        }
        else if (e.shiftKey) {
            e.preventDefault();
            li.forEach(li => li.style.backgroundColor = "");
            let startIndex = [...li].indexOf(e.target);
            for (let i = startIndex; i < li.length; i++) {
                li[i].style.backgroundColor = "orange";
            }
        }
        else {
            li.forEach(li => li.style.backgroundColor = "");
            e.target.style.backgroundColor = "orange";
        }
    }
});

// №4

let table = document.getElementById("Table");
let headers = table.getElementsByTagName("th");

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function () {

    let tbody = table.getElementsByTagName("tbody")[0];
    let trs = tbody.getElementsByTagName("tr");

    let rows = [];
    for (let j = 0; j < trs.length; j++) {
      rows.push(trs[j]);
    }

    rows.sort(function (a, b) {
      let aTds = a.getElementsByTagName("td");
      let bTds = b.getElementsByTagName("td");

      let aText = aTds[i].textContent.trim();
      let bText = bTds[i].textContent.trim();

      if (i === 2) {
        return Number(aText) - Number(bText);
      }

      return aText > bText ? 1 : (aText < bText ? -1 : 0);
    });

    tbody.innerHTML = "";

    for (let q = 0; q < rows.length; q++) {
      tbody.appendChild(rows[q]);
    }
  });
}

// №5

const div_1 = document.querySelector('.Task5_1');
const div_2 = document.querySelector('.Task5_2');

let isResizing = false;

div_2.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isResizing = true;
});

document.addEventListener('mousemove', (e) => {
    if (isResizing) {
        const Top = div_1.getBoundingClientRect().top;

        const newWidth = e.clientX - div_1.offsetLeft;
        const newHeight = e.clientY - Top;

        div_1.style.width = newWidth + 'px';
        div_1.style.height = newHeight + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
});