import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Logo />
      <S.Text>
        O Coursify.me é uma plataforma de ensino a distância, {"\n"}onde
        qualquer pessoa ou empresa pode construir seu {"\n"}EAD e vender cursos
        pela internet.
      </S.Text>
      <S.Button onPress={() => {}}>
        <S.Text>Quero conhecer a plataforma!</S.Text>
      </S.Button>
    </S.Container>
  );
};

export default Footer;
