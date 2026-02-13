let rectangle = Object.create({}, {
    x1: 
    { 
        value: 1, 
        writable: true, 
        configurable: false 
    },
    y1: 
    { 
        value: 1, 
        writable: true, 
        configurable: false 
    },
    x2: 
    { 
        value: 10, 
        writable: true, 
        configurable: false 
    },
    y2: 
    { 
        value: 10, 
        writable: true, 
        configurable: false 
    },
});

console.log(rectangle);

function taskOne(a) {
    console.log(`Top    Left  :: x:${a.x1}  , y:${a.y1}`);
    console.log(`Bottom Right :: x:${a.x2} , y:${a.y2}`);
}
taskOne(rectangle);

function taskTwo(a) {
    return a.x2 - a.x1;
}
console.log("Width:", taskTwo(rectangle));

function taskThree(a) {
    return a.y2 - a.y1;
}
console.log("Height:", taskThree(rectangle));

function taskFour(a) {
    return taskTwo(a) * taskThree(a);
}
console.log("Area:", taskFour(rectangle));

function taskFife(a) {
    return 2 * (taskTwo(a) + taskThree(a));
}
console.log("Perimeter:", taskFife(rectangle));

function taskSix(a, b) {
    return a.x2 + b;
}
console.log(taskSix(rectangle, 5));

function taskSeven(a, b) {
    return a.y1 + b;
}
console.log(taskSeven(rectangle, 5));

function taskEight(a, b, c) {
    let newX = a.x2 + b;
    let newY = a.y1 + c;
    return { x: newX, y: newY };
}
console.log("taskEight:", taskEight(rectangle, 5, 5));

function taskNine(a, b) {
    let newX1 = a.x1 + b;
    let newX2 = a.x2 + b;
    return { x1: newX1, x2: newX2 };
}
console.log("taskNine:", taskNine(rectangle, 5));

function taskTen(a, b) {
    let newY1 = a.y1 + b;
    let newY2 = a.y2 + b;
    return { y1: newY1, y2: newY2 };
}
console.log("taskTen:", taskTen(rectangle, 5));

function taskTvel(a, b, c) {
    let newRect = {
        x1: a.x1 + b,
        x2: a.x2 + b,
        y1: a.y1 + c,
        y2: a.y2 + c
    };
    return taskTwo(newRect);
}
console.log("taskTvel:", taskTvel(rectangle, 5, 5));

function taskEleven(a, b, c) {
    if (b >= a.x1 && b <= a.x2 && c >= a.y1 && c <= a.y2) 
    {
        return true;
    }
    return false;
}
console.log("taskEleven:", taskEleven(rectangle, 5, 5));
console.log("taskEleven (outside):", taskEleven(rectangle, 15, 15)); 
