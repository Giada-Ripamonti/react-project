import { useState } from "react";
import Gallery from "./Gallery";
import SearchResults from "./SearchResults";
import Spinner from "./Spinner";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=358e84b8&s=" + searchQuery
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        setSearchResult(data);
        console.log(data);
        console.log("this is searchResult " + searchResult);
        console.log("this is searchQuery " + searchQuery);

        setTimeout(() => {
          setSearchQuery("");
          setIsLoading(false);
        }, 1000);
      } else {
        setIsLoading(false);
        setError(true);
      }
    } catch (error) {
      console.log("error:" + error);
      setIsLoading(false);
      setError(true);
      setSearchQuery("");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="my-8 w-1/2 self-center">
          <form
            className="input-group relative flex items-stretch w-full mb-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-500 bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search your favourite movie"
              aria-label="Search"
              aria-describedby="button-addon2"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <button
              className="btn inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase cursor-pointer rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="submit"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {isLoading && searchQuery !== "" && searchResult !== null && <Spinner />}

      {searchResult === null && (
        <div>
          <h1 className="text-white text-xl">Collections</h1>
          <Gallery title="Final Fantasy" type="final%20fantasy" />
          <Gallery title="Harry Potter" type="harry%20potter" />
          <Gallery title="Avengers" type="avengers" />
        </div>
      )}

      {searchResult !== null && <SearchResults searchResult={searchResult} />}

      {error && <p className="text-white">nessun elemento da caricare</p>}
    </>
  );
};

export default HomePage;
