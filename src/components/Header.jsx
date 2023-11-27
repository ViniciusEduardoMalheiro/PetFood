import { Box, Image } from "@chakra-ui/react";
import Logo from "../imgs/logo-white.svg";

export function Header() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="60px"
    >
      <Image src={Logo} />
    </Box>
  );
}
