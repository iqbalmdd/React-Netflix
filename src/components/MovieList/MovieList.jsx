import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji, searchFilter }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });
  const [axiosData, setAxiosData] = useState({
    post: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchMoviesAxios();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovie, [sort.by], [sort.order]);
      setFilterMovie(sortedMovies);
    }
  }, [sort]);

  // Using Fetch
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=48b3b77648c073570cbceeeb6abb0525`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovie(data.results);
  };
  // Using axios
  const fetchMoviesAxios = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=48b3b77648c073570cbceeeb6abb0525`
      );
      setMovies(response.data.results);
      setFilterMovie(response.data.results);
      setAxiosData({
        post: movies,
        loading: false,
        error: null,
      });
    } catch (error) {
      setAxiosData({
        post: [],
        loading: false,
        error: error.message,
      });
    }
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovie(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter(
        (movie) => movie.vote_average >= rate && movie.vote_average < rate + 1
      );
      setFilterMovie(filtered);
    }
  };

  // Filter Search
  useEffect(() => {
    if (searchFilter) {
      const filtered = movies.filter(movie => 
        movie.original_title.toLowerCase().includes(searchFilter)
        );
        setFilterMovie(filtered)
    } else {
      setFilterMovie(movies)
    }
  } , [searchFilter,movies])

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header align_center">
        {/* Title */}
        <h2 className="movie_list_heading align_center">
          {title}
          <img className="navbar_emoji" src={emoji} alt={`${emoji} icon`} />
        </h2>
        {/* Filter */}
        <div className="align_center movie_list_fs">
          {/* Rating */}
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          > 
          {/* Sorting by */}
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            {/* Order by */}
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
