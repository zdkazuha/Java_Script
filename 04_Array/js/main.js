

// let colors = new Array(10);
// let colors = new Array("red","lime","gold","purple","magenta");
let colors = ["red","lime","gold","purple","magenta"];
//console.log(colors)

// document.write("<ol>");
// for(let i = 0; i < colors.length ;i+=2){
//    document.write(`<li style = "border: solid 3px ${colors[i]}; padding:15px; margin:10px; font-size:18px; font-weight:bold;"> ${colors[i]} </li>`);
// }
// document.write("</ol>");

// document.write("<ol>");
// for(let i = 0; i < colors.length ;i+=2){
//     document.write(`<li style = "border: solid 3px ${colors[i]}; padding:15px; margin:10px; font-size:18px; font-weight:bold;"> ${colors[i]} </li>`);
// }
// document.write("</ol>");

let print = (arr, text = "") => {
 
    if(text.length > 0)
    {
        document.write(`<h2 style = "text-align:center;">${text}</h2>`)
    }
    document.write("<ol>")
    arr.forEach(color => {
        document.write(`<li style = "border: solid 3px ${color}; padding:15px; margin:10px; font-size:18px; font-weight:bold;"> ${color} </li>`)
    });
    document.write("</ol>")
}
 
print(colors,"Origin array")
 
colors.push("blue","yellow");
print(colors,"Push")


colors.push("green","orange");
print(colors,"Unshift")

colors.pop();
print(colors,"Pop")


colors.shift();
print(colors,"Shift")

let color_slice = colors.slice(0,3)
print(color_slice,"Slice")

colors.splice(2,3,"red","green","brown","pink")
print(colors,"Splice")

colors = colors.filter(item => item.length >= 5)
print(colors, "filter")

let lenght_colors = colors.map(item => item.length);
console.log(lenght_colors)

colors = colors.concat(color_slice);

let rest_ = [
    ...color_slice,
    ...colors
]
console.log(rest_)
print(colors,"concat")

// console.log(colors.includes("green",2))
// console.log(colors.indexOf("green",0))
// console.log(colors.lasdIndexOf("gold"))
// console.log(colors.findIndex(item => item == "gold"))

document.write(colors.join(" ! "))

let line = "Lorem ipsum dolor sit amet";
console.log(line);
console.log(line.split("o"))
console.log(colors[22])