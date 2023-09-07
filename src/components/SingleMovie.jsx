import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const SingleMovie = () => {
  const [currMovie, setCurrMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  //use navigate for prev page
  const navigate = useNavigate();

  //get currMovie ID
  const { movieId } = useParams();

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjM5YzJkMGM1ODQxYzc4NGIxOThhNDJmYzVjMGYwYyIsInN1YiI6IjY0ZjljNTFhZGMxY2I0MDBjOGJlYzExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HQLF3oSDrXYnIjHBipg_m7-M3Q3W4m5yG-K4uQkzIzY",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.request(options);
        setCurrMovie(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(currMovie);
  const img_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="w-full h-[100vh] relative">
      {loading ? (
        <div className="flex animate-bounce justify-center items-start text-2xl ">
          Loading
        </div>
      ) : (
        <div>
          <div className="absolute w-full h-full bg-gradient-to-r from-yellow-400"></div>
          <img
            className="w-full h-[100vh] object-cover bg-no-repeat bg-center bg-cover "
            src={`${img_url}/${currMovie?.backdrop_path}`}
            alt={`${currMovie?.title}`}
          />
          <div className="absolute top-20 flex flex-col justify-center items-center left-[15%]  ">
            <p className="hidden md:block bg-green-500 w-fit p-2 font-extrabold text-4xl rounded-xl  ">
              Rating:{currMovie?.vote_average}
            </p>

            <i className="hidden md:block md:mt-10 lg:mt-20 text-pink-300 font-extrabold md:text-3xl lg:text-[70px]">
              {currMovie?.title}
            </i>
            <div className="hidden md:block md:mt-4 text-2xl lg:pt-16 lg:w-[60%] whitespace-wrap text-white/80 font-extrabold font-Lato">
              {currMovie?.overview?.length > 150
                ? currMovie?.overview.slice(0, 150) + "..."
                : currMovie?.overview}
            </div>

            <NavLink
              to={`${currMovie?.homepage}`}
              target="_blank"
              className={
                " hidden md:block text-[40px] mt-16 text-red-200 font-extrabold hover:text-green-300"
              }
            >
              Lets Go?
            </NavLink>
            <div className="hidden md:block text-black font-extrabold">
              {currMovie?.release_date}
            </div>
          </div>
        </div>
      )}
      <div
        className="absolute bottom-0 left-[20%] text-[10px] 
      sm:text-[20px] md:text-[25px] lg:text-[40px] lg:left-[30%]
      font-extrabold text-black/90 animate-bounce"
      >
        {currMovie?.tagline}
      </div>
    </div>
  );
};

export default SingleMovie;
