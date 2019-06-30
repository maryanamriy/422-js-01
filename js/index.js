let greetings = 'Hello';
greetings = greetings + ' World!'


alert (greetings);

const userName = prompt('Enter your name');

alert ('Hello, ' + userName);

const userAge = parseFloat(prompt('Enter yor age'));

const newAge = add(userAge, 1);

alert ('Next year you will be ' + newAge);

// Data types:
// String: 'Hello'
// Number: 1, 3.1415, 1e100, NaN, Infinity
// Boolean: true, false
// undefined
// null
// Object
// Symbol

if (userAge >= 18) {  // > < >= <= == === != !== && ||
    alert ('You are adult');
} else {
    alert ('You are not adult');
}

function add(a, b) { 
    const result = a+b;
    return result;
}