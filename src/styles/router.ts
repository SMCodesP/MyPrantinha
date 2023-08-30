import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const MainButton = styled(TouchableOpacity)`
  flex: 1;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.green};
  width: 52px;
  height: 52px;
  border-radius: 26px;
  left: 50%;
  bottom: 0;
  transform: translateX(-26px) translateY(-42px);
  justify-content: center;
  align-items: center;
  elevation: 2;
`;
