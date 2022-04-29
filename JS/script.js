const numberOfFilms = +prompt('How many films do you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What is the last films do you watched?', ''),
      b = prompt('Your grade?', ''),
      c = prompt('What is the last films do you watched?', ''),
      d = prompt('Your grade?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

alert(personalMovieDB);
