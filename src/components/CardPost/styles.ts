import styled from "styled-components/native";

export const Container = styled.View`
  width: 235px;
  height: 325px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  margin-right: 38px;
  overflow: hidden;
  elevation: 5;
`;

export const Content = styled.View`
  flex: 1;
  padding: 15px 0 0 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 103px;
`;

export const TitleCard = styled.Text`
  width: 187px;
  height: 44px;
  margin-bottom: 16px;
  font: normal normal bold 17px/24px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.green2};
`;

export const TextCard = styled.Text`
  font: normal normal normal 15px/20px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Button = styled.TouchableOpacity`
  width: 80px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  font: normal normal bold 16px/20px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.yellow2};
`;
