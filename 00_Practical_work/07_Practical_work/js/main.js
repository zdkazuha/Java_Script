// № 1

let arr1 = []

for (let i = 0; i < 20; i++) {
    arr1.push(Math.floor(Math.random() * 100));
}

console.log(arr1);

// № 2

for (let i = 1; i < arr1.length; i++) {
    console.log(`[${i}] - ${arr1[i - 1]} `)
}

// № 3

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 7 == 0) {
        console.log(true);
        break;
    }
    else {
        console.log(false);
        break;
    }
}

// № 4

arr1.sort((a, b) => b - a);
console.log(arr1);

// № 5

arr1.fill(0, arr1.length / 2, arr1.length)
console.log(arr1);

// № 6

arr1.splice(0, 3)
console.log(arr1);

// № 7

for (let i = 0; i < arr1.length; i++) {
    let number = arr1[i]
    if (number === arr1[i]) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

// № 8

let arr2 = arr1.slice(1, arr1.length - 1);
console.log(arr2);

// № 9

let counter = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== 0) {
        if (arr1[i] % 2 === 0)
            counter++;
    }
}

console.log(counter);
