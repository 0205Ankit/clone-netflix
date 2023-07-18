import {
  Button,InputContainer,
  InputField,InputFieldContainer,LabelField,
  SignUpLink,Wrapper,Text,
} from "../../styles/forms/LoginStyle";
import { useState } from "react";
import { Headings,Error } from "../../styles/globalStyles";
import useForm from "../../hooks/form-hook";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner";
import { createUser, addingDoc, checkUsername ,createUserProfile} from "../../services/firebase";
import { nanoid } from "nanoid";
import { imgArray } from "../../helper/IconArray";
import useRandomNumber from "../../hooks/randomNumber";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { inputState: email, dispatchInput: dispatchEmail } = useForm();
  const { inputState: password, dispatchInput: dispatchPassword } = useForm();
  const { inputState: fullName, dispatchInput: dispatchFullName } = useForm();
  const { inputState: userName, dispatchInput: dispatchUserName } = useForm();

  const isInvalid =
    email.value === "" || password.value === "" ||fullName.value === "" ||userName.value === "";

  const emailValue = (event) => {
    dispatchEmail({ type: "USER-INPUT", value: event.target.value });
  };
  const passwordValue = (event) => {
    dispatchPassword({ type: "USER-INPUT", value: event.target.value });
  };
  const fullNameValue = (event) => {
    dispatchFullName({ type: "USER-INPUT", value: event.target.value });
  };
  const userNameValue = (event) => {
    dispatchUserName({ type: "USER-INPUT", value: event.target.value });
  };
 
 
  //random number used to store image path in user profile
  const randomNumber=useRandomNumber()

  //function that is called when the form is submitted
  const signUpFormSubmitHandler = async (event) => {

   event.preventDefault();
    setLoading(true);
    const userNameExist = await checkUsername(userName.value)> 0;

    if (userNameExist) {
      setLoading(false);
      setError("Username Already Exist, Please try another one");
      dispatchUserName({ type: "USER-INPUT", value: "" });
    } else {
      try {
         const auth= await createUser(email.value, password.value);
        const addRes=await addingDoc(email.value, userName.value, fullName.value,auth.user.uid);
        await createUserProfile(
          addRes.id,
          nanoid(6),
          userName.value.replace(/ +/g, ""),
          imgArray[randomNumber]
        );
        navigate("/profile");
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  return (
    <Wrapper onSubmit={signUpFormSubmitHandler}>
      <Headings size={"2rem"}>Sign Up</Headings>
      {error ? <Error size={"14px"} padding='1.2rem 0 0 0'>{error}</Error> : ""}
      <InputContainer column>
        <InputFieldContainer>
          <InputField
            type="email"
            id="email"
            value={email.value}
            onFocus={() => dispatchEmail({ type: "FOCUSED", isFocused: true })}
            onBlur={() => {
              if (email.value === "") {
                dispatchEmail({ type: "BLUR", isFocused: false });
              }
            }}
            onChange={emailValue}
          />
          <LabelField up={email.isFocused} htmlFor="email">
            Email or phone number
          </LabelField>
        </InputFieldContainer>
        <InputFieldContainer>
          <InputField
            type="password"
            id="password"
            value={password.value}
            onFocus={() =>
              dispatchPassword({ type: "FOCUSED", isFocused: true })
            }
            onBlur={() => {
              if (password.value === "") {
                dispatchPassword({ type: "BLUR", isFocused: false });
              }
            }}
            onChange={passwordValue}
          />
          <LabelField up={password.isFocused} htmlFor="password">
            Password
          </LabelField>
        </InputFieldContainer>
        <InputFieldContainer>
          <InputField
            type="text"
            id="fullname"
            value={fullName.value}
            onFocus={() =>
              dispatchFullName({ type: "FOCUSED", isFocused: true })
            }
            onBlur={() => {
              if (fullName.value === "") {
                dispatchFullName({ type: "BLUR", isFocused: false });
              }
            }}
            onChange={fullNameValue}
          />
          <LabelField up={fullName.isFocused} htmlFor="fullname">
            Full Name
          </LabelField>
        </InputFieldContainer>
        <InputFieldContainer>
          <InputField
            type="text"
            id="username"
            value={userName.value}
            onFocus={() =>
              dispatchUserName({ type: "FOCUSED", isFocused: true })
            }
            onBlur={() => {
              if (userName.value === "") {
                dispatchUserName({ type: "BLUR", isFocused: false });
              }
            }}
            onChange={userNameValue}
          />
          <LabelField up={userName.isFocused} htmlFor="username">
            Username
          </LabelField>
        </InputFieldContainer>
      </InputContainer>
      <div>
        <Button disabled={isInvalid}>
          {loading ? <Spinner /> : "Sign Up"}
        </Button>
        <Text>
          <span>
            Already have an account?
            <SignUpLink to="/login">Sign In</SignUpLink>
          </span>
        </Text>
      </div>
    </Wrapper>
  );
};

export default SignUp;