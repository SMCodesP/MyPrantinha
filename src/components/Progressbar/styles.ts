import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.background};
`;

interface ContainerProgressedProps {
  progress: number;
  c: keyof DefaultTheme["colors"];
}

export const ContainerProgressed = styled.View<ContainerProgressedProps>`
  height: 100%;
  border-radius: 5px;
  width: ${({ progress }) => progress}%;
  background-color: ${({ c, theme }) => theme.colors[c || "foreground"]};
`;
