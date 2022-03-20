import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerHtml = styled.View``;

export const InformativeImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  margin-bottom: 30px;
`;

export const ContainerBody = styled.View`
  padding: 46px 26px 71px 26px;
`;

export const TitleText = styled.Text`
  font: normal normal bold 24px/34px Roboto;
  text-align: center;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.green2};
  text-transform: lowercase;
  margin-bottom: 30px;
`;
