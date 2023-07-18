import styled from "styled-components";
import { Top10Array } from "../helper/top10svgArray";

const IconContainer = styled.svg`
  fill: ${(props) => props.fill};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Top10 = ({ fill, width, height,viewBox,index }) => {
  return (
    <IconContainer width={width} height={height} viewBox={viewBox} fill={fill}>
      <path
        stroke="#595959"
        strokeLinejoin="square"
        strokeWidth="4"
        d={`${Top10Array[index].path}`}
      ></path>
    </IconContainer>
  );
};

export default Top10;
