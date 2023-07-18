import Logo from "../assets/Logo";
import Footer from "../components/Footer";
import SignUp from '../components/forms/SignUp'
import background from "../assets/home-bg.jpg";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate=useNavigate()
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(0deg, transparent 80%, rgba(0, 0, 0, 0.7)),
    radial-gradient(90% 100%, transparent 0, rgba(0, 0, 0, 0.7) 100%),url(${background})`,
      }}
    >
     <div onClick={()=>{navigate('/')}}>
          <Logo width={"8rem"} padding={"1.5rem 2.5rem"} />
      </div>
      <SignUp />
      <Footer bgColor="rgb(0, 0, 0,0.65)" />
    </section>
  );
};

export default Signup;
