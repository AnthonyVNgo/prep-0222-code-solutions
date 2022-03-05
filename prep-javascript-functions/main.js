function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

// convertHoursToMinutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutesFromHours = convertHoursToMinutes(2);
console.log(minutesFromHours);

// getGreeting
function getGreeting(name) {
  return 'Hello ' + name;
}

var name = 'World';
console.log(getGreeting(name));

// addAndMultiplyBy5
function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var result1 = addAndMultiplyBy5(10, 5);
console.log(result1);

// multiplyAndDivideBy5
function multiplyAndDivideBy5(x, y) {
  return x * y / 5;
}

var result2 = multiplyAndDivideBy5(35, 10);
console.log(result2);

// subtractTwoNumbers
function subtractTwoNumbers(x, y) {
  return x - y;
}

var difference = subtractTwoNumbers(22, 7);
console.log(difference);

// getCircleCircumference
function getCircleCircumference(r) {
  return 2 * 3.1415914 * r;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

// getFullName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

// cube
function cube(number) {
  return number * number * number;
}

var cubed = cube(5);
console.log(cubed);
