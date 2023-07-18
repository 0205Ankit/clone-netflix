
import { BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useState, Fragment } from "react";
import { AccListButtonContainer, AccListDescription, AccListTitle,AccListPara } from "../../../styles/homepage/AccordianListStyle";

const AccordianList = (props) => {
  const [clicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <Fragment>
      <AccListButtonContainer>
        <AccListTitle alighCenter spaceBetween onClick={clickHandler} >
          {props.header}
          {clicked ? <IoMdClose /> : <BiPlus />}
        </AccListTitle >
      </AccListButtonContainer>
      {clicked && (
        <AccListDescription>
          <AccListPara >{props.body}</AccListPara>
        </AccListDescription>
      )}
    </Fragment>
  );
};

export default AccordianList;
