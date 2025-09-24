import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="movie-details">
        <h2>{movie.Title} ({movie.Year})</h2>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>Language:</strong> {movie.Language}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
      </div>
    </div>
  );
}

export default MovieCard;
