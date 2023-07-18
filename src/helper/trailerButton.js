import movieTrailer from "movie-trailer";
import { useDispatch } from "react-redux";
import {errorMessageSliceActions } from "../reduxStore/store";
import { useNavigate } from "react-router";

const Trailer = (props) => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const trailerButtonHandler = async (e) => {
    await movieTrailer(
      null,
      {
        id: true,
        tmdbId: props.id,
      },
      (error, response) => {

        if (response === null) {
          dispatch(errorMessageSliceActions.setErrorMessage("Sorry, we can't find any Trailer for this"))
          dispatch(errorMessageSliceActions.showError(true));
        } else {;
          navigate({
            pathname:`/watch`,
            search:`?showId=${response}`
          });

        }
      }
    );
  };

  return (
    // <Link style={{textDecoration:'none'}}to={`/browse/${data}`}>
    < div onClick={trailerButtonHandler}>
    {props.children}
    </div>
    // </Link>
  );
};
export default Trailer;
