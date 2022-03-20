import React from "react";
import { Linking } from "react-native";
import * as S from "./styles";

const Footer: React.FC = () => {
  const handleOpenLink = async () => {
    await Linking.openURL("https://coursify.me/");
  };

  return (
    <S.Container>
      <S.Logo />
      <S.Text>
        O Coursify.me é uma plataforma de ensino a distância, {"\n"}onde
        qualquer pessoa ou empresa pode construir seu {"\n"}EAD e vender cursos
        pela internet.
      </S.Text>
      <S.Button onPress={handleOpenLink}>
        <S.Text>Quero conhecer a plataforma!</S.Text>
      </S.Button>
    </S.Container>
  );
};

export default Footer;
