import { useNavigate } from "react-router-dom";

const Card = ({ movie }) => {

  const navigate = useNavigate()

  return (
    <div className="flex justify-center my-3 mr-3 w-60">
      <div className="rounded-lg shadow-lg bg-gray-600 max-w-sm ">
        <div className="w-60 h-96">
          <img
            className="rounded-t-lg min-h-full max-w-full"
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>

        <div className="flex flex-col justify-between p-6 h-60">
          <button
            type="button"
            className="rounded-full self-end bg-transparent p-1 text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </button>
          <h5 className="text-white text-xl font-medium mb-2">{movie.Title}</h5>
          <p className="text-gray-300 text-base mb-4">year: {movie.Year}</p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => navigate('/details/' + movie.imdbID
            )}
          >
            more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
