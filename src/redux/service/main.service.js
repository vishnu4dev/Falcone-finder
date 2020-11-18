import axios from "axios";

import {
  PLANET_API,
  VEHICLE_API,
  FIND_FALCONE_API,
  AUTH_TOKEN_URL,
} from "../../config/ApiConfig";
import { FETCH_VEHICLES, FETCH_PLANETS, FIND_FALCONE,  AUTH_TOKEN} from "../action/actionType";
import {showToast} from "../action/toastActions";

export const fetchAuthToken = () => dispatch => {
    axios.defaults.headers.common["Accept"] = "application/json";
    axios
      .post(AUTH_TOKEN_URL)
      .then(res => {
        dispatch({ type: AUTH_TOKEN, payload: res.data.token });
      })
      .catch(err => dispatch(showToast(err.message)));
  };

export const fetchPlanets = () => dispatch => {
  axios
    .get(PLANET_API)
    .then(res => {
      dispatch({
        type: FETCH_PLANETS,
        payload: res.data
      });
    })
    .catch(err => dispatch(showToast(err.message)));
};

export const fetchVehicles = () => dispatch => {
  axios
    .get(VEHICLE_API)
    .then(res => {
      dispatch({
        type: FETCH_VEHICLES,
        payload: res.data
      });
    })
    .catch(err => dispatch(showToast(err.message)));
};

export const findFalcone = (requestPayload, history) => dispatch => {
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios
    .post(FIND_FALCONE_API, requestPayload)
    .then(res => {
      dispatch({
        type: FIND_FALCONE,
        payload: res.data
      });
      history.push("/report");
    })
    .catch(err => dispatch(showToast(err.message)));
};

