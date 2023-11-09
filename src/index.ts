let number: number = 1;
number = 10;
console.log(number);

let level;
level = 1;
level = "1";
level = true;
level = {};

function render(document: string): string {
  return document;
}

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number / 2));

let user: [number, string] = [1, "Steve"];

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let go: Direction = Direction.Up;
console.log(go);

function calculateTax(income: number) {
  let tax = income * 0.4;
  return tax;
}
