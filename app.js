let api = "https://www.omdbapi.com/?apikey=ca2844db&t=";
let title = document.getElementById("title");
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let collection = document.getElementById("collection");
let desc = document.getElementById("desc");
let awards = document.getElementById("awards");
let writer = document.getElementById("writer");
let ratings = document.getElementById("ratings");
let genre = document.getElementById("genre");
let date = document.getElementById("date");
let poster = document.getElementById("poster");
function searchMovie() {
  let movieName = document.getElementById("movieName");
  let query = api + movieName.value;
  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      // console.log(data);
      title.innerText = data.Title;
      date.innerText = data.Released;
      director.innerText = data.Director;
      awards.innerText = data.Awards;
      actors.innerText = data.Actors;
      desc.innerText = data.Plot;
      genre.innerText = data.Genre;
      collection.innerText = data.BoxOffice;
      ratings.innerText = data.imdbRating;
      writer.innerText = data.Writer;
      poster.src = data.Poster;
    });
}
