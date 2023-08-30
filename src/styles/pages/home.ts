import styled from "styled-components/native";
import Blob from "../../../assets/blob.svg";
import Beijinho from "../../../assets/plants/beijinho.svg";

export const ContainerNextTime = styled.View`
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.selection};
`;

export const ContainerImage = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 75%;
`;

export const PlantImage = styled(Beijinho)`
  position: absolute;
`;

export const BlobBackground = styled(Blob)``;
