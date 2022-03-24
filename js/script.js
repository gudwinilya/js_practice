"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastFilm = prompt("Один из просмотренных фильмов?", " "),
lastFilmRate = prompt("На сколько его оцените", " ");

personalMovieDB.movies[lastFilm] = lastFilmRate;

console.log(personalMovieDB);