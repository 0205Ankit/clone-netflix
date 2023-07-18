import styled from "styled-components";
import image from "../../assets/home-bg.jpg";
import { Link } from "react-router-dom";
import * as Global from "../globalStyles";


export const HeaderStyledLink = styled(Link)`
  font-size: 15px;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  background-color: #e50914;
  color: white;
  text-decoration: none;
`;

export const HeaderSection = styled.section`
  background-image: linear-gradient(0deg, transparent 80%, rgba(0, 0, 0, 0.7)),
    radial-gradient(90% 100%, transparent 0, rgba(0, 0, 0, 0.7) 100%),
    url(${image});
  height: 667px;
  border-bottom: 8px solid rgb(31, 31, 31);

  .logo {
    fill: #e50914;
    width: 8rem;
  }
`;

export const HeaderFlex = styled(Global.Flex)`
  padding: 2rem 0rem;
  width: 80%;
  margin: auto;
`;

export const HeaderInfo = styled(Global.Flex)`
  margin: auto;
  color: white;
  text-align: center;
  width: 50%;
`;

export const HeaderHeading = styled(Global.Headings)`
  padding-bottom: 1.4rem;
  padding-top: 9rem;
`;

export const HeaderSubtitle = styled.h4`
  font-size: 1.5rem;
  padding-bottom: 0.7rem;
  font-weight: 400;
`;

export const HeaderPara = styled.p`
  font-weight: 800;
  padding-bottom: 2rem;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
`;