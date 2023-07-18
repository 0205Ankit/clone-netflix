import Logo from "../assets/Logo";
import styled from "styled-components";
import TotalProfile from "../components/profile/totalProfiles";
import CreateProfile from "../components/profile/createProfile";
import { useState } from "react";
const Main = styled.main`
  background-color: #141414;
  width: 100vw;
 min-height: 100vh;
`;


const Profile = () => {


    const[totalProfiles,setTotalProfiles]=useState(true)

  return (
      <Main>
        <header>
          <Logo width={"6rem"} padding={"1.5rem 2rem"} />
        </header>
        {totalProfiles?<TotalProfile CreateProfile={setTotalProfiles}/>:<CreateProfile CreateProfile={setTotalProfiles}/>}
      </Main>

  );
};

export default Profile;
