import React, { useEffect, useState } from "react";
import request from "../Request";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(request.requestTopRated).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className=" w-full h-[550px] bg-gradient-to-r from-black absolute "></div>
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className=" absolute top-[20%] p-4">
            <h2 className="text-4xl"> {movie?.title} </h2>
            <div className="py-4">
              <button className="py-1 px-6 bg-gray-300 text-black">Play</button>
              <button className="py-1 px-3  ml-3 border border-gray-300">
                Watch Later
              </button>
            </div>
            <p className="text-gray-200 py-2 text-sm">
              Released: {movie?.release_date}
            </p>
            <p className="w-full text-sm md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-gray-200 ">
              {" "}
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
