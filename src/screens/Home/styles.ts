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
`;

export const ContentCategories = styled.View`
  flex: 1;
  width: 100%;
  padding-bottom: 59px;
  padding-horizontal: 15px;
`;

export const TitleCategory = styled.Text`
  margin: 33px 0 28px 0;
  font: normal normal bold 22px/27px Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.green2};
`;

export const ContentList = styled.ScrollView`
  flex: 1;
`;
