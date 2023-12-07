import { Box, Image } from "@chakra-ui/react";
import Logo from "../imgs/logo-white.svg";

export function Header() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Image src={Logo} boxSize="160px" margin="0" padding="0" />
    </Box>
  );
}
