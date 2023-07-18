import styled from 'styled-components'

export const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: hsla(0, 0%, 8%, 0.9);
  z-index: 990;
`;
export const CloseIconContainer = styled.div`
  position: absolute;
  color: white;
  font-size: 2.5rem;
  top: 8%;
  left: 3%;
  z-index: 2;
  cursor: pointer;
`;

export const TrailerVideoContainer = styled.div`
  position: relative;
  z-index: -1;
`;