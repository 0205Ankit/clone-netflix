import Logo from "../assets/Logo";
import styled from "styled-components";
import ManageProfile from "../components/profile/manage-profile";
import EditProfile from "../components/profile/editprofile";
import { useState } from "react";
import ManageIconsProfile from "../components/profile/manageIcons-profile";
import ConfirmProfile from "../components/profile/confirmProfile";

const Main = styled.main`
  background-color: #141414;
  max-width: 100vw;
  min-height: 100vh;
`;
const Header=styled.div`
position: sticky;
top:0;
z-index: 100 !important;
`

const ManageProfilePage = () => {
  const [editProfile, setEditProfile] = useState();
  const [iconsProfile, setIconsProfile] = useState();
  const [confirmWindow, setConfirmWindow] = useState();
  return (
    <Main>
      <Header>
        <Logo width={"6rem"} padding={"1.5rem 2rem 4rem"} bgcolor=" #141414" />
      </Header>

      {editProfile && !iconsProfile && (
        <EditProfile editProf={setEditProfile} iconsProf={setIconsProfile} />
      )}
      {!editProfile && !iconsProfile && (
        <ManageProfile editProf={setEditProfile} />
      )}
      {iconsProfile && !confirmWindow && (
        <ManageIconsProfile
          iconsProf={setIconsProfile}
          confirmWindow={setConfirmWindow}
        />
      )}
      {confirmWindow && (
        <ConfirmProfile
          confirmWindow={setConfirmWindow}
          editProf={setEditProfile}
          iconsProf={setIconsProfile}
        />
      )}
    </Main>
  );
};

export default ManageProfilePage;
