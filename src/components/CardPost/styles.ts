import styled from "styled-components/native";

export const Container = styled.View`
  width: 235px;
  height: 325px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  elevation: 20;
`;

export const TitleCard = styled.Text`
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
