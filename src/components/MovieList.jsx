import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const MovieList = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[150px] inline-block p-2 relative">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
        alt=""
      />
      <div className=" absolute top-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="text-xs flex justify-center items-center w-full h-full">
          {item?.title}
        </p>
        <p className="text-white">
          {like ? (
            <FaHeart className="absolute top-4" />
          ) : (
            <FaRegHeart className="absolute top-4 left-3" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieList;
