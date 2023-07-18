import TrailerOverlay from "../components/browse/trailerOverly";
import { useSearchParams } from "react-router-dom";

const ShowTrailer = () => {
  const [params] = useSearchParams();
  const id = params.get('showId')
  
  return <TrailerOverlay id={id} />;
};

export default ShowTrailer;
