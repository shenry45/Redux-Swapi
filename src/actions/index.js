import axios from 'axios';
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const SUCCESS = 'SUCCESS';
export const FETCHING = 'FETCHING';
export const FAILURE = 'FAILURE';

// our action creator will be a function that returns a function
export const fetchChars = () => dispatch => {
  dispatch({ type: FETCHING, payload: true });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => dispatch({
      type: SUCCESS,
      payload: res.data.results
    }))
    .catch(err => dispatch({ 
      type: FAILURE,
      payload: err.message
    }));
};
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
