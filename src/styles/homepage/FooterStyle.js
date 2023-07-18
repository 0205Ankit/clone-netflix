import styled from "styled-components";
import * as Global from '../globalStyles'

export const Footers = styled.footer`
  color: #7e7a7a;
  padding: 4.5rem 0 3rem 0;
  background-color: rgb(0, 0, 0);
`;

export const FooterContainer=styled.div`
  width: 65%;
  margin: auto;`

export const FooterLinks=styled.div`
 display: flex;
  gap: 5rem;`

export const FooterTitle=styled.div`
  padding-bottom: 2.2rem;
`

export const FooterColumn = styled(Global.Flex)`
  font-size: 14px;
  gap: 0.8rem;
  padding-bottom: 3rem;
`;