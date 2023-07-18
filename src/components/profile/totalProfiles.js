import { Headings, BorderButton, Images } from "../../styles/globalStyles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Container,
  ProfileContainer,
  ImgContainer,
  ProfileName,
  Button,
  Add,
  AddIcon,
  Manage,
} from "../../styles/profile/totalProfileStyle";
import useProfileData from "../../hooks/profilData-hook";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const TotalProfile = (props) => {
  const navigate = useNavigate();
  const [profData, loading] = useProfileData();

  return (
    <Container marginTop="5rem">
      <Headings size={"2.8rem"} color={"white"} weight={"500"} align={"center"}>
        Who's Watching?
      </Headings>
      {!loading &&profData && (
        <>
          <ProfileContainer alignCenter justifyCenter>
            {profData.map((profile) => {
              return (
                <Link
                  key={profile.profileId}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    localStorage.setItem(
                      "user-profile",
                      JSON.stringify({
                        ...profile,
                      })
                    );
                  }}
                  to="/browse"
                >
                  <ImgContainer>
                    <Images
                      box="border-box"
                      height="150px"
                      src={profile.imgPath}
                      alt={"ProfileImage"}
                    />
                    <ProfileName>{profile.profilename}</ProfileName>
                  </ImgContainer>
                </Link>
              );
            })}

            {profData.length < 5 && (
              <Button column onClick={() => props.CreateProfile(false)}>
                <Add justifyCenter alignCenter>
                  <AddIcon />
                </Add>
                <ProfileName>Add Profile</ProfileName>
              </Button>
            )}
          </ProfileContainer>
          <Manage justifyCenter>
            {profData.length !== 0 && (
              <BorderButton
                size="1.2rem"
                onClick={() => navigate("/manage-profile")}
              >
                Manage Profiles
              </BorderButton>
            )}
          </Manage>
        </>
      )}
      {loading && (
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

export default TotalProfile;
