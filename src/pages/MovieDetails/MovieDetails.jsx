import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetails } from "../../store/actions/movieDetailsAction";
import "./MovieDetails.css";

function MovieDetails() {
  const params = useParams();
  const { movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  // const [image, setImage] = useState("");
  let image;
  useEffect(() => {
    dispatch(getMovieDetails(params.id));
  }, []);

  return (
    <div>
      <div className="card">
        <h3 className="card-header title">{movie.title}</h3>
        <div className="card-body row g-0 movie">
          <img className="col-12 col-md-6" src={movie.poster_path} />
          <blockquote className="blockquote mb-0 col-12 col-md-6 details">
            <p>
              <span className="side-title">Release Date:</span>{" "}
              {movie.release_date}
            </p>
            <p>
              <span className="side-title"> Overview:</span>
              <br />
              {movie.overview}
            </p>
            <p>
              <span className="side-title"> Budget:</span>{" "}
              {movie.budget === 0 ? "Unknown" : movie.budget}$
            </p>
            <p>
              <span className="side-title"> Revenue:</span>{" "}
              {movie.revenue === 0 ? "Unknown" : movie.revenue}$
            </p>

            <p>
              <span className="side-title">Vote Count:</span> {movie.vote_count}
            </p>
            <footer className="blockquote-footer">
              <span className="side-title"> Rate:</span>
              {"  "}
              {movie.vote_average < 5 ? (
                <span className="text-danger">
                  {movie.vote_average}{" "}
                  <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
                </span>
              ) : movie.vote_average < 8 ? (
                <span
                  style={{
                    fontSize: "20px",
                    color: "orange",
                  }}
                >
                  {movie.vote_average}{" "}
                  <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
                </span>
              ) : (
                <span className="text-success">
                  {movie.vote_average}{" "}
                  <AiFillStar fontSize={22} style={{ marginBottom: "3.5px" }} />
                </span>
              )}
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
export default MovieDetails;
