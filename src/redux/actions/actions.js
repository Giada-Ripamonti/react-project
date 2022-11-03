export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const SET_USERNAME = 'SET_USERNAME'
export const SET_EMAIL = 'SET_EMAIL'

export const AddToFavAction = (favourite) => ({
  type: ADD_TO_FAV,
  payload: favourite,
});

export const RemoveFavAction = (i) => ({
  type: REMOVE_FAV,
  payload: i,
});

export const SetUsernameAction = (userName) => ({
    type: SET_USERNAME,
    payload: userName,
})

export const SetEmailAction = (userEmail) => ({
    type: SET_EMAIL,
    payload: userEmail,
})