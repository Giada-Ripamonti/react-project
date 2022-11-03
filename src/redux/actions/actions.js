export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const SET_USERNAME = "SET_USERNAME";
export const SET_EMAIL = "SET_EMAIL";
export const GET_MOVIE = "GET_MOVIE";
export const GET_QUERY = "GET_QUERY";

export const AddToFavAction = (favourite) => {
  return (dispatch, getState) => {
  if (
      getState().fav.content.findIndex(
        (movie) => movie.imdbID === favourite.imdbID
      ) === -1
    ) { 
      dispatch({
        type: ADD_TO_FAV,
        payload: favourite,
      });
    }
  };
};

export const RemoveFavAction = (i) => ({
  type: REMOVE_FAV,
  payload: i,
});

export const SetUsernameAction = (userName) => ({
  type: SET_USERNAME,
  payload: userName,
});

export const SetEmailAction = (userEmail) => ({
  type: SET_EMAIL,
  payload: userEmail,
});

export const GetMovieAction = () => {
  return async (dispatch, getState) => {
    if (getState().movie.query !== "") {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=358e84b8&s=" + getState().movie.query 
      );
      console.log(response);
      if (response.ok) {
        let moviesData = await response.json();
        console.log(moviesData);
        dispatch({
          type: GET_MOVIE,
          payload: moviesData,
        });
      } else {
        console.log("FETCH FAILED!");
      }
    } catch (error) {
      console.log("error:" + error);
    }
  };}
};

export const GetQueryAction = (searchQuery) => ({
  dispatch: GET_QUERY,
  payload: searchQuery,
});
