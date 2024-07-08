import React, { useEffect , useState } from "react";
import _ from "lodash"

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({type, title, emoji}) => {
  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order : "asc"
  })

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
        const sortedMovies = _.orderBy(filterMovie, [sort.by] , [sort.order])
        setFilterMovie(sortedMovies)
    }
  }, [sort])

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=48b3b77648c073570cbceeeb6abb0525`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovie(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovie(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovie(filtered);
    }
  };

  const handleSort = e => {
    const {name, value} = e.target;
    setSort(prev => ({...prev, [name]:value}))
  }
  console.log(sort)

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header align_center">
        <h2 className="movie_list_heading align_center">
          {title}
          <img className="navbar_emoji" src={emoji} alt={`${emoji} icon`} />
        </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup minRating={minRating} onRatingClick={handleFilter} ratings={[7,6,5]} />

          <select name="by" id="" onChange={handleSort} value={sort.by} className="movie_sorting">
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select name="order" id="" onChange={handleSort} value={sort.order} className="movie_sorting">
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
