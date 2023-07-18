import styled from "styled-components"

const Spin =styled.div`

  border: 3px solid white;
  border-right-color: transparent;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  animation: spinner 1s linear 0s infinite;

 @keyframes spinner {
    0% {  transform : rotate(0deg)}
    100% {transform : rotate(360deg) }
}
`

const Spinner=()=>{
    return <Spin></Spin>
}

export default Spinner