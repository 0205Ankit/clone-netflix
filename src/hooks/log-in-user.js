//finding the user which is logged-in in users collection
import {  useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import "../lib/firebase";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../reduxStore/store";

const useLoggedInUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
          dispatch(userSliceActions.setUser(user.uid));
      } else {
        localStorage.removeItem("authUser");
         user&& dispatch(userSliceActions.setUser(null));

      }
    }); 
  }, [dispatch]);

  return null;
};

export default useLoggedInUser;
