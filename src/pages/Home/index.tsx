import { useRef } from "react";
import { Box, PixelBlast } from "../../components";
import { theme } from "../../style/THEME/theme";
import Sobre from "../Sections/About";
import Calendario from "../Sections/Calendar";
import Contato from "../Sections/Contact";
import Hero from "../Sections/Hero";
import JunteSe from "../Sections/JoinUs";
import Membros from "../Sections/Members";
import Projetos from "../Sections/Projects";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={containerRef}
      width={"100%"}
      minHeight={"700dvh"}
      background={theme.colors.black}
      position={"relative"}
    >
      <Box
        position={"fixed"}
        top={"0"}
        left={"0"}
        width={"100%"}
        height={"100dvh"}
        zIndex={0}
      >
        <PixelBlast
          variant="square"
          pixelSize={5}
          color={theme.colors.lighter}
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </Box>

      <Box position={"relative"} zIndex={1} width={"100%"}>
        <Hero />
        <Sobre />
        <Projetos />
        <Membros />
        <Calendario />
        <JunteSe />
        <Contato />
      </Box>
    </Box>
  );
};

export default Home;
