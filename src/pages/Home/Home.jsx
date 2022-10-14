import React, { useState, useEffect } from "react";
import MovieCard from "../../component/MovieCard/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import Loader from "../../component/Loader/Loader";
import "./Home.css"


export default function Home() {
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const pageCount = (event) => {
    if (event.target.value === "prev") {
      if (page > 1) setPage(page - 1);
    } else if (event.target.value === "next") {
      if (page < 35438) setPage(page + 1);
    }
  };
  useEffect(() => {
    dispatch(getMovies(page));
    setLoad(false)
  }, [page]);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 g-0">
            {movies?.map((movie, index) => {
              return (
                <div className="col" key={index}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
          <br />
          <br />
          <div className="cont-pages row g-0">
            <button
              className="btn pages-btn col-12 col-md-4"
              onClick={(event) => {
                pageCount(event);
              }}
              value="prev"
            
              disabled={page-1===0?true:false}
              // disabled={true}
            >
              {page-1}
            </button>
            <button className="btn pages-btn col-12 col-md-4 current-page" disabled>{page}</button>
            <button
              className="btn pages-btn col-12 col-md-4"
              onClick={(event) => {
                pageCount(event);
              }}
              value="next"
            >
              {page+1}
            </button>
          </div>
        </>
      )}
    </>
  );
}
