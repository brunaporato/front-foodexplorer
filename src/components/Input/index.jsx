import { Container } from "./styles";
import { BiSearch } from "react-icons/bi";

export function Input({ ...rest }) {
  return (
    <Container>
      <BiSearch size={24}/>
      <input type="text" {...rest}/>
    </Container>
  )
}