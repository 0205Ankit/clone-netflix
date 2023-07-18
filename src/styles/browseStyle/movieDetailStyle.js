import styled from 'styled-components'
import { Flex } from '../globalStyles';
import {IoPlay} from 'react-icons/io5'

export const PlayIcon = styled(IoPlay)`
  font-size: 2.5rem;
`;
export const Icon = styled.div`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  top: 50%;
  border: 1px solid white;
  border-radius: 100%;
  background-color: hsla(0, 0%, 8%, 0.5);
  display: none;
`;
export const Trivia = styled(Flex)`
  padding-top: 1rem;
`;
export const Card = styled.div`
  cursor: pointer;
  background-color: #2f2f2f;
  width: 31.7%;
  min-height: 350px;
  border-radius: 4px;
  overflow: hidden;
  &:hover ${Icon} {
    display: flex;
  }
`;
export const ImageBox = styled.div`
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  max-height: 130px;
  min-height: 130px;
`;
export const OverView = styled.div`
  font-size: 14px;
  overflow: hidden;
  color: #d2d2d2;
  margin: 1rem 0 2rem 0;
  text-overflow: ellipsis;
  width: 100%;
  max-height: 200px;
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
export const Info = styled.div`
  width: 90%;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: white;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding-bottom: 3rem;
`;
export const Section = styled.section`
  width: 90%;
  margin: auto;
  margin-top: 4rem;
`;
