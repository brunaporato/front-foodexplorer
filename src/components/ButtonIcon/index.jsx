import { Container } from "./styles";

import { PiReceipt } from "react-icons/pi";

export function ButtonIcon({ title, ...rest }) {
  return (
    <Container
    type="button"
    {...rest}
    >
      <PiReceipt size={26} />
     { title }
    </Container>
  )
} 