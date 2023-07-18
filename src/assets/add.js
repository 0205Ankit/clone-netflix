import styled from "styled-components";

const IconContainer = styled.svg`
  fill: ${(props) => props.fill};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const AddIcon = ({ fill, width, height }) => {
  return (
    <IconContainer
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"></path>
    </IconContainer>
  );
};

export default AddIcon;
