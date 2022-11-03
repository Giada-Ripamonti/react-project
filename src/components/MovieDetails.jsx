import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const params = useParams();

  const FetchDetails = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?i=" +
          params.movieID +
          "&apikey=358e84b8&plot=full"
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        setMovieDetails(data);
        console.log(data);
        console.log(movieDetails);
      } else {
        console.log("fetch error");
      }
    } catch (error) {
      console.log("error: " + error);
    }
  };

  useEffect(() => {
    FetchDetails();
  }, [params.movieID]);

  return (
    <>
      {movieDetails && (
        <div className="flex mt-10">
          <div className="w-60 h-96 text-center">
            <img
              className="rounded-t-lg min-h-full max-w-full"
              src={movieDetails.Poster}
              alt={movieDetails.Title}
            />

            <button
              type="button"
              className="my-10 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              ADD TO FAV
            </button>
          </div>
          <div className="w-4/6 mx-8">
            <h1 className="text-white text-2xl">{movieDetails.Title}</h1>
            <div className="my-4">
              <p className="text-gray-300 text-sm">
                Released: {movieDetails.Year}
              </p>
              <p className="text-gray-300 text-sm">
                Runtime: {movieDetails.Runtime}
              </p>
              <p className="text-gray-300 text-sm">
                Genre: {movieDetails.Genre}
              </p>
            </div>

            <div className="my-4">
              <p className="text-gray-400 text-sm">
                Director: {movieDetails.Director}
              </p>
              <p className="text-gray-400 text-sm">
                Writer: {movieDetails.Writer}
              </p>
              <p className="text-gray-400 text-sm">
                Actors: {movieDetails.Actors}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-white text-xl my-2">Plot</h2>
              <p className="text-gray-400 text-md">{movieDetails.Plot}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
