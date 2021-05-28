import { csrfFetch } from "./csrf";

// Define Action Types as Constants
const ADD_BAGELSHOP = "bagelshops/ADD_BAGELSHOP";
const GET_BAGELSHOPS = "bagelshops/GET_BAGELSHOPS";
const DELETE_BAGELSHOP = "bagelshops/DELETE_BAGELSHOP";

// Define Action Creators
const getBagelShop = (bagelShops) => ({
  type: GET_BAGELSHOPS,
  bagelShops,
});

const setBagelShop = (bagelShop) => ({
  type: ADD_BAGELSHOP,
  bagelShop,
});

const deleteOneBagelShop = (bagelShopId) => ({
  type: DELETE_BAGELSHOP,
  bagelShopId,
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
  console.log("bagelShop is", bagelShop);

  const response = await csrfFetch("/api/bagelshops/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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

export const updateBagelShop = (bagelShop) => async (dispatch) => {
  const { id, name, address, city, state, zipcode, phone, information } =
    bagelShop;
  console.log("bagelShop is", bagelShop);
  console.log("id is", id);
  console.log("typeOf id is", typeof bagelShop);

  const response = await csrfFetch(`/api/bagelshops/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bagelShop,
      // id,
      // name,
      // address,
      // city,
      // state,
      // zipcode,
      // phone,
      // information,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(setBagelShop(data));
    return response;
  }
};

export const deleteBagelShop = (bagelShopId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bagelshops/delete/${bagelShopId}`, {
    method: "DELETE",
    body: JSON.stringify({
      bagelShopId,
    }),
  });
  dispatch(deleteOneBagelShop(bagelShopId));
  return response;
};

// Define an initial state
const initialState = {};

// Define a reducer
const bagelShopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BAGELSHOP: {
      const newState = { ...state };
      newState[action.bagelShop?.id] = action.bagelShop;
      return newState;
    }
    case GET_BAGELSHOPS:
      const newState = {};
      action.bagelShops?.forEach((bagelShop) => {
        newState[bagelShop?.id] = bagelShop;
      });
      return newState;
    case DELETE_BAGELSHOP: 
      const oldState = {
        ...state
      }
      delete oldState[action.bagelShopId]
      return oldState;
    default:
      return state;
  }
};

// Export the reducer
export default bagelShopsReducer;
