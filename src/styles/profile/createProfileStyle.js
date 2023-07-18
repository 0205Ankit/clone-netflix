import styled from "styled-components";
import { Flex } from "../../styles/globalStyles";

export const Main = styled.form`
  width: 40%;
  margin: auto;
  margin-top: ${props=>props.marginTop};
`;
export const SubHeading = styled.h5`
  padding-top: 5px;
  color: #666;
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 1rem;
  `;

export const CreateContainer = styled(Flex)`
  border-top: 0.5px solid #666;
  padding: 2rem 0 2rem 0;
  gap: 1rem;
  align-items: center;
  border-bottom: 0.5px solid #666;
`;

export const SubmitSection = styled(Flex)`
  padding-top: 1rem;
  gap: 1.2rem;
`;

export const Input = styled.input`
  background-color: #666;
  padding: 0.6rem 1rem;
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: white;
  &::placeholder {
    color: rgb(133, 133, 133);
  }
`;

