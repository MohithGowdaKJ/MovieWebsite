import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "fa304d8a"; 

  const fetchMovie = async (title) => {
    try {
      const res = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data);
        setError("");

        console.log("🎬 Movie Details:", data);
      } else {
        setMovie(null);
        setError("Movie not found!");
        console.warn("Movie not found:", title);
      }
    } catch (err) {
      setError("Something went wrong!");
      setMovie(null);
      console.error("Error fetching data:", err);
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>
      <SearchBar onSearch={fetchMovie} />
      {error && <p className="error">{error}</p>}
      {movie && <MovieCard movie={movie} />}
    </div>
  );
}

export default App;
