import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin: 46px 0 59px 0;
  padding-horizontal: 15px;
`;

export const TitleCategory = styled.Text`
  font: normal normal bold 22px/27px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.green2};
`;
