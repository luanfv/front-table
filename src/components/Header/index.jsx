import React from "react";

import LogoImg from '../../assets/Logo.svg';
import { Container, Logo} from "./styles";

export default function Header() {
  return (
    <Container>
      <Logo src={LogoImg} />
    </Container>
  );
}
