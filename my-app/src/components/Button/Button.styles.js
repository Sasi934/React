import styled, {keyframes}from 'styled-components';
export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) => props.variant === 'outline' ? 'white' : '#4caf50'};
  color: ${(props) => props.variant === 'outline' ? '#4caf50' : 'white'};
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: 0.5s all ease-out;
  
  &:hover{
    background-color: ${(props) => props.variant !== 'outline' ? '#fff' : '#45a049'};
    color: ${(props) => props.variant !== 'outline' ? '#45a049' : '#fff'};
  }
`
  
  export const FancyButton =styled(StyledButton)`
  background-image:linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border:none;`

  export const SubmitButton=styled(StyledButton).attrs((props) => ({
    type: 'submit',
  }))`
  box-shadow:8 9px #999;
  &:active{
  background-color:${(props) =>
  props.variant !== 'outline' ?'#fff':'#4caf50'};
  box-shadow:o 5px 15px rgba(0,0,0,0.3);
  transform:translateY(4px);
  }`
   

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;`

  export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
  `