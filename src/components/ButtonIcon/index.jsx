import { Container } from "./styles";

import { PiReceipt } from "react-icons/pi";

export function ButtonIcon({price}) {
  return (
    <Container
    type="button"
    >
      <PiReceipt size={26} />
      pedir - R${price}
    </Container>
  )
} 