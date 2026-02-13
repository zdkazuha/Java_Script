

// let rectacngle = {
//     wigth:200,
//     height:100,
//     bagroundColor:"blue",
//     border:"solid"
// }
// let ellipse = {
//     wigth:200,
//     height:100,
//     bagroundColor:"blue",
//     border:"solid",
//     borderRadius:"50%"
// }
// let circle = {
//     wigth:200,
//     height:200,
//     bagroundColor:"blue",
//     border:"solid",
//     borderRadius:"50%",
// }

class RootFigure {
    #name;
    constructor(width, height, id, bg_color, color = "black") {
        this.width = width;
        this.height = height;
        this.id = id;
        this.bg_color = bg_color;
        this.color = color;
        this.style_figure = `width:${this.width}px; height:${this.height}px; background-color:${this.bg_color}; color:${this.color}; border:solid 3px; display:flex; justify-content:center; align-items:center; padding:10px;`;
    }

    set(value) {
        this.#name = value.trim().length < 1 ? "Figure" : value.trim();
    }

    create() {
        document.write(`<div id="${this.id}" style="${this.style_figure}">${this.#name}</div>`);
    }

    getColor() {
        return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    }

    generateColor() {
        document.getElementById(`${this.id}`).style.backgroundColor = this.getColor();
    }
}

class Rectangle extends RootFigure {
    constructor(width, height, id, bg_color, color = "black") {
        super(width, height, id, bg_color, color);
    }
}

class Circle extends Rectangle {
    constructor(diameter, id, bg_color, color = "black") {
        super(diameter, diameter, id, bg_color, color);
        this.style_figure += "border-radius:50%;";
    }
}

// Створення фігур
let figure = new RootFigure(100, 200, "figure", "blue", "white");
figure.set("Figure");
figure.create();

let interval = setInterval(() => {
    figure.generateColor()
},2000);

//clearInterval(interval)
setTimeout(() => {
    clearInterval(interval)
}, 10000)
// figure.generateColor()

let rectangle = new Rectangle(200, 100, "rectangle", "pink");
rectangle.set("Rectangle");
rectangle.create();

let circle = new Circle(200, "circle", "orange");
circle.set("Circle");
circle.create();

setInterval(() => {
    circle.generateColor()
},2000);

