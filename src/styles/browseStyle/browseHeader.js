import styled,{css} from "styled-components";
import { Link,NavLink } from "react-router-dom";
import { Flex } from "../globalStyles";
import { MdArrowDropDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import {IoMdClose} from 'react-icons/io'


export const NavBar = styled(Flex)`
  width: 92%;
  margin: auto;
  background: transparent;
  height: 70px;  
  `;
export const Section = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  transition: all 0.2s ease-in;
  width: 100vw;
  height: fit-content;
  ${(props) =>
    props.sticky &&
    css`
      background-color: rgb(20, 20, 20);
    `}
`;

export const LinksContainer = styled(Flex)``;

export const NavLinks = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 14px;
  font-weight: 250;
  transition: all 0.2s;
  &:hover {
    opacity: 0.7;
  }
  &.active {
    font-weight: 500;
  }
`;
export const Info = styled(Flex)``;
export const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SearchBox = styled.div``;
export const SearchInput = styled(Flex)`
  border: 1px solid white;
  padding: 4px 10px;
`;

export const Input = styled.input`
  color: white;
  outline: none;
  border: none;
  color: white;
  background: transparent;
  width: 100%;
  font-size: 14px;
  padding-right: 3rem;
  padding-left: 8px;
`;

export const ProfileInfo = styled(Flex)`
  margin-left: 1.5rem;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 35px;
  border-radius: 5px;
`;
export const SearchIcon = styled(IoSearchSharp)`
  color: white;
  font-size: 24px;
`;

export const CloseIcon = styled(IoMdClose)`
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

export const DownArrow = styled(MdArrowDropDown)`
  color: white;
  font-size: 24px;
`;

export const ExtraProfiles = styled.div`
  background-color: red;
  position: absolute;
  top: 100%;
  right: 4%;
  font-size: 14px;
  background: hsla(0, 0%, 8%, 0.9);
  border: 0.1px solid gray;
  &:before {
    content: "";
    position: relative;
    display: block;
    width: 60px;
    height: 20px;
    background-color: transparent;
    top: 0;
    right: -65%;
    transform: translateY(-90%);
  }
`;

export const ProfileLinks = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-right: 4rem;
  padding-left: 0.5rem;
  text-decoration: none;
  padding-bottom: 10px;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;
export const EditIconContainer = styled(Flex)`
  width: 35px;
`;
export const SignOutLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  padding: 14px 0 14px 0;
  border-top: 0.1px solid grey ;
  &:hover {
    text-decoration: underline;
  }
`;
