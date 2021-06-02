/*
Tuples - look like an array except the order is critical. 




*/

// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40,
// };

type Drink = [color: string, carbonated: boolean, sugar: number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [horsepower: number, weight: number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
