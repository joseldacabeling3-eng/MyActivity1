

let movies = [
    "Avengers: Endgame",
    "Spider-Man",
    "The Notebook",
    "Frozen",
    "Harry Potter"
];

function showMovies() {
    console.log("My Movie List:");

    for (let i = 0; i < movies.length; i++) {
        console.log((i + 1) + ". " + movies[i]);
    }
}

showMovies();