import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Box, Text, Image } from "../../components";
import { theme } from "../../style/THEME/theme";

const projetosData = [
  {
    id: "sgd",
    title: "Gestão de Demandas",
    category: "Pesquisa & Desenvolvimento",
    description:
      "Arquitetura e implementação do Sistema de Gestão de Demandas (SGD), concebido para otimizar o fluxo de relatórios e acompanhamento de projetos com integração direta de métricas e visualização avançada.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "expocomp",
    title: "Expocomp 2026",
    category: "Extensão",
    description:
      "Atividade interativa gamificada desenvolvida para o evento Expocomp, promovendo o engajamento e a difusão do conhecimento em Ciência de Dados através de dinâmicas práticas estruturadas pela LADATA.",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "sergipe",
    title: "Portal do Servidor",
    category: "Impacto Social",
    description:
      "Desenvolvimento da interface principal do Portal do Servidor do Estado de Sergipe, com foco em acessibilidade, alta performance e design centrado no usuário para milhares de servidores públicos.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "#",
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let ctx: gsap.Context;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            tl.fromTo(
              ".projetos-title",
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
                ".projetos-tab",
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  stagger: 0.1,
                },
                "-=1",
              )
              .fromTo(
                ".projetos-content-reveal",
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  stagger: 0.1,
                },
                "-=0.8",
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

  const handleTabChange = (index: number) => {
    if (isAnimating || index === activeTab) return;

    setIsAnimating(true);

    gsap.to(".projetos-content-reveal", {
      opacity: 0,
      y: -20,
      duration: 0.4,
      stagger: 0.05,
      ease: "power3.in",
      onComplete: () => {
        setActiveTab(index);

        gsap.fromTo(
          ".projetos-content-reveal",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "expo.out",
            onComplete: () => setIsAnimating(false),
          },
        );
      },
    });
  };

  const activeProject = projetosData[activeTab];

  return (
    <Box
      id="projetos"
      ref={containerRef}
      height={"100dvh"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      borderTop={"1px solid rgba(255, 255, 255, 0.1)"}
      position={"relative"}
      overflow={"hidden"}
      padding={"10dvh 8% 5% 8%"}
    >
      <Box width={"100%"} display={"flex"} flexDirection={"column"} zIndex={2}>
        <Text
          className="projetos-title"
          color={theme.colors.white}
          fontSize={"5dvw"}
          fontWeight={900}
          lineHeight={"0.9"}
          textTransform={"uppercase"}
          style={{ display: "block" }}
        >
          Projetos
        </Text>

        <Box
          display={"flex"}
          width={"100%"}
          gap={"3%"}
          margin={"2% 0 0 0"}
          borderBottom={"1px solid rgba(255, 255, 255, 0.2)"}
        >
          {projetosData.map((project, index) => (
            <Box
              key={project.id}
              className="projetos-tab"
              onClick={() => handleTabChange(index)}
              cursor={"pointer"}
              position={"relative"}
              padding={"0.2% 0"}
            >
              <Text
                color={
                  activeTab === index
                    ? theme.colors.white
                    : "rgba(255, 255, 255, 0.4)"
                }
                fontSize={"1dvw"}
                fontWeight={600}
                textTransform={"uppercase"}
                letterSpacing={"-0.05dvw"}
                transition={"color 0.4s ease"}
              >
                {project.title}
              </Text>
              <Box
                position={"absolute"}
                bottom={"-5px"}
                left={"0"}
                height={"2px"}
                width={"100%"}
                background={theme.colors.white}
                transform={activeTab === index ? "scaleX(1)" : "scaleX(0)"}
                transition={"transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"}
                style={{ transformOrigin: "left center" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        width={"100%"}
        flex={"1"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        margin={"3% 0 0 0"}
      >
        <Box
          width={"40%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          padding={"0 5% 0 0"}
        >
          <Text
            className="projetos-content-reveal"
            color={"rgba(255, 255, 255, 0.5)"}
            fontSize={"0.9dvw"}
            fontWeight={600}
            textTransform={"uppercase"}
            letterSpacing={"0.15dvw"}
            margin={"0 0 4% 0"}
          >
            {activeProject.category}
          </Text>

          <Text
            className="projetos-content-reveal"
            color={theme.colors.white}
            fontSize={"3.5dvw"}
            fontWeight={800}
            lineHeight={"1"}
            textTransform={"uppercase"}
            margin={"0 0 6% 0"}
          >
            {activeProject.title}
          </Text>

          <Text
            className="projetos-content-reveal"
            color={"rgba(255, 255, 255, 0.7)"}
            fontSize={"1.1dvw"}
            fontWeight={400}
            lineHeight={"1.2"}
            margin={"0 0 8% 0"}
          >
            {activeProject.description}
          </Text>

          <Box
            className="projetos-content-reveal"
            display={"flex"}
            gap={"4%"}
            alignItems={"center"}
          >
            <Box
              as="a"
              href={activeProject.link}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"1rem 2rem"}
              border={"1px solid rgba(255, 255, 255, 0.3)"}
              borderRadius={"2rem"}
              cursor={"pointer"}
              background={"transparent"}
              transition={"all 0.3s ease"}
              textDecoration={"none"}
            >
              <Text
                color={theme.colors.white}
                fontSize={"0.8dvw"}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                Ver Detalhes
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          width={"60%"}
          height={"90%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Box
            className="projetos-content-reveal"
            width={"100%"}
            height={"100%"}
            background={"rgba(255, 255, 255, 0.05)"}
            borderRadius={"1rem"}
            overflow={"hidden"}
            position={"relative"}
          >
            <Image
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
              src={activeProject.imageUrl}
              alt={activeProject.title}
              style={{ filter: "brightness(0.8)" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
