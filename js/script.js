const numberOfFilms = +prompt("How many films have you seen ?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastfilm = prompt('What film have you seen last time ?', "");
let rate = +prompt("What rate do you give to this film ?", "");
let lastfilm2 = prompt('What film have you seen last time ?', "");
let rate2 = +prompt("What rate do you give to this film ?", "");
rate = +rate;

personalMovieDB.movies[lastfilm] = rate;
personalMovieDB.movies[lastfilm2] = rate2;

console.log(personalMovieDB.movies);


// console.log(movies)