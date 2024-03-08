import axios from "axios";

import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL }) => {
  const [movies, setMoives] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMoives(res.data.results);
    });
  }, [fetchURL]);
  //console.log(movies);
  return (
    <>
      <div>
        <h2 className="text-white p-4"> {title} </h2>
        <div className=" relative  items-center group">
          <MdChevronLeft
            className="bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 left-0 cursor-pointer hidden group-hover:block top-[30%] "
            size={25}
          />
          <div
            id={"slider"}
            className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          >
            {movies?.map((item, index) => (
              <MovieList item={item} key={index} />
            ))}
          </div>
          <MdChevronRight
            className="bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 right-0 cursor-pointer hidden group-hover:block top-[30%] "
            size={25}
          />
        </div>
      </div>
    </>
  );
};

export default Row;
