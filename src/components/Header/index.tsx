import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import * as S from "./styles";

const Header: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <S.Container>
      {route.name !== "Home" && (
        <S.GoBackButton onPress={() => navigation.goBack()}>
          <S.GobackIcon />
          <S.GoBackText>Voltar</S.GoBackText>
        </S.GoBackButton>
      )}
      <S.Logo />
      <S.MenuIcon />
    </S.Container>
  );
};

export default Header;
