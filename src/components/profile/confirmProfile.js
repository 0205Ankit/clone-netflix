import {
  BorderButton,
  ConfirmButtons,
  Headings,
  Images,
  Flex,
} from "../../styles/globalStyles";
import {
  Main,
  ConfirmContainer,
  Info,
  ForwardIcon,
  ButtonContainer,
} from "../../styles/profile/confirmProfile-style";
import { useSelector, useDispatch } from "react-redux";
import { userProfileSiceAction } from "../../reduxStore/store";

const ConfirmProfile = (props) => {
  const profiledata = useSelector((state) => state.userProfile.data)
  const dispatch = useDispatch();

  const confirmIconHandler = () => {
    dispatch(
      userProfileSiceAction.setProfileData({
        profileId: profiledata.profileId,
        profilename: profiledata.profilename,
        imgPath: profiledata.newImgPath,
      })
    );
    props.iconsProf(false);
    props.confirmWindow(false);
    props.editProf(true);
  };

  return (
    <Main>
      <div>
        <Headings
          color="white"
          size="1.3rem"
          weight="500"
          align="center"
          padding="0 0 1rem 0"
        >
          Change profile icon?
        </Headings>
      </div>
      <ConfirmContainer alignCenter gap="1rem" justifyCenter>
        <Flex column alignCenter gap="0.5rem">
          <Images height="150px" src={profiledata.imgPath} />
          <Info>Current</Info>
        </Flex>
        <ForwardIcon />
        <Flex column alignCenter gap="0.5rem">
          <Images height="150px" src={profiledata.newImgPath} />
          <Info>New</Info>
        </Flex>
      </ConfirmContainer>
      <ButtonContainer gap="1rem" justifyCenter>
        <ConfirmButtons size="1.2rem" onClick={confirmIconHandler}>
          Let's Do it
        </ConfirmButtons>
        <BorderButton size="1.2rem" onClick={() => props.confirmWindow(false)}>
          Not Yet
        </BorderButton>
      </ButtonContainer>
    </Main>
  );
};

export default ConfirmProfile;
