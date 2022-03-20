import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      {/*       <S.GoBackButton onPress={() => navigation.goBack()}>
        <S.GobackIcon />
        <S.GoBackText>Voltar</S.GoBackText>
      </S.GoBackButton> */}

      <S.Logo />
    </S.Container>
  );
};

export default Header;
