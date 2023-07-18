import styled from 'styled-components'
import { Flex } from '../globalStyles'

export const Card = styled.div`
  cursor: pointer;
  width: 90%;
  margin: auto;
  color: white;
  padding: 2rem 0rem;
  border-bottom: 0.1px solid grey;
`;
export const EpisodeNumber = styled.div`
  font-size: 1.5rem;
`;
export const Image = styled.img`
  height: 100%;
  min-width: 145px;
  border-radius: 4px;
`;
export const Name = styled.h4`
  font-size: 0.9rem;
  padding-bottom: 4px;
`;
export const Rating = styled.span`
  padding-right: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #46d369;
`;
export const Date = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
`;
export const Overview = styled.div`
padding-top: 8px;
  color: grey;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 3;
  -moz-line-clamp: 3;
  -ms-line-clamp: 3;
  line-clamp: 3;
`;
export const Container = styled(Flex)`
  height: 80px;
`;

export const Box=styled.div`
overflow-y: scroll;
max-height:570px ;
`