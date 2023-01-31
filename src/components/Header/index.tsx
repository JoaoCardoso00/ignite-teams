import { Container, Logo, BackIcon, BackButton } from "./styles";

import logoImg from "@assets/logo.png";
import { CaretLeft } from "phosphor-react-native";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
