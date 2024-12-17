let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you seen ?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you seen ?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastfilm = prompt('What film have you seen last time ?', "");
        let rate = +prompt("What rate do you give to this film ?", "");
        if ((lastfilm && rate) != null && (lastfilm && rate) != '' && lastfilm.length < 50) {
            personalMovieDB.movies[lastfilm] = rate;
            console.log("done");
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonaLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You've seen not much films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are classic viewer");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are cinema man");
    } else {
        console.log("Error happened");
    }
}

detectPersonaLevel();

function showMyDb(a) {
    if (a.private == false) {
        console.log(a);
    }
    else {
        console.log('Account is private');
    }
}
showMyDb(personalMovieDB);

function favouriteGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt('What is your favourite genre');
        personalMovieDB.genres[i - 1] = genre;
    }
}

favouriteGenres();


console.log(personalMovieDB.movies);
console.log(personalMovieDB.count);
console.log(personalMovieDB.genres);









// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result = result + "*";
//     }
//     result = result + "\n";
//     // console.log(i);
//     // console.log(result);
// }

// console.log(result);

//**********************PYRAMID*************************** */

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

//**********************PYRAMID*************************** */


// while (star < 11) {
//     result = result + "*"
//     star++;
//     result += "\n";
// }
// console.log(result);



// function firstTask() {
//     let num = 5;
//     while (num <= 10) {
//         console.log(num)
//         num++;
//     }
// }
// firstTask();

// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         if (i == 13) break;
//         console.log(i);
//     }
// }
// secondTask();

// function thirdTask() {
//     for (let i = 1; i <= 10; i++) {
//         if (i % 2 == 0) {
//             console.log(i)
//         }
//         // console.log(i);
//     }
// }
// thirdTask();

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num = 2;
// while (num <= 16) {
//     if (num % 2 != 0) {
//         console.log(num);
//     }
//     num++;
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 0; i <= 5; i++) {
//         arrayOfNumbers[i] = i + 5;
//     }
//     console.log(arrayOfNumbers);

//     // Не трогаем
//     return arrayOfNumbers;
// }

// fifthTask();

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i]
//     }
//     console.log(arr);
//     console.log(result);


//     // Не трогаем
//     return result;
// }

// firstTask();

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] == "number") {
//             data[i] *= 2;
//         } else if (typeof data[i] == "string") {
//             data[i] = data[i] + " - done";
//         }
//         // console.log(typeof data[i]);
//     }
//     console.log(data);
//     // Не трогаем
//     return data;
// }

// secondTask();


// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[data.length - (i + 1)];
//     }
//     console.log(result);

//     // Не трогаем
//     return result;
// }

// thirdTask();

// function sayHello(name) {
//     return "Hello," + name;
// }
// console.log(sayHello('Alex'));

// function returnNeighboringNumbers(num) {
//     let arr = [];
//     arr[0] = num - 1;
//     arr[1] = num;
//     arr[2] = num + 1;
//     return arr;
// }

// console.log(returnNeighboringNumbers(0));

// function getMathResult(a, b) {
//     if (typeof b != "number" || b == 0 || b < 0) {
//         return a;
//     }
//     let res = '';
//     let num = 0;
//     for (let i = 0; i < b; i++) {
//         num = num + a
//         if (b - i == 1) {
//             res = res + num;
//         } else {
//             res = res + num + "---";
//         }
//     }
//     return res
// }

// console.log(getMathResult(4, 5));