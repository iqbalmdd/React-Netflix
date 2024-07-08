import React from "react";
import "./MovieList.css";
import Fire from "../../assets/images/fire.png"
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useState } from "react";

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [filterMovie, setFilterMovie] = useState([])
    const [minRating, setMinRating] = useState(0)

    useEffect(() => {
        fetchMovies()
    } , [])
    
    const fetchMovies = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=48b3b77648c073570cbceeeb6abb0525"
        )
        const data = await response.json()
        setMovies(data.results)
        setFilterMovie(data.results)
    }

    const handleFilter = rate => {
        if (rate === minRating) {
            setMinRating(0)
            setFilterMovie(movies)
        } else {
        setMinRating(rate)
        const filtered = movies.filter(movie => movie.vote_average >= rate)
        setFilterMovie(filtered) }
    }

  return (
    <section className="movie_list">
      <header className="movie_list_header align_center">
        <h2 className="movie_list_heading align_center">
          Popular
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </h2>

        <div className="align_center movie_list_fs">
            <ul className="align_center movie_filter">
                <li className={minRating === 8 ? "movie_filter_item active" : "movie_filter_item" } 
                onClick={() => handleFilter(8)}>8+ star</li>
                <li className={minRating === 7 ? "movie_filter_item active" : "movie_filter_item" } onClick={() => handleFilter(7)}>7+ star</li>
                <li className={minRating === 6 ? "movie_filter_item active" : "movie_filter_item" } onClick={() => handleFilter(6)}>6+ star</li>
            </ul>

            <select name="" id="" className="movie_sorting">
                <option value="">Sort By</option>
                <option value="">Date</option>
                <option value="">Rating</option>
            </select>

            <select name="" id="" className="movie_sorting">
                <option value="">Ascending</option>
                <option value="">Descending</option>
            </select>
        </div>
      </header>

      <div className="movie_cards">
        {
            filterMovie.map(
                movie => <MovieCard key={movie.id} movie={movie} />
                )
        }
      </div>
    </section>
  );
};

export default MovieList;
