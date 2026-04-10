import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Box, Text, Image } from "../../components";
import { theme } from "../../style/THEME/theme";

const Sobre = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            tl.fromTo(
              ".sobre-reveal-text",
              {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 150%, 0% 150%)",
                y: 50,
              },
              {
                clipPath: "polygon(0% -50%, 100% -50%, 100% 150%, 0% 150%)",
                y: 0,
                duration: 1.5,
                stagger: 0.1,
              },
            )
              .fromTo(
                ".sobre-accent-line",
                { scaleX: 0 },
                {
                  scaleX: 1,
                  duration: 1.5,
                  ease: "power4.inOut",
                  transformOrigin: "left center",
                },
                "-=1.2",
              )
              .fromTo(
                ".sobre-image-container",
                { opacity: 0, scale: 0.95 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 1.5,
                  ease: "power3.out",
                },
                "-=1",
              );
          }, containerRef);

          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      ctx?.revert();
    };
  }, []);

  return (
    <Box
      id="sobre"
      ref={containerRef}
      height={"100dvh"}
      width={"100%"}
      display={"flex"}
      flexDirection={"row"}
      borderTop={"1px solid rgba(255, 255, 255, 0.1)"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        width={"70%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        padding={"0 8%"}
      >
        <Text
          className="sobre-reveal-text"
          color={theme.colors.white}
          fontSize={"6dvw"}
          fontWeight={400}
          lineHeight={"0.9"}
          letterSpacing={-10}
          style={{ display: "block" }}
        >
          Quem é a
        </Text>
        <Text
          className="sobre-reveal-text"
          color={theme.colors.white}
          fontSize={"6dvw"}
          fontWeight={900}
          lineHeight={"0.9"}
          textTransform={"uppercase"}
          style={{ display: "block" }}
        >
          Ladata?
        </Text>

        <Box
          className="sobre-accent-line"
          width={"15%"}
          height={"2px"}
          background={"rgba(255, 255, 255, 0.5)"}
          margin={"4% 0"}
        />

        <Text
          className="sobre-reveal-text"
          color={"rgba(255, 255, 255, 0.7)"}
          fontSize={"1.2dvw"}
          fontWeight={400}
          lineHeight={"1.2"}
          maxWidth={"85%"}
          style={{ display: "block" }}
        >
          A Liga Acadêmica de Ciência de Dados da Universidade Federal de
          Sergipe (DCOMP/UFS) é um ecossistema dedicado à exploração do novo
          petróleo. Estruturada sobre os pilares de ensino, pesquisa e extensão,
          a LADATA visa formar profissionais de excelência preparados para os
          desafios reais da tecnologia e análise de dados.
        </Text>

        <Text
          className="sobre-reveal-text"
          color={"rgba(255, 255, 255, 0.7)"}
          fontSize={"1.2dvw"}
          fontWeight={400}
          lineHeight={"1.2"}
          maxWidth={"85%"}
          margin={"2% 0 0 0"}
          style={{ display: "block" }}
        >
          Através de metodologias ativas, promovemos o desenvolvimento de
          projetos, competições e eventos que impactam diretamente a comunidade
          acadêmica e social.
        </Text>
      </Box>

      <Box
        width={"30%"}
        height={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"5% 5% 5% 0"}
      >
        <Box
          className="sobre-image-container"
          width={"100%"}
          height={"70%"}
          background={"rgba(255, 255, 255, 0.05)"}
          borderRadius={"1rem"}
          overflow={"hidden"}
          position={"relative"}
        >
          <Image
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            src={""}
            alt={""}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Sobre;
