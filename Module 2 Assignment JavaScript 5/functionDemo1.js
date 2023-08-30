// Name: Gustavo Olgiati
// Student ID: 1216388953
// Date: 8/30/2023

var age = 10; // int
var salary = 15.00; // double

const displayGreetings = function(name, year) {
    console.log(`Happy new year ${year} ${name}`)
}

const displayGreetingsWithEmoji = function(name, year) {
    console.log(`:) :) Happy new year ${year} ${name} :) :)`)
}

var greet = {};

if (age > 10) {
    greet = displayGreetings;
} else {
    greet = displayGreetingsWithEmoji;
}

greet('Gustavo', 2023);

