import { ButtonContainer } from "./styles";
const Button = ({label, onClick}) => {
  console.log(onClick)
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  