import Card from "./Card";

const SearchResults = ({ searchResult }) => 
  searchResult.Response === "True" ? (
    <div className="flex flex-wrap">
      {searchResult.Search.map((movie) => (
        <Card key={movie.imdbID} movie={movie} />
      ))}
    </div>
  ) : (
    <div className="text-center">
      <h3 className="text-white my-4">Film not found!</h3>
      <p className="text-gray-400">Sorry, we couldn't find any results...</p>
    </div>
  );

export default SearchResults;
