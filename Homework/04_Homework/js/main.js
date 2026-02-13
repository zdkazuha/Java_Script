// №1

// class Circle
// {
//     constructor(radius)
//     {
//         this.radius = radius;
//     }
//     get()
//     {
//         return this.radius;
//     }
//     set(radius)
//     {
//         this.radius = radius;
//     }
//     getDiament()
//     {
//         return this.radius * 2;
//     }
//     area()
//     {
//         return Math.PI * this.radius * this.radius
//     }
//     length()
//     {
//         return 2 * Math.PI * this.radius
//     }
// }

// let circle = new Circle(10);

// console.log(circle.get());
// circle.set(12);
// console.log(circle.get());
// console.log(circle.area());
// console.log(circle.getDiament());
// console.log(circle.length());

// №2

class HtmlElement {
    constructor(tagName, isSelfClosing = false) {
        this.tagName = tagName;
        this.isSelfClosing = isSelfClosing;
        this.textContent = '';
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }

    setAttribute(name, value) {
        this.attributes.push({ name, value });
    }

    setStyle(property, value) {
        this.styles.push({ property, value });
    }

    appendChild(element) {
        this.children.push(element);
    }

    prependChild(element) {
        this.children.unshift(element);
    }

    setTextContent(text) {
        this.textContent = `${text}`;
    }

    getHtml() {
        let attrs = '';
        for (let attr of this.attributes) {
            attrs += ` ${attr.name}="${attr.value}"`;
        }

        let styleString = '';
        for (let style of this.styles) {
            styleString += `${style.property}: ${style.value}; `;
        }

        if (styleString) {
            attrs += ` style="${styleString.trim()}"`;
        }

        if (this.isSelfClosing) {
            return `<${this.tagName}${attrs} />`;
        }

        let childrenHtml = this.children.map(child => child.getHtml()).join('\n');

        return `<${this.tagName}${attrs}>\n${this.textContent ? this.textContent + '\n' : ''}${childrenHtml}\n</${this.tagName}>`;
    }
}

function createContentBlock() {
    let div = new HtmlElement("div");
    div.setStyle("width", "300px");
    div.setStyle("margin", "10px");

    let h3 = new HtmlElement("h3");
    h3.setTextContent("What is Lorem Ipsum?");
    div.appendChild(h3);

    let img = new HtmlElement("img", true);
    img.setStyle("width", "100%");
    img.setAttribute("src", "lipsum.jpg");
    img.setAttribute("alt", "Lorem Ipsum");
    div.appendChild(img);

    let p = new HtmlElement("p");
    p.setStyle("text-align", "justify");
    p.setTextContent(`"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`);

    let a = new HtmlElement("a");
    a.setAttribute("href", "https://www.lipsum.com/");
    a.setAttribute("target", "_blank");
    a.setTextContent("More...");
    p.appendChild(a);

    div.appendChild(p);

    return div;
}

let div_1 = new HtmlElement("div");
div_1.setAttribute("id", "wrapper");
div_1.setStyle("display", "flex");

div_1.appendChild(createContentBlock());
div_1.appendChild(createContentBlock());

console.log(div_1.getHtml());
document.writeln(div_1.getHtml());


// №3

class CssClass {
    constructor(className) {
        this.className = className;
        this.styles = [];
    }

    setStyle(property, value) {
        this.styles.push({ property, value });
    }

    removeStyle(property) {
        for (let i = 0; i < this.styles.length; i++) {
            if (this.styles[i].property === property) {
                this.styles.splice(i, 1);
                break;
            }
        }
    }

    getCss() {
        let styleString = '';
        for (let i = 0; i < this.styles.length; i++) {
            let style = this.styles[i];
            styleString += `\t${style.property}: ${style.value};\n`;
        }

        return `.${this.className} {\n${styleString}}`;
    }
}

let wrap = new CssClass("wrap");
wrap.setStyle("display","flex");


let block = new CssClass("block");
block.setStyle("width","100%");
block.setStyle("margin","10px");

let img2 = new CssClass("img");
img2.setStyle("width","100%")

let text = new CssClass("text");
text.setStyle("text-align","justify")

// №4

class HtmlBlock {
    constructor()
    {
        this.styleBlock = new HtmlElement("style");
        this.htmlBlock1 = new HtmlElement("div");
        this.html = [this.styleBlock,this.htmlBlock1];
        this.styles = [];
    }
    cssStyle(...styles)
    {
        let styleString = '';
        for(let i = 0;i < styles.length;i++)
        {
            styleString += styles[i].getCss();
        }
        this.styleBlock.setTextContent(styleString);
    }
    htmlText(HtmlElement)
    {
        this.htmlBlock1.appendChild(HtmlElement);
    }
    get()
    {
        document.writeln(this.styleBlock.getHtml());
        document.writeln(this.htmlBlock1.getHtml());
    }
}

let htmlBlock = new HtmlBlock();
htmlBlock.cssStyle(wrap, block, img2, text);
htmlBlock.html[1].setAttribute("id", "wrapper");
htmlBlock.html[1].setAttribute("class", "wrap");

function createBlock() {
    let div = new HtmlElement("div");
    div.setAttribute("class", "block");

    let h3 = new HtmlElement("h3");
    h3.setTextContent("What is Lorem Ipsum?");
    div.appendChild(h3);

    let img = new HtmlElement("img", true);
    img.setAttribute("class", "img");
    img.setAttribute("src", "lipsum.jpg");
    img.setAttribute("alt", "Lorem Ipsum");
    div.appendChild(img);

    let p = new HtmlElement("p");
    p.setAttribute("class", "text");
    p.setTextContent(`"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`);

    let a = new HtmlElement("a");
    a.setAttribute("href", "https://www.lipsum.com/");
    a.setAttribute("target", "_blank");
    a.setTextContent("More...");

    p.appendChild(a);
    div.appendChild(p);

    return div;
}

htmlBlock.htmlBlock1.appendChild(createBlock());
htmlBlock.htmlBlock1.appendChild(createBlock());

htmlBlock.get();