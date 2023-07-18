import { configureStore, createSlice } from "@reduxjs/toolkit";
import { api } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const initialUserState = { user: null };
const initialUserProfileState = {
  data: null,
};
const initialTrailerIdState = { showTrailer:false };
const initialErrorMessageState = { message: null, showError:false };


const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

const userProfileData = createSlice({
  name: "userProfile",
  initialState: initialUserProfileState,
  reducers: {
    setProfileData(state, action) {
      state.data = action.payload;
    },
  },
});

const trailer = createSlice({
  name: "trailer",
  initialState: initialTrailerIdState,
  reducers: {
    setShowTrailer(state,action){
      state.showTrailer=action.payload
    }
  },
});

const errorMessage = createSlice({
  name: "trailerID",
  initialState: initialErrorMessageState,
  reducers: {
    setErrorMessage(state, action) {
      state.message = action.payload; 
    },
    showError(state,action){
      state.showError=action.payload;
    }
  },
});






const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userProfile: userProfileData.reducer,
    trailer:trailer.reducer,
    errorMessage:errorMessage.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);

export const userSliceActions = userSlice.actions;
export const userProfileSiceAction = userProfileData.actions;
export const trailerSliceActions=trailer.actions;
export const errorMessageSliceActions=errorMessage.actions;


export default store;
