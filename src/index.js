var _a;
var number = 1;
number = 10;
console.log(number);
var level;
level = 1;
level = "1";
level = true;
level = {};

function render(document) {
  return document;
}

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  return console.log(number / 2);
});

var user = [1, "Steve"];

var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 0)] = "Up";
  Direction[(Direction["Down"] = 1)] = "Down";
  Direction[(Direction["Left"] = 2)] = "Left";
  Direction[(Direction["Right"] = 3)] = "Right";
})(Direction || (Direction = {}));

var go = Direction.Up;
console.log(go);

function calculateTax(income, taxYear) {
  if (taxYear === void 0) {
    taxYear = 2022;
  }

  console.log("Calculating tax for ".concat(taxYear));
  var tax = income * 0.4;
  return tax;
}

var tax = calculateTax(400000);
tax === null || tax === void 0 ? void 0 : tax.toString();

function sum(a, b) {
  return a + b;
}

sum(10, 20);

var employee = {
  id: 1,
  name: "Steve",
  printName: function () {
    console.log(employee.name);
  },
};

employee.printName();

var employee2 = {
  id: 2,
  name: "Steve",
  printName: function () {
    console.log(employee.name);
  },
};

function kgToLbs(weight) {
  //narrowing
  if (typeof weight === "string") return parseInt(weight) * 2.2;
  else return weight * 2.2;
}

kgToLbs(10);
kgToLbs("10");

var uiWidget = {
  drag: function () {
    console.log("dragging");
  },
  drop: function () {
    console.log("dropping");
  },
  resize: function () {
    console.log("resizing");
  },
};

uiWidget.drag();
uiWidget.drop();
uiWidget.resize();

var q = 50;

var d = "Up";

var distance = "mm";

function greet(name) {
  if (name) console.log("Hello ".concat(name));
}

greet(null);
greet(undefined);
greet("Steve");

function getCustomer(id) {
  console.log("Fetching customer ".concat(id));
  return { birthDate: new Date() };
}

var customer = getCustomer(1);
console.log(
  (_a = customer === null || customer === void 0 ? void 0 : customer.birthDate) === null || _a === void 0
    ? void 0
    : _a.getFullYear()
);
