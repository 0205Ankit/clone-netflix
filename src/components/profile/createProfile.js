import {
  Headings,
  Error,
  ConfirmButtons,
  BorderButton,
  Images,
} from "../../styles/globalStyles";
import {
  Main,
  SubHeading,
  CreateContainer,
  Input,
  SubmitSection,
} from "../../styles/profile/createProfileStyle";
import { useState } from "react";
import { createUserProfile } from "../../services/firebase";
import { nanoid } from "nanoid";
import { getProfileDoc } from "../../services/firebase";
import { imgArray } from "../../helper/IconArray";
import useRandomNumber from "../../hooks/randomNumber";
import useAutoId from "../../hooks/autoIdHook";

const CreateProfile = (props) => {
  const [profileName, setProfileName] = useState("");
  const [error, setError] = useState("");
  const randomNumber = useRandomNumber();
  const activeUserId = useAutoId();
  const createProfileHandler = async (e) => {
    e.preventDefault();

    if (profileName === "") {
      setError("Please Enter Profile name ");
      return;
    }

    try {
      const profileData = await getProfileDoc(activeUserId);
      const profileNameArray = profileData.map((e) =>
        e.profilename.toLowerCase()
      );

      if (!profileNameArray.includes(profileName.toLowerCase())) {
        const profileId = nanoid(6);
        await createUserProfile(
          activeUserId,
          profileId,
          profileName.replace(/ +/g, ""),
          imgArray[randomNumber]
        );

        (function () {
          props.CreateProfile(true);
        })();
      } else {
        setError("Profile Name already exist, Please try another name");
        setProfileName("");
      }
    } catch (err) {
      console.log({ err });
      setError("Unable to create Profile! Please try again later");
    }
  };

  return (
    <Main marginTop="5rem" onSubmit={createProfileHandler}>
      <Headings size="3.8rem" weight="400" color="white">
        Add Profile
      </Headings>
      <SubHeading>
        Add a profile for another person watching Netflix.
      </SubHeading>
      <CreateContainer>
        <Images
          height="160px"
          src={`${imgArray[randomNumber]}`}
          alt="angryBirdImage"
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
          <SubmitSection>
            <ConfirmButtons size="1rem">CONTINUE</ConfirmButtons>
            <BorderButton size="1rem" onClick={() => props.CreateProfile(true)}>
              CANCEL
            </BorderButton>
          </SubmitSection>
        </div>
      </CreateContainer>
    </Main>
  );
};

export default CreateProfile;
