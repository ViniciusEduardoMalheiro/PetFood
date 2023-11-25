import {
  FormControl,
  Grid,
  Button,
  Input,
  Box,
  Text,
  Image,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../imgs/logo-white.svg";
import ImgLogin from "../imgs/img-login.png";
import Email from "../imgs/E-mail.svg";
import Criar from "../imgs/Criar.svg";

export function Login() {
  return (
    <Grid bg="#331832" templateColumns="repeat(2, 1fr)">
      <GridItem width="100%">
        <FormControl
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={Logo} boxSize="176px" />
          <Text fontFamily="Poppins" fontSize="1.5rem" color="#FDFDFD">
            Faça seu login
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Input
              type="email"
              placeholder="E-mail"
              fontFamily="Poppins"
              borderRadius="10px"
              border="none"
              padding="12px"
              width="340px"
            />
            <Input
              type="password"
              placeholder="Senha"
              fontFamily="Poppins"
              borderRadius="10px"
              border="none"
              padding="12px"
              width="340px"
              marginTop="8px"
            />
            <Button
              fontFamily="Poppins"
              borderRadius="10px"
              border="none"
              padding="12px"
              cursor="pointer"
              width="100%"
              marginTop="20px"
              backgroundColor="#F0544F"
            >
              Entrar
            </Button>
            <Text fontFamily="Poppins" color="#FDFDFD" cursor="pointer">
              Esqueci minha senha
            </Text>
            <Box display="flex" gap="8px" cursor="pointer">
              <Image src={Criar} />
              <Text fontFamily="Poppins" color="#FDFDFD">
                Criar conta
              </Text>
            </Box>
          </Box>
        </FormControl>
      </GridItem>
      <GridItem>
        <Image src={ImgLogin} boxSize="100%" />
      </GridItem>
    </Grid>
  );
}
