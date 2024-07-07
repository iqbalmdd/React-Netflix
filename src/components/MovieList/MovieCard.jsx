import React from "react";
import "./MovieCard.css";
import Star from "../../assets/images/star.png";

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-mistery-movie-poster-design-template-2ec690d65c22aa12e437d765dbf7e4af_screen.jpg?ts=1680854635"
        alt="movie poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="align-center movie_date_rate">
          <p>07-07-2024</p>
          <p>
            8.0
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vitae
          expedita ipsa, et officiis iure?
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
