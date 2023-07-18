import {
  Button,InputContainer,
  InputField,InputFieldContainer,LabelField,
  SignUpLink,Wrapper,Text,
} from "../../styles/forms/LoginStyle";
import { Headings } from "../../styles/globalStyles";
import useForm from "../../hooks/form-hook";
import { signingIn } from "../../services/firebase";
import { useState } from "react";
import Spinner from "../spinner";
import { Error } from "../../styles/globalStyles";
import { useNavigate } from "react-router";


const LogIn = () => {


  const navigate=useNavigate()
  const [error,setError]=useState()
  const [loading,setLoading]=useState(false)
  const { inputState: email, dispatchInput: dispatchEmail } = useForm();
  const { inputState: password, dispatchInput: dispatchPassword } =useForm();

  const isInvalid=email.value===''||password.value==='';

  const emailValue = (event) => {
    dispatchEmail({ type: "USER-INPUT", value: event.target.value });
  };
  const passwordValue = (event) => {
    dispatchPassword({ type: "USER-INPUT", value: event.target.value });
  };

  const loginFormSubmitHandler = async (e) => {
    setLoading(true)
    e.preventDefault()
    try{
      await signingIn(email.value,password.value)
      navigate('/profile')
    }catch(err){
     setError(err.message)
     setLoading(false)
      dispatchEmail({ type: "USER-INPUT", value:'' });
       dispatchPassword({ type: "USER-INPUT", value:'' });
    }
 
  };

  return (
    <Wrapper onSubmit={loginFormSubmitHandler}>
      <Headings size={"2rem"}>Sign In</Headings>
      {error && <Error size="14px" padding='1.2rem 0 0 0'>{error}</Error>}
      <InputContainer column>
        <InputFieldContainer>
          <InputField
            type="email"
            value={email.value}
            id="email"
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
      </InputContainer>
      <div>
        <Button disabled={isInvalid}>
          {loading ? <Spinner /> : "Sign In"}
        </Button>
        <Text>
          <span>
            New to Netflix?
            <SignUpLink to="/sign-up">Sign up Now</SignUpLink>
          </span>
        </Text>
      </div>
    </Wrapper>
  );
};

export default LogIn;
