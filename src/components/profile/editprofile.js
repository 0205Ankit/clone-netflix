import {
  Headings,
  ConfirmButtons,
  BorderButton,
  IconBox,
  Icon,
  Error,
  Images,
} from "../../styles/globalStyles";
import {
  Main,
  CreateContainer,
  Input,
  SubmitSection,
} from "../../styles/profile/createProfileStyle";
import { useState } from "react";
import {
  updateDocument,
  getProfileDoc,
  deleteDocument,
} from "../../services/firebase";
import useAutoId from "../../hooks/autoIdHook";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const EditProfile = (props) => {
  const profileData = useSelector((state) => state.userProfile.data);
  const [profileName, setProfileName] = useState(profileData.profilename);
  const [error, setError] = useState();
  const activeUserId = useAutoId();

  const navigate = useNavigate();

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    if (profileName === "") {
      setError("Please Enter a Profile Name");
      return;
    }
    if (profileName.split("").length > 10) {
      setError("Profile Name is too long! Please try a shorter Name ");
      return;
    }
    const profData = await getProfileDoc(activeUserId);
    const profileNameArray = profData.map((e) => e.profilename.toLowerCase());
    const filteredArrayName = profileNameArray.filter((e) => {
      return e !== profileData.profilename;
    });
    if (filteredArrayName.includes(profileName.toLowerCase())) {
      setError("Profile Name already exist! Please try another one");
      return;
    } else {
      await updateDocument(
        activeUserId,
        profileData.profileId,
        profileName.replace(/ +/g, ""),
        profileData.imgPath
      );
    }

    props.editProf(false);
  };

  const deleteProfileHandler = async (e) => {
    e.preventDefault();
    await deleteDocument(activeUserId, profileData.profileId);
    props.editProf(false);
    navigate("/profile");
  };

  return (
    <Main marginTop="3rem" onSubmit={onFormSubmitHandler}>
      <Headings size="3.8rem" weight="400" color="white">
        Edit Profile
      </Headings>
      <CreateContainer justifyStart>
        <IconBox edit onClick={() => props.iconsProf(true)}>
          <Icon fill="white" width="25px" height="21px"></Icon>
        </IconBox>
        <Images
          height="140px"
          src={`${profileData.imgPath}`}
          alt="profileImage"
        />
        <div>
          {error && (
            <Error size="14px" padding="0 0 0.8rem 0">
              {error}
            </Error>
          )}
          <div>
            <Input
              onChange={(e) => setProfileName(e.target.value)}
              placeholder={"Name"}
              value={profileName}
            />
          </div>
        </div>
      </CreateContainer>
      <SubmitSection>
        <ConfirmButtons size="1.1rem">Save</ConfirmButtons>
        <BorderButton size="1.1rem" onClick={() => props.editProf(false)}>
          Cancel
        </BorderButton>
        <BorderButton size="1.1rem" onClick={deleteProfileHandler}>
          Delete Profile
        </BorderButton>
      </SubmitSection>
    </Main>
  );
};

export default EditProfile;
