"use strict";




// console.log(4/2);



// const person = "Alex";



// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };


// алерт
// alert('Hello Zheka!')



// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Are you 18 years old?", "Yes or Not");
// console.log(typeof(answer));



// const answer = +prompt("Are you 18 years old?", "18");
// console.log(answer + 5);



// const answers = [];
// answers[0] = prompt("What's your name?", "");
// answers[1] = prompt("What's your surname?", "");
// answers[2] = prompt("How old are you?", "");

// console.log(typeof(answers));



// const category = 'toys';
// console.log(`htttp://site.com/${category}/5`);



// const user = "Ivan";
// alert(`Hello, ${user}!`);


// префиксная форма
// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);


// префиксная форма
// let incr = 10,
//     decr = 10;

// console.log(++incr);
// console.log(--decr);



// console.log(5%2);


// равенство
// console.log(2*4 == 8);

// равенство (это строка но значения совпадают)
// console.log(2*4 === '8');

// строгое равенство
// console.log(2*4 === 8);


// оператор "и"
// const isChecked = true,
//         isClose = false;

// console.log(isChecked && isClose);


// оператор "или"
// const isChecked = true,
//         isClose = false;

// console.log(isChecked || isClose);



// оператор "отрицания"
// const isChecked = false,
//         isClose = false;

// console.log(isChecked || !isClose);



// порядок выполнения операторов
//false
// console.log(2+2*2 === '8');         


const numberOfFilms = +prompt ('Сколько фильмов вы смотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false

};
const a = prompt('Один из последних просмотренных вами фильмов?', ''),
b = prompt('На сколько вы оцените его?', ''),
c = prompt('Один из последних просмотренных вами фильмов?', ''),
d = prompt('На сколько вы оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);