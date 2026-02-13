// №1

// class PrintMachine 
// {
//     constructor(fontSize, color, fontFamily) {
//         this.fontSize = fontSize;
//         this.color = color;
//         this.fontFamily = fontFamily;
//     }

//     print(a) {
//         document.writeln(`<p style="font-size:${this.fontSize}px; font-family:${this.fontFamily}; color:${this.color};">${a}</p>`);
//     }
// }

// let printMachine = new PrintMachine(22,"yellow","Arial");
// printMachine.print("Привіт");

// №2

class News
{
    constructor(header,text,teg,date)
    {
        this.header = header;
        this.text  = text;
        this.teg = teg;
        this.date = new Date(date);
    }
    Date_(a,b)
    {
        a = new Date(a)
        b = new Date(b)

        return (a - b) / 86400000;

        
    }
    print()
    {
        let dateNow = new Date();
        let dateFun = this.Date_(dateNow,this.date);
        document.writeln(`
            <h2>${this.header}</h2>
            <p>${dateFun <= 1 ? "Сьогодні" : dateFun <= 7 ? "N днів тому" : this.date.toLocaleDateString()}</p>
            <p style = "width:400px">${this.text}</p> 
            <p>${this.teg}</p>
        `)
    }
}

let news = new News("Заголовок","Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст ","#text #lorem","2025-5-15");
news.print();

// №3

class NewsFeed {
    constructor(...newsList) {
        this.news = [...newsList];
    }

    get()
    {
        return this.news.length;
    }
    printAll() {
        for (let news of this.news) {
            news.print();
        }
    }
    add(a)
    {
        this.news.push(a);
    }
    pop()
    {
        this.news.pop();
    }
    sortDate() 
    {
        this.news.sort((a, b) => b.date - a.date);
    }
    
    searchTeg(teg)
    {
        let list = new NewsFeed();
        this.news.forEach(element => {
            if (element.teg === teg) {
                list.add(element);
            }
        });
        return list;
    }
}

let news1 = new News(
    "Заголовок 1",
    "Текст новини 1...",
    "#новини #події",
    "2025-05-25"
);
let news2 = new News(
    "Заголовок 2",
    "Інша новина...",
    "#важливо #суспільство",
    "2025-05-20"
);

let newsFeed = new NewsFeed(news1, news2);
console.log(newsFeed.get());
newsFeed.add(news1);
newsFeed.printAll();

document.writeln(`<br>`)

newsFeed.pop();
newsFeed.printAll();

document.writeln(`<br>`)

newsFeed.sortDate();
newsFeed.printAll();

document.writeln(`<br>`)

let l = newsFeed.searchTeg("#важливо #суспільство")
l.printAll();