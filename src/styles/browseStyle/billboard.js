import styled from "styled-components";
import { Flex } from "../globalStyles";

export const Div=styled.div`
position: absolute;
top:0;
width: 100vw;
height: 700px;
background: hsla(0, 0%, 8%, 0.7);

`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  min-height: 700px;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Main = styled.section`
  background-image: linear-gradient(0deg, #141414 0, rgba(56, 56, 56, 0));
  position: relative;
  top: 0%;
  z-index: 909;
  width: 100vw;
  height: 700px;
`;
export const ContentContainer = styled(Flex)`
  padding-top: 10rem;
  width: 92%;
  margin: auto;
`;
export const InfoContainer = styled.div`
  width: 500px;
`;
export const Para = styled.div`
  padding-top: 1.5rem;
  font-size: 18px;
  margin-bottom: 2rem;
  color: white;
  font-weight: 500;
  word-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 450px;
  max-height: 123px;
  line-height: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 5;
  -moz-line-clamp: 5;
  -ms-line-clamp: 5;
  line-clamp: 5;
`;
export const ButtonsContainer = styled(Flex)``;
export const ContentPosterImage = styled.img`
  height: 400px;
`;
export const InfoButton = styled.button`
  font-size: 20px;
  font-weight: 500;
  padding: 10px 20px;
  gap: 4px;
  color: white;
  cursor: pointer;
  background-color: rgba(121, 120, 120, 0.404);
  &:hover {
    background-color: rgba(121, 120, 120, 0.7);
  }
  border-radius: 5px;
  display: flex;
  outline: none;
  border: none;
  align-items: center;
`;
