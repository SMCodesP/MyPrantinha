import { View, useWindowDimensions } from "react-native";

import Progressbar from "../components/Progressbar";

import { Title } from "../ui/Title";
import { Text } from "../ui/Text";

import {
  BlobBackground,
  ContainerImage,
  ContainerNextTime,
  PlantImage,
} from "../styles/pages/home";
import { useTheme } from "styled-components/native";
import LottieView from "lottie-react-native";
import { useRef } from "react";

const Home: React.FC = () => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const animation = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        gap: 25,
        paddingHorizontal: 20,
      }}
    >
      <Title>
        Bom, dia <Title c="green">Rai </Title>
        <Title c="red">❤</Title>
      </Title>

      <ContainerNextTime>
        <Text w="Medium" style={{ marginBottom: 10 }} c="comment">
          Tempo para a proxima rega
        </Text>
        <Progressbar />
        <Text w="Medium" align="flex-end" c="comment" size="sm">
          4 horas
        </Text>
      </ContainerNextTime>

      <View
        style={{
          transform: [{ scaleX: -1 }],
          position: "absolute",
          right: -100,
        }}
      >
        <LottieView
          ref={animation}
          source={require("../../assets/love.json")}
          style={{
            width: 350,
            height: 350,
          }}
          autoPlay
        />
      </View>

      <ContainerImage>
        <BlobBackground width={width * 0.8} height={width * 0.8} />
        <PlantImage width={width * 0.65} />
      </ContainerImage>
    </View>
  );
};

export default Home;
