import { useDispatch, useSelector } from "react-redux";
import { RemoveFavAction } from "../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const Fav = () => {
  const FavList = useSelector((state) => state.fav.content);
  const loginName = useSelector((state) => state.user.name);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {loginName ? (
        <>
          <h1 className="text-white text-2xl text-center my-5">
            Hi {loginName}, your favourite movies are: {FavList.length}
          </h1>
          <div className="flex flex-col">
            {FavList.length > 0 ? (
              FavList.map((movie, i) => (
                <div key={i}>
                  <div className="flex my-4 justify-between my-2 pb-1 mx-auto border-solid border-b border-white">
                    <h2 className="text-white text-xl mr-8">{movie.Title}</h2>
                    <button
                      type="button"
                      className=" inline-block p-1 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => {
                        dispatch(RemoveFavAction(i));
                      }}
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
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-xl">
                There are no favourite movies =(
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center mt-8">
          <h1 className="text-white text-2xl text-center my-5">
            Log in to see your favourite movies!
          </h1>

          <button
            type="button"
            className="w-60 self-center inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      )}
    </>
  );
};

export default Fav;
