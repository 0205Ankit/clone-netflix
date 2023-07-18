import {
  Main,
  Navbar,
  ArrowContainer,
  Arrow,
  ShowsContainer,
  IconsContainer,
} from "../../styles/profile/manage-icons-style";
import { Headings, Flex, Images } from "../../styles/globalStyles";
import { profileIcons } from "../../helper/profile-icons";
import { useDispatch, useSelector } from "react-redux";
import { userProfileSiceAction } from "../../reduxStore/store";
import { SwiperSlide } from "swiper/react";
import Swipe from "../../helper/swiper";


const ManageIconsProfile = (props) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.userProfile.data);

  return (
    <Main>
      <Navbar spaceBetween>
        <Flex gap="0.6rem">
          <ArrowContainer alignCenter>
            <Arrow onClick={() => props.iconsProf(false)} />
          </ArrowContainer>
          <div>
            <Headings color="white" size="2.3rem" weight="550">
              Edit Profile
            </Headings>
            <Headings color="white" size="1.8rem" weight="500">
              Choose a profile icon.
            </Headings>
          </div>
        </Flex>
        <Flex alignCenter gap="1.2rem" padding="0 2rem 0 0">
          <Headings color="white" size="1.8rem" weight="400">
            {profileData.profilename}
          </Headings>
          <Images height="90px" src={profileData.imgPath} />
        </Flex>
      </Navbar>

      {profileIcons.map((e) => {
        return (
          <ShowsContainer key={e.id}>
            <Images height="40px" src={`${e.logo}`} />
            <IconsContainer>
              <Swipe
                spaceBetween={20}
                slidesPerView={8}
                slidesPerGroup={8}
                loop={true}
                navigation={true}
                loopFillGroupWithBlank={e.imgPath.length > 8 ? false : true}
              >
                {e.imgPath.map((event) => {
                  return (
                    <SwiperSlide key={event}>
                      <Images
                        hover
                        box="border-box"
                        height="140px"
                        src={event}
                        onClick={() => {
                          dispatch(
                            userProfileSiceAction.setProfileData({
                              ...profileData,
                              newImgPath: event,
                            })
                          );
                          props.confirmWindow(true);
                        }}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swipe>
            </IconsContainer>
          </ShowsContainer>
        );
      })}
    </Main>
  );
};

export default ManageIconsProfile;
