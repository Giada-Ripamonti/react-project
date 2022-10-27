import Card from "./Card";

const SearchResults = ({ searchResult }) => {

  return (
   <div className="flex flex-wrap">
    {searchResult.Search.map((movie) => (
      <Card key={movie.imdbID} movie={movie} />
    ))}
  </div>
);}

export default SearchResults;
