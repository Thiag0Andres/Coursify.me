import React from "react";

import { Container, ImageBackground } from "./styles";

// Images
import SplashScreen from "../../assets/images/splash.png";

const Splashscreen: React.FC = () => {
  return (
    <Container>
      <ImageBackground source={SplashScreen} resizeMode="cover" />
    </Container>
  );
};

export default Splashscreen;
