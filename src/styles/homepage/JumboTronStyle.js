import styled from "styled-components";
import * as Global from "../globalStyles";

export const JumboContainer = styled.div`
  background-color: black;
  border-bottom: 8px solid rgb(31, 31, 31);

  .para {
    font-size: 1.7rem;
    padding-top: 1rem;
  }

  .image {
    max-width: 100%;
  }
  .figure {
    width: 90%;
  }
  .rowReverse {
    flex-direction: row-reverse;
  }
`;

export const JumboHeadingsContainer = styled(Global.Flex)`
  width: 100%;
`;

export const JumboCard = styled.div`
  display: flex;
  width: 77%;
  margin: auto;
  color: white;
  gap: 2rem;
  padding: 2rem 0;

  flex-direction: ${(props) => props.direction};
`;
