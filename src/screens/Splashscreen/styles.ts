import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;
