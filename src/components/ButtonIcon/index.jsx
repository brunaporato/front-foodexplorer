import { Container } from "./styles";

import { PiReceipt } from "react-icons/pi";

export function ButtonIcon({price, text, order=false, ...rest}) {

  return (
    <Container
    type="button"
    {...rest}
    >
      <PiReceipt size={26} />
      {text} { order ? `(${price})` : `${price}` }
    </Container>
  )
} 