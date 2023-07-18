import styled from 'styled-components'
import { BsPlayFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { BiCheck } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import {motion} from 'framer-motion'
import { Flex } from '../globalStyles';



export const Section = styled.section`
  cursor: pointer;
  position: relative;
  width: 92%;
  margin: auto;
  margin-bottom: 2rem;

  &:hover button {
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

export const Box = styled(Flex)`
  position: relative;
  width: 92%;
  margin: auto;
  margin-bottom: 2rem;
  justify-content: space-between;
`;

export const Div = styled.div`
  position: relative;
  width: 92%;
  margin: auto;
  
  `;

export const DownArrow = styled(IoIosArrowDown)`
  border: 2px solid grey;
  border-radius: 50%;
  color: white;
  background-color: #141414;
  font-size: 1.5rem;
  padding: 5px 5px;
  &:hover {
    border: 2px solid white;
  }
  `;

export const Check = styled(BiCheck)`
color: white;
font-size: 1.5rem;
  `;

export const Add = styled(IoMdAdd)`
color: white;
font-size: 1.5rem;
  `;

export const ContentHover = styled(motion.div)`
  position: absolute;
  top: -50%;
  left: ${(props) =>
    12 * props.left +
    (props.left === 5 ? 16 : 5 * ((props.left === 0 ? 1 : props.left) - 1))}%;
  z-index: 9991;
  /* max-width: 320px;
  min-width: 320px; */
  border-radius: 4px;
  overflow: hidden;
  background-color: #141414;
  transform: ${props=>props.transform};
`;



export const PlayIcon = styled(BsPlayFill)`
  border-radius: 50%;
  background-color: white;
  font-size: 1.5rem;
  padding: 5px 5px;
  border: 2px solid white;
  `;
export const HoverImage = styled.img`
  width: 100%;
  `;
export const Title = styled.span`
  padding: 1rem 1rem 0 1rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  -ms-line-clamp: 2;
  line-clamp: 2;
  `;

  export const Image = styled.img`
  box-sizing: border-box;
    /* min-width: 13.05rem; */
    /* max-width: 12.2rem; */
    /* min-height: 7.5rem; */
    /* max-height:7rem; */
    border-radius: 2px;
    cursor: pointer;
  `;

export const SearchContainer=styled.div`
   display:${props=>props.display};
   position: relative;
   flex-wrap: wrap;
   display: flex;
   gap: 0.4rem;
   width: 100%;
   margin: auto;
   margin-top: 2rem;
   
`

export const NotFoundContainer=styled.div`
color: #fff;
font-size: 0.8rem;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
`
