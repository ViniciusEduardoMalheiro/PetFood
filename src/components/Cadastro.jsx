import {
  Box,
  Image,
  Grid,
  Flex,
  GridItem,
  FormControl,
  Text,
  Input,
} from "@chakra-ui/react";
import Group from "../imgs/Group.svg";
import Logo from "../imgs/logo-white.svg";
import { Header } from "../components/Header";

export function Cadastro() {
  return (
    <Box width="100%" height="100vh">
      <Header />
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100vh"
          >
            <Image src={Group} boxSize="50%" />
          </Box>
        </GridItem>
        <GridItem>
          <FormControl
            display="flex"
            flexDirection="column"
            backgroundColor="#FFFFFF"
            width="360px"
            height="400px"
          >
            <Text>
              Falta pouco
              <br />
              pra fazer o seu pet feliz.
            </Text>
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
}
