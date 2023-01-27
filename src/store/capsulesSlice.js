import { createSlice } from '@reduxjs/toolkit';

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



