import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center my-8">
      <h1 className="text-white my-2">Oh no!</h1>
      <h2 className="text-gray-300">#404 Page not found</h2>
      <script src="https://cdn.lordicon.com/qjzruarw.js"></script>

      <button
        type="button"
        className=" inline-block my-4 px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
};

export default PageNotFound;
