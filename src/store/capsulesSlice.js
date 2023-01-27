import { createSlice } from '@reduxjs/toolkit';
import { getData } from '../utils';


const initialState = {
  loadingAllCapsules: false,
  loadingAllCapsulesFailed: false,
  allCapsules: [],
  loadingCapsuleDetails: false,
  loadingCapsuleDetailsFailed: false,
  selectedCapsule: null
};

export const capsulesSlice = createSlice({
  name: 'capsules',
  initialState: initialState,
  reducers: {

    setAllCapusules: (state, action) => {
      return {
        ...state,
        allCapsules: action.payload,
      }
    },

    setLoadingAllCapsules: (state, action) => {
      return {
        ...state,
        loadingAllCapsules: action.payload,
      }
    },

    setLoadingAllCapsulesFailed: (state, action) => {
      return {
        ...state,
        loadingAllCapsulesFailed: action.payload,
      }
    },

    setSelectedCapsule: (state, action) => {
      return {
        ...state,
        selectedCapsule: action.payload,
      }
    },

    setLoadingCapsuleDetails: (state, action) => {
      return {
        ...state,
        loadingCapsuleDetails: action.payload,
      }
    },

    setLoadingCapsuleDetailsFailed: (state, action) => {
      return {
        ...state,
        loadingCapsuleDetailsFailed: action.payload,
      }
    }
  }
});

// Extract actions from slice
export const {
  setAllCapusules,
  setLoadingAllCapsules,
  setLoadingAllCapsulesFailed,
  setSelectedCapsule,
  setLoadingCapsuleDetails,
  setLoadingCapsuleDetailsFailed
} = capsulesSlice.actions;

export default capsulesSlice.reducer;

// Thunks
export const fetchAllCaspsules = () => async (dispatch) => {
  dispatch(setAllCapusules([]));
  dispatch(setLoadingAllCapsules(true));
  dispatch(setLoadingAllCapsulesFailed(false));
  try {
    const response = await getData('http://localhost/spacex/api/capsules');
    const { data } = response;

    dispatch(setAllCapusules(data));
    dispatch(setLoadingAllCapsules(false));
  } catch (error) {
    dispatch(setLoadingAllCapsules(false));
    dispatch(setLoadingAllCapsulesFailed(true));
  }
};

export const fetchCaspsuleDetails = (capsuleSerial) => async (dispatch, getState) => {
  dispatch(setSelectedCapsule(null));
  dispatch(setLoadingCapsuleDetails(true));
  dispatch(setLoadingCapsuleDetailsFailed(false));
  try {
    const response = await getData(`http://localhost/spacex/api/capsule/${capsuleSerial}`);
    const { data } = response;

    dispatch(setSelectedCapsule(data));
    dispatch(setLoadingCapsuleDetails(false));
  } catch (error) {
    dispatch(setLoadingCapsuleDetails(false));
    dispatch(setLoadingCapsuleDetailsFailed(true));
  }
};

