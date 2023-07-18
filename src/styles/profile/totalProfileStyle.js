import styled, { css } from "styled-components";
import { Flex, Images } from "../../styles/globalStyles";
import { IoMdAddCircle } from "react-icons/io";


export const Container = styled.div`
  margin-top: ${props=>props.marginTop};

`;

export const Add = styled(Flex)`
  width: 150px;
  height: 150px;
  border-radius: 4px;
`;

export const ProfileContainer = styled(Flex)`
  padding: 2.2rem 0 4rem 0;
  gap: 2rem;
`;
export const AddIcon = styled(IoMdAddCircle)`
  color: grey;
  font-size: 6rem;
  height: 150px;
`;

export const Button = styled(Flex)`
  gap: 0.8rem;
  cursor: pointer;
  &:hover ${Add} {
    background-color: white;
  }
  &:hover ${AddIcon} {
    color: grey;
  }
`;

export const Image = styled.img`
  box-sizing: border-box;
  height: 150px;
  border-radius: 4px;
  ${(props) =>
    props.opaque &&
    css`
      opacity: 0.5;
    `}
`;
export const ProfileName = styled.h4`
  color: #666;
  font-size: 1.2rem;
  font-weight: 500;
  align-self: center;
`;
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  &:hover ${Images} {
    border: 3px solid white;
  }
  &:hover ${ProfileName} {
    color: white;
  }
`;

export const Manage = styled(Flex)``;
