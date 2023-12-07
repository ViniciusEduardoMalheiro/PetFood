import {
  Box,
  Image,
  Grid,
  Flex,
  Button,
  GridItem,
  FormControl,
  Text,
  Input,
} from "@chakra-ui/react";
import Ilustration from "../imgs/illustration.svg";
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
            height="70vh"
          >
            <Image src={Ilustration} boxSize="70%" />
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Box
              display="flex"
              width="100%"
              height="70vh"
              alignItems="center"
              justifyContent="center"
            >
              <FormControl
                display="flex"
                width="350px"
                height="400px"
                alignItems="center"
                justifyContent="center"
                borderRadius="6px"
                flexDirection="column"
                backgroundColor="#FFFFFF"
              >
                <Box display="flex" width="90%" justifyContent="start">
                  <Text fontFamily="Poppins" fontWeight="400">
                    <strong>Falta pouco</strong>
                    <br />
                    pra fazer o seu pet feliz.
                  </Text>
                </Box>
                <Box
                  display="flex"
                  width="80%"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  gap="14px"
                >
                  <Box>
                    <Input
                      type="text"
                      backgroundColor="#DCDCDC"
                      borderRadius="3px"
                      width="300px"
                      border="none"
                      color="#626264"
                      fontFamily="Poppins"
                      fontWeight="400"
                      placeholder="Nome completo"
                      padding="8px"
                    />
                  </Box>
                  <Box>
                    <Input
                      type="email"
                      backgroundColor="#DCDCDC"
                      borderRadius="3px"
                      width="300px"
                      border="none"
                      color="#626264"
                      fontFamily="Poppins"
                      fontWeight="400"
                      placeholder="E-mail"
                      padding="8px"
                    />
                  </Box>
                  <Box>
                    <Input
                      type="tel"
                      backgroundColor="#DCDCDC"
                      borderRadius="3px"
                      width="300px"
                      border="none"
                      color="#626264"
                      fontFamily="Poppins"
                      fontWeight="400"
                      placeholder="Telefone"
                      padding="8px"
                    />
                  </Box>
                  <Box>
                    <Input
                      type="number"
                      backgroundColor="#DCDCDC"
                      borderRadius="3px"
                      width="300px"
                      border="none"
                      color="#626264"
                      fontFamily="Poppins"
                      fontWeight="400"
                      placeholder="CPF"
                      padding="8px"
                    />
                  </Box>
                  <Box>
                    <Button
                      width="300px"
                      borderRadius="3px"
                      border="none"
                      fontWeight="400"
                      fontFamily="Poppins"
                      color="#FFFFFF"
                      backgroundColor="#F0544F"
                      padding="8px"
                      cursor="pointer"
                      gap="4px"
                    >
                      Finalizar <strong>Pedido</strong>
                    </Button>
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
