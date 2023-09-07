import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  //we are getting different movie every time
  //get all Popular movies
  useEffect(() => {
    const getMovies = async () => {
      const data = await axios.get(requests.requestPopular);
      const result = data.data.results;
      setMovies(result);
    };
    getMovies();
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  // console.log(movies);
  // console.log(movie);

  const img_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="w-full h-[550px]">
      <div className="w-full h-full">
        {/* an absolutely positioned element is relative to its parent.
        parent is relative class */}
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        {movie && (
          <img
            className="w-full h-full object-cover bg-no-repeat bg-center bg-cover"
            src={`${img_url}/${movie?.backdrop_path}`}
            alt={`${movie?.title}`}
          />
        )}
        <div className="flex flex-col absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="flex space-x-3 my-4">
            <button className="border bg-gray-300 text-black bordergray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white bordergray-300 py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{`${movie?.overview.slice(
            0,
            150
          )}...`}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
