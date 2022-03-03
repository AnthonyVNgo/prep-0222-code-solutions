var person = {
  firstName: 'John',
  lastName: 'Doe',
  hobby: 'Sleeping'
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.hobby);
console.log(person);

var firstName = person.firstName;
var lastName = person.lastName;
var fullName = firstName + ' ' + lastName;
// var fullName = person.firstName + ' ' + person.lastName;

console.log(fullName);
console.log("The person's full name is: " + fullName);

person.job = 'baller';
console.log("The person's current job is: " + person.job);

person.previousJob = '~baller';
console.log("The person's previous job was: " + person.previousJob);
