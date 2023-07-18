import styled from "styled-components";
import * as Global from "../globalStyles";

export const AccListTitle = styled(Global.Flex)`
  width: 100%;
  cursor: pointer;
  background-color: #303030;
  padding: 1.4rem 2rem;
  border-top: 10px solid black;
  font-size: 1.7rem;
  color: white;
`;

export const AccListButtonContainer = styled.li`
  list-style: none;
  display: flex;
  width: 55%;
  margin: auto;
`;

export const AccListDescription = styled.div`
  color: white;
  width: 55%;
  margin: auto;
  font-size: 1.7rem;
  background-color: #303030;
`;

export const AccListPara = styled.p`
  padding: 1.4rem 2rem;
  border-top: 2px solid black;
`;
