import React from "react";
import { Text } from "react-native";
import { Header, Footer } from "../../components";

import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Footer />
    </S.Container>
  );
};

export default Home;
