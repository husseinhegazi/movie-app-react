import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../../store/actions/movieSearchAction";
import "./Search.css";

export default function Search() {
  const { moviesSearch } = useSelector((state) => state.moviesSearch);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm) {
      dispatch(searchMovie(searchTerm));
    }
  }, [searchTerm]);
  const handleOneSubmit = (e) => {
    e.preventDefault();
  };
  const hanldeOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleOneSubmit}>
        <AiOutlineSearch
          fontSize={43}
          color="white"
          style={{
            borderRight: "none",
            marginBottom: "0.2rem",
          }}
        />
        <input
          style={{
            width: "35%",
            padding: "0.5rem ",
            border: "none",
            borderRadius: "1rem",
          }}
          role="combobox"
          placeholder="Search..."
          className="text-muted"
          type="search"
          value={searchTerm}
          onChange={hanldeOnChange}
        />
      </form>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 g-0">
        {moviesSearch.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
}
