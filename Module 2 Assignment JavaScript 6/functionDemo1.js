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

const greet = function(name, year, func) {
    func(name, year);
}

greet('Gustavo', 2023, displayGreetingsWithEmoji);
greet('Lucia', 2023, displayGreetings);

