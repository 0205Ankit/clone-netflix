import { useSelector,useDispatch} from "react-redux";
import { MdErrorOutline } from "react-icons/md";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { errorMessageSliceActions } from "../../reduxStore/store";
const ErrorHeading = styled.h3`
  display: flex;
  align-items: center;
  opacity: ${(props) => props.opacity};
  font-size: 1.2rem;
  padding: 10px 20px;
  background-color: white;
  position: fixed;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
  font-weight: 500;
  gap: 10px;
  transition: opacity 0.3s ease-in;
  z-index: 999999;
`;

const Message = () => {
    const dispatch=useDispatch()
  const message = useSelector((state) => state.errorMessage.message);
  const showError = useSelector((state) => state.errorMessage.showError);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    if (showError) {
      setOpacity(1);
      setTimeout(() => {
        setOpacity(0);
        dispatch(errorMessageSliceActions.showError(false))
      }, 3000);
    }
  }, [showError,dispatch]);


  return (
    <ErrorHeading opacity={opacity}>
      <MdErrorOutline />
      {message}
    </ErrorHeading>
  );
};
export default Message;
