import styled, { css } from "styled-components";
import EditIcon from "../assets/editIcon";

export const Headings = styled.h1`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  padding:${props=>props.padding}
`;

export const Flex = styled.div`
  display: flex;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

    ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
        
    ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}
    gap:${(props) => props.gap};
    padding:${props=>props.padding}
`;

/* export const FullPage = styled(Flex)`
  width: 100%;
  height: 100%;
  align-items: stretch;
  background-color: ${(props) => `${props.darkBackground ? color.DARK1 : 'inherit'}`};
`; */

export const Error = styled.p`
  width: 80%;
  padding: ${(props) => props.padding};
  color: rgb(241, 108, 20);
  font-size: ${(props) => props.size};
`;

export const BorderButton = styled.button`
  box-sizing: border-box;
  outline: none;
  padding: 0.5rem 1.4rem;
  border: 1px solid #666;
  background: transparent;
  font-size: ${(props) => props.size};
  color: #666;
  cursor: pointer;
  &:hover {
    color: white;
    border: 1px solid white;
  }
`;
export const ConfirmButtons = styled.button`
  outline: none;
  border: none;
  padding: 0.5rem 1.4rem;
  font-size: ${(props) => props.size};
  cursor: pointer;
  &:hover {
    background-color: #e50914;
    color: white;
  }
`;

export const Icon = styled(EditIcon)`
  position: relative;
`;
export const IconBox = styled.div`
  ${(props) =>
    props.edit &&
    css`
      background-color: black;
      border-radius: 50%;
      transform: translate(30%, 200%);
      cursor: pointer;
    `}
  ${(props) =>
    props.manage &&
    css`
      transform: translateY(180%);
    `}
  position: absolute;
`;

export const Images = styled.img`
  height: ${(props) => props.height};
  border-radius: 5px;
  box-sizing: ${(props) => props.box};
  opacity: ${(props) => props.opacity};
  &:hover {
    ${(props) =>
      props.hover &&
      css`
        border: 2px solid white;
        cursor: pointer;
      `}
  }
`;


export const Main=styled.div`
  width: ${props=>props.width};
  height:${props=>props.height};
  margin:auto;
  position: ${props=>props.position};
`
export const PlayButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  color: black;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  gap: 4px;
  font-weight: 500;
  display: flex;
  outline: none;
  border: none;
  align-items: center;
`;
/* #46d369 */


export const Rating = styled.span`
  color: #46d369;
  font-weight: 600;
`;

export const Adult = styled.span`
  padding: 1px 5px 1px 5px;
  border: 1px solid grey;
  color: white;
`;
export const NonAdult = styled.span`
  padding: 1px 5px 1px 5px;
  border: 1px solid grey;
  color: white;
`;
export const MovieLength = styled.span`
  color: white;
  font-weight: 500;
`;

export const ReleaseYear = styled.span`
  font-weight: 500;
  color: white;
  padding:${props=>props.padding}
`;

export const HoverButtons = styled.button`
  border-radius: 50%;
  background-color: hsla(0, 0%, 8%, 0.5);
  padding: 7px;
  outline: none;
  border: none;
  border: 2px solid grey;
  min-width: 37px;
  max-height: 37px;
  cursor: pointer;
  &:hover {
    border: 2px solid white;
    background-color: hsla(0, 0%, 8%, 0.7);
  }
`;

export const Wrapper=styled.div`
position: relative;
min-height: 100vh;
max-width: 92%;
margin: auto;
`
