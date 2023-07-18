import styled from "styled-components";
import { Flex } from "../globalStyles";
import { IoIosArrowForward } from "react-icons/io";

export const Main = styled.div`
  width: 25%;
  margin: auto;
  /* margin-top: 4rem; */
`;

export const ConfirmContainer = styled(Flex)`
  padding: 3rem 0 3rem 0;
  border-bottom: 0.5px solid #666;
  border-top: 0.5px solid #666;
`;
export const ForwardIcon = styled(IoIosArrowForward)`
  color: white;
  font-size: 16px;
`;
export const ButtonContainer = styled(Flex)`
  padding-top: 3rem;
`;

export const Info = styled.span`
  color: white;
  font-size: 12px;
`;
