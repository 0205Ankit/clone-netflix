import {
  Container,
  ProfileContainer,
  ImgContainer,
  ProfileName,
  Manage,
} from "../../styles/profile/totalProfileStyle";
import {
  Headings,
  ConfirmButtons,
  IconBox,
  Icon,
  Images,
} from "../../styles/globalStyles";
import useProfileData from "../../hooks/profilData-hook";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userProfileSiceAction } from "../../reduxStore/store";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const ManageProfile = (props) => {
  const [profData,loading] = useProfileData();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  return (
    <Container marginTop="3rem">
      <Headings size={"2.8rem"} color={"white"} weight={"500"} align={"center"}>
        Manage Profiles:
      </Headings>
      {!loading ? (
        <>
          <ProfileContainer alignCenter justifyCenter>
            {profData.map((profile) => {
              return (
                <ImgContainer key={profile.profileId}>
                  <IconBox manage>
                    <Icon fill="white" width="32px" height="32px"></Icon>
                  </IconBox>
                  <Images
                    opacity="0.5"
                    height="150px"
                    box="border-box"
                    src={`${profile.imgPath}`}
                    alt={"ProfileImage"}
                    onClick={() => {
                      dispatch(
                        userProfileSiceAction.setProfileData({
                          profileId: profile.profileId,
                          profilename: profile.profilename,
                          imgPath: profile.imgPath,
                        })
                      );
                      props.editProf(true);
                    }}
                  />
                  <ProfileName>{profile.profilename}</ProfileName>
                </ImgContainer>
              );
            })}
          </ProfileContainer>
          <Manage justifyCenter>
            <ConfirmButtons size="1.2rem" onClick={() => navigate("/profile")}>
              Done
            </ConfirmButtons>
          </Manage>
        </>
      ) : (
        <ProfileContainer justifyCenter>
          <SkeletonTheme baseColor="#222" highlightColor="#333">
            <Skeleton
              count={5}
              height={150}
              width={150}
              style={{ marginRight: "2rem" }}
              inline={true}
            />
          </SkeletonTheme>
        </ProfileContainer>
      )}
    </Container>
  );
};
export default ManageProfile;
