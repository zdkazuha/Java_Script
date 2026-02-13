const map = new Map();

map.set("Cheese", 21);
map.set("Bread", 23);
map.set("Eggs", 21);
map.set("Apple", 13);
map.set("Apple", 12);
map.set("Orange", 6);
map.set("Potato", 4);
map.set("Milk", 2);
map.set("Tomato", 2);
map.set("Banana", 1);
map.set("Butter", 1);

  
for (const [key, value] of map) {
    if( value > 3) {
        console.log(`${key} - ${value}`);
    }
}

const sortedMap = new Map(
    [...map.entries()].sort((a, b) => b[1] - a[1])
);

console.log();
  
for (const [key, value] of sortedMap) {
    console.log(`${key} - ${value}`);
}