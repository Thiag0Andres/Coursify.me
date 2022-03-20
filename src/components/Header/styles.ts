import styled from "styled-components/native";
import logo from "../../assets/images/logo.png";
import arrowIcon from "../../assets/icons/arrow-left.png";
import menuIcon from "../../assets/icons/menu.png";

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

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GobackIcon = styled.Image.attrs({
  source: arrowIcon,
})``;

export const GoBackText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const MenuIcon = styled.Image.attrs({
  source: menuIcon,
})`
  width: 37px;
  height: 37px;
  tint-color: ${(props) => props.theme.colors.blue};
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 169px;
  height: 50px;
`;
