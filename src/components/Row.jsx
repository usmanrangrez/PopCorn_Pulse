import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import MovieComp from "./MovieComp";

const Row = ({ title, fetchUrl }) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  //for slider
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(fetchUrl);
      const result = data.data.results;
      setUpcomingMovies(result);
      // console.log(result);
    };

    fetchData();
  }, [fetchUrl]);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 500;
  };
  const slideRight = () => {
    sliderRef.current.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="font-bold md:text-xl p-4">{title}</h2>
      <div className=" flex relative items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        {/* scrolling behavior may depend on the CSS properties, such as overflow and white-space */}
        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {upcomingMovies &&
            upcomingMovies.map((movie, id) => {
              return <MovieComp key={id} movie={movie} />;
            })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
