import { useState, useEffect } from "react";
import Card from "./Card";

const Gallery = (props) => {
  const [movies, setMovies] = useState(null);

  const fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=358e84b8&s=" + props.type + "&plot=full"
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setMovies(data);
      } else {
        console.log("FETCH FAILED!");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    if (movies === null) {
      fetchMovies();
    }
  });

  return (
    <div className="py-6 border border-solid border-gray-400 rounded p-3 my-4">
      <h2 className="text-gray-400 text-md font-semibold mb-4">
        {props.title.toUpperCase()}
      </h2>
      <div className="flex overflow-x-scroll ">
        {movies !== null &&
          movies.Search.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
