import styled, {css} from "styled-components";
import { Flex } from "../globalStyles";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export const ArrowBack = styled(MdArrowBackIos)`
  font-size: 2rem;
  cursor: pointer;
  color: white;
  transition: all ease-out 0.1s;
`;
export const ArrowNext = styled(MdArrowForwardIos)`
  font-size: 2rem;
  transition: all ease-out 0.1s;
  color: white;
  cursor: pointer;
`;

export const Main = styled.section`
  width: 90%;
  min-height: fit-content;
  margin: auto;
  position: relative;
`;
export const ArrowContainer = styled(Flex)`
  align-self: center;
`;
export const Arrow = styled(BsArrowLeftShort)`
  color: white;
  font-size: 65px;
  cursor: pointer;
`;
export const ShowsContainer = styled.div`
  padding-bottom: 1rem;
  padding-top: 3rem;
`;

export const IconsContainer = styled(Flex)`
  gap: 20px;
  margin-top: 1rem;
  position: relative;
  &:hover button{
    display: block;
  }

  button {
    display: none;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export const Navbar = styled(Flex)`
  position: sticky;
  top: 115px;
  z-index: 999;
  background: hsla(0, 0%, 8%, 0.9);
  padding-bottom: 2rem;
`;
export const ButtonDiv = styled(Flex)`
  position: absolute;
  cursor: pointer;
  width: 60px;
  height: 100%;
  z-index: 10;
  /* align-items: center; */

  
  ${(props) =>
    props.next &&
    css`
      background: linear-gradient(270deg, #141414 0, hsla(0, 0%, 8%, 0.4));
      transform: translateX(60%);
      right: 0%;
      &:hover ${ArrowNext} {
        font-size: 3rem;
      }
      `}

      ${props=>props.hidePrev&&css`
      display: none;
      `}
      
      ${(props) =>
    props.prev &&
    css`
    background: linear-gradient(90deg, #141414 0, hsla(0, 0%, 8%, 0.4));
    left: 0;
    transform: translateX(-60%);
    &:hover ${ArrowBack} {
      font-size: 3rem;
    }
    `}
    `;
