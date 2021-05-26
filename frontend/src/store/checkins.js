import { csrfFetch } from './csrf';

// Define Action Types as Constants
const GET_CHECKINS = "checkins/GET_CHECKINS";

// Define Action Creators
const getCheckins = (checkins) => ({
    type: GET_CHECKINS,
    checkins,
  });

// Define Thunks
export const getCheckinsAll = () => async (dispatch) => {
    const res = await csrfFetch('/api/checkins');
    const checkins = await res.json();
    console.log('thunk checkins', checkins);
    if (res.ok) {
      dispatch(getCheckins(checkins));
    }
  };

// Define an initial state
const initialState = {};

// Define a reducer
const checkinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHECKINS:
      const newState = { ...state };
      action.checkins.forEach((checkin) => {
        newState[checkin.id] = checkin;
      });
      return newState;
    default:
      return state;
  }
};

// Export the reducer
export default checkinsReducer;
