import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MovieComp = ({ movie }) => {
  const img_url = "https://image.tmdb.org/t/p/w500";
  //for button clicked favourites
  const [like, setLike] = useState(false);
  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px]  lg:w-[280px] inline-block cursor-pointer p-2 relative ">
        <img
          className="w-full h-auto block"
          src={`${img_url}/${movie?.backdrop_path}`}
          alt={`${movie?.title}`}
        />
        <div className="absolute top-0 left-0 w-full  h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="whitespace-normal text-xs md:text-sm lg:text-lg flex justify-center items-center h-full text-center">
            {movie?.title}
          </p>
          <NavLink
            to={`/${movie.id}`}
            className="absolute bottom-2 right-4 text-3xl font-bold md:font-extrabold hover:text-red-400"
          >
            !
          </NavLink>
          <div
            onClick={() => setLike(!like)}
            className="absolute top-4 left-4 text-gray-300"
          >
            {like ? <FaHeart /> : <FaRegHeart color="red" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieComp;
