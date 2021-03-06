let apples = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//array
let colors: string[];
colors = ['red', 'green', 'blue'];

let myNumbs: number[] = [1, 2, 3, 4, 5];

let truths: boolean[] = [true, false, true, false];

// classes
// class Car {

// }

// let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 3,
  y: 20,
};

//Function
const logNumber1: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations:

// 1) Funtion that return the 'any' type
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates)

//How to fix any

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, 1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
