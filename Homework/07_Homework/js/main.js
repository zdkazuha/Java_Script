// №1

class Selector {
    constructor(className) {
        this.className = className;
        this.property = []
    }

    addProperty(name, value) {
        this.property.push({ name, value });
    }
    removeProperty(name) {
        for (let i = 0; i < this.styles.length; i++) {
            if (this.styles[i].property === property) {
                this.styles.splice(i, 1);
                break;
            }
        }
    }
    getCSS() {
        let propertyString = '';
        for (let i = 0; i < this.property.length; i++) {
            let property = this.property[i];
            propertyString += `\t${property.name}: ${property.value};\n`;
        }

        return `.${this.className} {\n${propertyString}}`;
    }
}

let wrap = new Selector("wrap");
wrap.addProperty("display", "flex");
console.log(wrap.getCSS());

// №2

class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        let button = document.createElement("button");

        button.style.width = this.width + "px";
        button.style.height = this.height + "px";
        button.textContent = this.text;

        document.body.appendChild(button);
    }
}

let button = new Button(200, 100, "Button");
button.showBtn();

class BootstrapButton extends Button {
    constructor(width, height, text, color = "white") {
        super(width, height, text)
        this.color = color;
    }

    showBtn() {
        let button = document.createElement("button");

        button.style.width = this.width + "px";
        button.style.height = this.height + "px";
        button.style.color = this.color;
        button.textContent = this.text;

        document.body.appendChild(button);
    }
}

let bootstrapButton = new BootstrapButton(200, 100, "Button", "red");
bootstrapButton.showBtn();

// №3

class ExtendetDate extends Date {
    getDate_() {
        let date = new Date();
        console.log(`Число ${date.getDate()}: Mісяц ${date.getMonth() + 1}`);
    }
    hasTheDatePassed(date2) {
        let date1 = new Date();
        return date1 >= date2;
    }
    leapYear(year) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
            return true;
        return false
    }
    getNextDate(date) {
        let nextDate = new Date(date);
        nextDate.setDate(date.getDate() + 1);
        return nextDate;
    }
}

let extendetDate = new ExtendetDate();

console.log(extendetDate.hasTheDatePassed(new Date("2025-06-06")));
console.log(extendetDate.hasTheDatePassed(new Date("2025-06-02")));

console.log(extendetDate.leapYear(2000));
console.log(extendetDate.leapYear(2001));

let date = new Date("2025-06-04");
console.log(extendetDate.getNextDate(date).toLocaleDateString());