import styled,{css} from "styled-components"
import * as Global from "../globalStyles"
import { Link } from "react-router-dom"

export const Wrapper=styled.form`
color: white;
max-width: 310px;
min-width:310px;
background-color: rgba(0,0,0,0.65);
padding: 3.7rem;
margin: auto;
margin-bottom: 6rem;
`

export const InputContainer = styled(Global.Flex)`
  gap: 1.5rem;
  padding: 2rem 0 2.5rem 0;
width:350px;
`;


export const InputFieldContainer=styled.div`
position:relative;
min-height: 50px;
max-height: 50px;
`


export const InputField = styled.input`
  max-width: 310px;
  min-width: 296px;
  background-color: #333;
  outline: none;
  border: none;
  padding-left: 16px;
  color: white;
  border-radius: 5px;
  line-height: 50px;
  font-size: 1rem;
  padding-top: 8px;
`;


export const LabelField = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-30%);
  color: rgb(180, 177, 177);
  font-size: 1rem;
  left: 16px;
  transition: 0.1s ease-in-out;

  ${(props) =>
    props.up &&
    css`
      transform: translateY(-150%);
      font-size: 11px;
    `}
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
  width: 100%;
  outline: none;
  border: none;
  color: white;
  background-color: #e50914;
  font-size: 1.2rem;
  padding: 1rem 0;
  border-radius: 5px;
  margin-bottom: 2rem;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`;


export const Text = styled.div`
  color: #666;
`;


export const SignUpLink=styled(Link)`
padding-left: 0.5rem;
text-decoration: none;
color: white;

&:hover{
  text-decoration: underline;
}
`