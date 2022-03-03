// this is the main array part brah
var languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log(languages);

// these following vars are your elements
var firstElement = languages[0];
console.log('The first element of the array is ' + firstElement);

var thirdElement = languages[2];
console.log('The first element of the array is ' + thirdElement);

var length = languages.length;
console.log('The length of the array is ' + length);

// var lastElement = languages[5];
var lastElement = languages[languages.length - 1];
console.log('The last element of the array is ' + lastElement);

console.log(languages[6]);

/* why this works
p1. .length property retrieves the length of elements for an array
p2. .length property ~use zero based indexing
p3. each element has an index that corresponds to its position in the array
p4. arrays use zero based indexing, meaning the first element's index = 0
p5. we use .dot or [bracket] notation to access element indexes
p6. The .length property is always one more than the highest array index.

we want to get the last element in the array (postgress, index = 5)

if we use .length on languages (languages.length) -> then we get 6
if we use [bracket] notation [6] for languages (console.log(languages[6])) -> we get undefined (line 19)
we get undefined because languages[6] is attempting to access an element that does not exist based on zero based indexing (p2 p4 p6)
if the length .property is always one more than the highest array index -> we need to subtract by 1 to access/be equal to the last (highest) array index

lastElement = languages[languages.length - 1];
lastElement = languages[6 -1];
lastElement = languages[5];
lastElement = 'postgres'
*/
