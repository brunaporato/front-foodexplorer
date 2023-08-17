import { Container } from "./styles";

import { PiReceipt } from "react-icons/pi";

export function ButtonIcon({price, text, order=false}) {

  return (
    <Container
    type="button"
    >
      <PiReceipt size={26} />
      {text} { order ? `(${price})` : `${price}` }
    </Container>
  )
} 