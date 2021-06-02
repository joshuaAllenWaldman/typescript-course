/*
Typed Arrays -> Arrays where each element is some consitent type of value;

Why do we care?
  1.) TS can do type inference when extracting values from an array
  2.) TS can prevent us from adding invompatible values to the array
  3.) e can get help with 'map', "forEach", 'reduce'  fucntions
  4.) Flexible - arrays can still contain multiple diffrent types

When to use typed arrays
  -Any time we need to represent a collection of records with some arbitrary sort order
*/

const carMakers = ['ford', 'honda', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// ^^ 1.)
// const car = carMakers[0];

const myCar = carMakers.pop();

// ^^ 2.)
// carMakers.push(100);

// ^^ 3.)
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// ^^ 4.)
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('january 6th');
importantDates.push(new Date());
