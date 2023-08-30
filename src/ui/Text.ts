import styled, { DefaultTheme } from "styled-components/native";

export interface TextProps {
  c?: keyof DefaultTheme["colors"];
  w?:
    | "Black"
    | "Bold"
    | "ExtraBold"
    | "ExtraLight"
    | "Light"
    | "Medium"
    | "Regular"
    | "SemiBold"
    | "Thin";
  align?: "center" | "flex-start" | "flex-end";
  size?: keyof DefaultTheme["fonts"];
}

export const Text = styled.Text<TextProps>`
  /* font-size: 14px; */
  font-size: ${({ size, theme }) => theme.fonts[size || "md"]};
  font-family: ${({ w }) => `Inter-${w || "Regular"}`};
  color: ${({ c, theme }) => theme.colors[c || "foreground"]};
  align-self: ${({ align }) => align || "flex-start"};
`;
