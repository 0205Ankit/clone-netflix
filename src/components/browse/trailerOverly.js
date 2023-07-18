import { CloseIconContainer,Main,TrailerVideoContainer } from "../../styles/browseStyle/trailerOverlayStyle";
import YouTube from "react-youtube";
import { useDispatch } from "react-redux";
import { trailerSliceActions } from "../../reduxStore/store";
import useWindowDimensions from "../../hooks/useWindowDimension-hook";
import {BsArrowLeft} from 'react-icons/bs';
import { useNavigate } from "react-router";



const TrailerOverlay = (props) => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  const onReady = (e) => {
    if(!props.id) return
    e.target.playVideo();
  };
  const closeTrailerHandler = () => {
    dispatch(trailerSliceActions.setShowTrailer(false));
     navigate(-1)
  };

  return (
    <Main>
      <CloseIconContainer onClick={closeTrailerHandler}>
        <BsArrowLeft />
      </CloseIconContainer>
      <TrailerVideoContainer>
        <YouTube videoId={props.id} opts={opts} onReady={onReady} />
      </TrailerVideoContainer>
    </Main>
  );
};

export default TrailerOverlay;
