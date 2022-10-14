import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./MovieCard.css";

function MovieCard({ movie }) {
  let imageURL=""
  if(movie.poster_path)
   imageURL=`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;
  else{
imageURL="https://www.w3schools.com/howto/img_avatar.png"
  }
  return (
    <Link to={`/movie-details/${movie.id}`}>
      <Card className="movie-card">
        <Card.Img
          className="movie-img"
          variant="top"
          src={imageURL}
        />
        <Card.Body>
          <Card.Text className="movies-title">{movie.title}</Card.Text>
          {movie.vote_average < 5 ? (
            <div
              style={{
                textAlign: "center",
                fontSize: "17px",
                // border: "1px solid red",
              }}
              className="text-danger"
            >
              {movie.vote_average}{" "}
              <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
            </div>
          ) : movie.vote_average < 8 ? (
            <div
              style={{
                textAlign: "center",
                fontSize: "17px",
                color: "orange",
              }}
            >
              {movie.vote_average}{" "}
              <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                // border: "1px solid green",
              }}
              className="text-success"
            >
              {movie.vote_average}{" "}
              <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
            </div>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
}
export default MovieCard;
