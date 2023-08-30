import { Text } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

export interface TextProps {
  c?: keyof DefaultTheme["colors"];
}

export const Title = styled.Text<TextProps>`
  font-size: 24px;
  font-family: "Inter-Black";
  color: ${({ c, theme }) => theme.colors[c || "foreground"]};
`;
