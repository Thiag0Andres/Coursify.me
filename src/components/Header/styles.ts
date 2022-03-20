import styled from "styled-components/native";
import logo from "../../assets/images/logo-2.png";

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  margin-top: 24px;
  padding-horizontal: 17px;
  background-color: ${({ theme }) => theme.colors.white};
  elevation: 5;
`;

export const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 169px;
  height: 50px;
`;
