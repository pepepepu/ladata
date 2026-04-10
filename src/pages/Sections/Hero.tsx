import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Box, Header, Text } from "../../components";
import { theme } from "../../style/THEME/theme";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        ".grid-block",
        { opacity: 0 },
        { opacity: 1, duration: 1.2, stagger: 0.1 },
      )
        .fromTo(
          ".reveal-text",
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 150%, 0% 150%)",
            y: 50,
          },
          {
            clipPath: "polygon(0% -50%, 100% -50%, 100% 150%, 0% 150%)",
            y: 0,
            duration: 1.5,
            stagger: 0.05,
          },
          "-=0.9",
        )
        .fromTo(
          ".accent-line",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power4.inOut",
            transformOrigin: "left center",
            stagger: 0.1,
          },
          "-=1.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      id="hero"
      ref={containerRef}
      height={"100dvh"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
    >
      <Box style={{ pointerEvents: "auto" }}>
        <Header />
      </Box>

      <Box
        display={"grid"}
        width={"100%"}
        height={"100%"}
        padding={"15dvh 2% 2% 2%"}
        gap={"1%"}
        style={{
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(6, 1fr)",
          pointerEvents: "none",
        }}
      >
        <Box
          className="grid-block"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          style={{
            gridColumn: "1 / 6",
            gridRow: "3 / 4",
            pointerEvents: "auto",
          }}
          padding={"0% 2%"}
        >
          <Text
            className="reveal-text"
            color={theme.colors.white}
            fontSize={"10dvw"}
            fontWeight={700}
            lineHeight={"0.8"}
            style={{ display: "block" }}
          >
            LADATA
          </Text>
          <Text
            className="reveal-text"
            color={"rgba(255, 255, 255, 0.5)"}
            fontSize={"1.93dvw"}
            fontWeight={500}
            textTransform={"uppercase"}
            style={{ display: "block" }}
          >
            Liga Acadêmica de Ciência de Dados
          </Text>
        </Box>

        <Box
          className="grid-block"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-end"}
          style={{
            gridColumn: "6 / 7",
            gridRow: "1 / 3",
            pointerEvents: "auto",
          }}
          padding={"2%"}
        >
          <Text
            className="reveal-text"
            color={"rgba(255, 255, 255, 0.5)"}
            fontSize={"0.8dvw"}
            fontWeight={400}
            textTransform={"uppercase"}
            letterSpacing={"0.1dvw"}
            textAlign={"right"}
            style={{ display: "block" }}
          >
            DCOMP / UFS
          </Text>
          <Box
            className="accent-line"
            width={"100%"}
            height={"1px"}
            background={"rgba(255, 255, 255, 0.3)"}
            margin={"5% 0"}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-end"}
            gap={"5px"}
          >
            <Text
              className="reveal-text"
              color={theme.colors.white}
              fontSize={"0.8dvw"}
              fontWeight={700}
              textTransform={"uppercase"}
              textAlign={"right"}
              style={{ display: "block" }}
            >
              FUNDAÇÃO 2026
            </Text>
            <Text
              className="reveal-text"
              color={"rgba(255, 255, 255, 0.5)"}
              fontSize={"0.8dvw"}
              fontWeight={400}
              textTransform={"uppercase"}
              textAlign={"right"}
              style={{ display: "block" }}
            >
              10.9095° S, 37.0748° W
            </Text>
          </Box>
        </Box>

        <Box
          className="grid-block"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          alignItems={"flex-start"}
          style={{
            gridColumn: "5 / 7",
            gridRow: "4 / 7",
            pointerEvents: "auto",
          }}
          padding={"2%"}
        >
          <Text
            className="reveal-text"
            color={theme.colors.white}
            fontSize={"1.2dvw"}
            fontWeight={700}
            textTransform={"uppercase"}
            style={{ marginBottom: "10px", display: "block" }}
          >
            Estrutura
          </Text>
          <Box
            className="accent-line"
            width={"100%"}
            height={"1px"}
            background={"rgba(255, 255, 255, 0.2)"}
            margin={"2% 0"}
          />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Text
              className="reveal-text"
              color={"rgba(255, 255, 255, 0.5)"}
              fontSize={"0.8dvw"}
              style={{ display: "block" }}
            >
              PILARES
            </Text>
            <Text
              className="reveal-text"
              color={theme.colors.white}
              fontSize={"0.8dvw"}
              fontWeight={700}
              style={{ display: "block" }}
            >
              ENSINO / PESQUISA / EXTENSÃO
            </Text>
          </Box>
          <Box
            className="accent-line"
            width={"100%"}
            height={"1px"}
            background={"rgba(255, 255, 255, 0.2)"}
            margin={"2% 0"}
          />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Text
              className="reveal-text"
              color={"rgba(255, 255, 255, 0.5)"}
              fontSize={"0.8dvw"}
              style={{ display: "block" }}
            >
              MÉTODO
            </Text>
            <Text
              className="reveal-text"
              color={theme.colors.white}
              fontSize={"0.8dvw"}
              fontWeight={700}
              style={{ display: "block" }}
            >
              METODOLOGIAS ATIVAS
            </Text>
          </Box>
          <Box
            className="accent-line"
            width={"100%"}
            height={"1px"}
            background={"rgba(255, 255, 255, 0.2)"}
            margin={"2% 0"}
          />
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Text
              className="reveal-text"
              color={"rgba(255, 255, 255, 0.5)"}
              fontSize={"0.8dvw"}
              style={{ display: "block" }}
            >
              IMPACTO
            </Text>
            <Text
              className="reveal-text"
              color={theme.colors.white}
              fontSize={"0.8dvw"}
              fontWeight={700}
              style={{ display: "block" }}
            >
              ACADÊMICO E SOCIAL
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
