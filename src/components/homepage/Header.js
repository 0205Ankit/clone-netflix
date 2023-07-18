import Logo from "../../assets/Logo";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate} from "react-router-dom";
import {
  HeaderSection,
  HeaderFlex,
  HeaderInfo,
  HeaderHeading,
  HeaderSubtitle,
  HeaderPara,
  HeaderStyledLink,
  HeaderButton,
} from "../../styles/homepage/HeaderStyle";


const Header = () => {
  const navigate = useNavigate();

  const buttonSubmitHandler = () => {
   navigate('/sign-up')
  };

  return (
    <HeaderSection>
      <HeaderFlex spaceBetween>
        <Logo />
        <HeaderStyledLink to="/login" className="signIn">
          Sign In
        </HeaderStyledLink>
      </HeaderFlex>
      <HeaderInfo alignCenter column>
        <HeaderHeading size={"3.2rem"}>
          Unlimited movies, TV shows and more
        </HeaderHeading>
        <HeaderSubtitle>Watch anywhere. Cancel anytime</HeaderSubtitle>
        <HeaderPara>
          Ready to watch? Enter your email to create or restart your membership
        </HeaderPara>
        <HeaderButton onClick={buttonSubmitHandler}>
          Get Started <IoIosArrowForward />
        </HeaderButton>
      </HeaderInfo>
    </HeaderSection>
  );
};
export default Header;
