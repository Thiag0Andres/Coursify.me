import styled from "styled-components/native";
import logo from "../../assets/images/logo-coursify-w.png";

export const Container = styled.View`
  width: 100%;
  height: 222px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 19px 0 24px 0;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 172px;
  height: 45px;
`;

export const Text = styled.Text`
  font: normal normal normal 12px/17px Roboto;
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
`;

export const Button = styled.TouchableOpacity`
  width: 216px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;
