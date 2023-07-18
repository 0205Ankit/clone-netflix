import styled from "styled-components";
import { Flex } from "../globalStyles";

export const Overlay = styled.section`
  width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background: hsla(0, 0%, 8%, 0.6);
  z-index: 100;
  /* hsla(0, 0%, 8%, 0.5) */
`;

export const Main = styled.div`
  z-index: 10000;
  width: 60%;
  margin: auto;
  position: absolute;
  right: 0%;
  left: 0%;
  top: 2rem;
  border-radius: 6px;
  overflow: hidden;
  background-color: #141414;
`;
export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
export const ContentInfoContainer = styled(Flex)`
  padding-top: 0.5rem;
  width: 90%;
  margin: auto;
`;
export const Info = styled(Flex)`
  color: white;
`;
export const OverView = styled.div`
  color: white;
  line-height: 23px;
  padding-top: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  max-height: 123px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 4;
  -moz-line-clamp: 4;
  -ms-line-clamp: 4;
  line-clamp: 4;
`;
export const BillBoardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;
export const Titlecontainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: -1px;
  padding-left: 2rem;
  padding-bottom: 3rem;
  background: linear-gradient(0deg, #141414 0, rgba(56, 56, 56, 0));
`;
export const InteractContainer = styled(Flex)`
  padding: 1rem 0 1rem 0;
`;

export const Quality = styled.span`
  padding: 0 5px 0 5px;
  border: 1px solid grey;
  border-radius: 2px;
  font-weight: 500;
  font-size: 14px;
`;
export const AdditionalInfo = styled.div`
  color: white;
  font-size: 14px;
  max-width: 200px;
  padding-bottom: 1rem;
  word-break: break-all;
`;

export const Span = styled.span`
  color: grey;
  font-size: 12px;
  font-weight: 400;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  z-index: 1;
  border-radius: 50%;
  background-color: #141414;
  outline: none;
  border: none;
  color: white;
  font-size: 32px;
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 15px;
`;
export const TvSeasonsDetail = styled.div`
  width: 90%;
  position: relative;
  margin: auto;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
`;

export const SeasonDropDown = styled.div`
  color: white;
  display: flex;
  cursor: pointer;
  gap: 0.5rem;
  font-size: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: rgb(36, 36, 36);
  border-radius: 4px;
  border: 1px solid grey;
`;

export const TotalSeasons = styled.div`
  max-height: 200px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  background-color: rgb(36, 36, 36);
  font-size: 0.9rem;
  font-weight: 400;
  border: 0.1px solid grey;
  right: 0;
  top: 100%;
  z-index: 10;
  display: ${(props) => props.display};
`;
export const SeasonNumber = styled.div`
  padding: 0.7rem 1rem;
  color: white;
  &:hover {
    background-color: grey;
  }
`;
