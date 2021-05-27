import { csrfFetch } from "./csrf";

// Define Action Types as Constants
const ADD_BAGELSHOP = "checkins/ADD_BAGELSHOP";
const GET_BAGELSHOPS = "checkins/GET_BAGELSHOPS";

// Define Action Creators
const getBagelShop = (bagelShops) => ({
    type: GET_BAGELSHOPS,
    bagelShops
});

const setBagelShop = (bagelShop) => ({
  type: ADD_BAGELSHOP,
  bagelShop,
});

// Define Thunks
export const getBagelShopsAll = () => async (dispatch) => {
  const res = await csrfFetch("/api/bagelshops");
  const bagelShops = await res.json();
  console.log("thunk bagelShops", bagelShops);
  if (res.ok) {
    dispatch(getBagelShop(bagelShops));
  }
};

export const addBagelShop = (bagelShop) => async (dispatch) => {
  const { name, address, city, state, zipcode, phone, information } = bagelShop;
  console.log('bagelShop is', bagelShop);
  
  const response = await csrfFetch("/api/bagelshops/add", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      address,
      city,
      state,
      zipcode,
      phone,
      information,
    }),
  });
  const data = await response.json();
  dispatch(setBagelShop(data));
  return response;
};

// Define an initial state
const initialState = {};

// Define a reducer
const bagelShopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BAGELSHOP: {
        const newState = {...state};
        newState[action.bagelShop?.id] = action.bagelShop;
        return newState;
    }  
    case GET_BAGELSHOPS:
      const newState = { ...state };
      action.bagelShops.forEach((bagelShop) => {
        newState[bagelShop.id] = bagelShop;
      });
      return newState;
    default:
      return state;
  }
};

// Export the reducer
export default bagelShopsReducer;
