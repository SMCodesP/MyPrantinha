import { View } from "react-native";
import { Container, ContainerProgressed } from "./styles";

const Progressbar: React.FC = () => {
  return (
    <Container>
      <ContainerProgressed progress={85} c="green" />
    </Container>
  );
};

export default Progressbar;
