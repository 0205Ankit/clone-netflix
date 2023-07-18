import { useReducer } from "react"

const emailReducer = (state, action) => {
  if (action.type === "USER-INPUT") {
    return { value: action.value, isFocused: state.isFocused};
  }
  if (action.type === "FOCUSED") {
    return { value: state.value, isFocused: action.isFocused};
  }
  if (action.type === "BLUR") {
    return { value: state.value, isFocused: action.isFocused};
  }
  if(action.type==='AUTOFOCUS'){
    return { value: state.value, isFocused: state.isFocused};
  }
  return { value: "", isFocused: false };
};

const useForm=()=>{
  const [inputState, dispatchInput] = useReducer(emailReducer, {
    value: "",
    isFocused: false,
  });
 return {inputState,dispatchInput}
}
export default useForm
