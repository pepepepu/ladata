import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Box, Text, Image } from "../../components";
import { theme } from "../../style/THEME/theme";

const diretoresData = [
  {
    id: "dir-1",
    name: "Pedro Barros",
    role: "Diretor de UI/UX & Frontend",
    since: "Desde 2024",
    course: "Engenharia da Computação",
    description:
      "Responsável pela arquitetura de interface e experiência de usuário nos projetos da liga. Entusiasta de animações e design minimalista.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    linkedin: "#",
    github: "#",
  },
  {
    id: "dir-2",
    name: "Ana Clara Silva",
    role: "Diretora de Pesquisa",
    since: "Desde 2023",
    course: "Ciência da Computação",
    description:
      "Líder das frentes de investigação acadêmica. Focada em machine learning e processamento de linguagem natural.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
    linkedin: "#",
    github: "#",
  },
  {
    id: "dir-3",
    name: "Lucas Menezes",
    role: "Diretor de Projetos",
    since: "Desde 2023",
    course: "Sistemas de Informação",
    description:
      "Coordena o desenvolvimento do SGD e outras soluções de impacto social. Especialista em metodologias ágeis.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
    linkedin: "#",
    github: "#",
  },
  {
    id: "dir-3",
    name: "Lucas Menezes",
    role: "Diretor de Projetos",
    since: "Desde 2023",
    course: "Sistemas de Informação",
    description:
      "Coordena o desenvolvimento do SGD e outras soluções de impacto social. Especialista em metodologias ágeis.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
    linkedin: "#",
    github: "#",
  },
  {
    id: "dir-4",
    name: "Mariana Costa",
    role: "Diretora de Extensão",
    since: "Desde 2024",
    course: "Estatística",
    description:
      "Faz a ponte entre a universidade e a comunidade através de eventos gamificados e parcerias estratégicas.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2000&auto=format&fit=crop",
    linkedin: "#",
    github: "#",
  },
];

const efetivosData = [
  {
    id: "efe-1",
    name: "João Santos",
    role: "Pesquisador",
    since: "Desde 2025",
    course: "Matemática Aplicada",
    description:
      "Atua na estruturação de modelos matemáticos para análise de dados do Portal do Servidor.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
    linkedin: "#",
    github: "#",
  },
  {
    id: "efe-2",
    name: "Beatriz Oliveira",
    role: "Desenvolvedora Backend",
    since: "Desde 2025",
    course: "Ciência da Computação",
    description:
      "Desenvolve e mantém as APIs que alimentam as visualizações interativas e dashboards da liga.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
    linkedin: "#",
    github: "#",
  },
  {
    id: "efe-3",
    name: "Carlos Eduardo",
    role: "Analista de Dados",
    since: "Desde 2025",
    course: "Engenharia de Computação",
    description:
      "Especialista em extração e higienização de bases de dados abertas do governo estadual.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
    linkedin: "#",
    github: "#",
  },
];

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const Members = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"diretores" | "efetivos">(
    "diretores",
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentData = activeTab === "diretores" ? diretoresData : efetivosData;
  const cardsVisible = 3;
  const maxIndex = Math.max(0, currentData.length - cardsVisible);

  useEffect(() => {
    let ctx: gsap.Context;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            tl.fromTo(
              ".membros-title",
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
                ".membros-tab",
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
                ".membros-carousel-wrapper",
                { opacity: 0, scale: 0.98 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 1.5,
                  ease: "power3.out",
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

  const handleTabChange = (tab: "diretores" | "efetivos") => {
    if (isAnimating || tab === activeTab) return;
    setIsAnimating(true);

    gsap.to(".membros-carousel-wrapper", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        setActiveTab(tab);
        setCurrentIndex(0);

        gsap.fromTo(
          ".membros-carousel-wrapper",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "expo.out",
            onComplete: () => setIsAnimating(false),
          },
        );
      },
    });
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Box
      id="membros"
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
          className="membros-title"
          color={theme.colors.white}
          fontSize={"5dvw"}
          fontWeight={900}
          lineHeight={"0.9"}
          textTransform={"uppercase"}
          style={{ display: "block" }}
        >
          Membros
        </Text>

        <Box
          display={"flex"}
          width={"100%"}
          gap={"3%"}
          margin={"1% 0 0 0"}
          borderBottom={"1px solid rgba(255, 255, 255, 0.2)"}
        >
          <Box
            className="membros-tab"
            onClick={() => handleTabChange("diretores")}
            cursor={"pointer"}
            position={"relative"}
            padding={"0.2% 0"}
          >
            <Text
              color={
                activeTab === "diretores"
                  ? theme.colors.white
                  : "rgba(255, 255, 255, 0.4)"
              }
              fontSize={"1dvw"}
              fontWeight={600}
              textTransform={"uppercase"}
              letterSpacing={"0.1dvw"}
              transition={"color 0.4s ease"}
            >
              Diretores
            </Text>
            <Box
              position={"absolute"}
              bottom={"-15px"}
              left={"0"}
              height={"2px"}
              width={"100%"}
              background={theme.colors.white}
              transform={activeTab === "diretores" ? "scaleX(1)" : "scaleX(0)"}
              transition={"transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"}
              style={{ transformOrigin: "left center" }}
            />
          </Box>
          <Box
            className="membros-tab"
            onClick={() => handleTabChange("efetivos")}
            cursor={"pointer"}
            position={"relative"}
            padding={"0.2% 0"}
          >
            <Text
              color={
                activeTab === "efetivos"
                  ? theme.colors.white
                  : "rgba(255, 255, 255, 0.4)"
              }
              fontSize={"1dvw"}
              fontWeight={600}
              textTransform={"uppercase"}
              letterSpacing={"0.1dvw"}
              transition={"color 0.4s ease"}
            >
              Efetivos
            </Text>
            <Box
              position={"absolute"}
              bottom={"-15px"}
              left={"0"}
              height={"2px"}
              width={"100%"}
              background={theme.colors.white}
              transform={activeTab === "efetivos" ? "scaleX(1)" : "scaleX(0)"}
              transition={"transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"}
              style={{ transformOrigin: "left center" }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        className="membros-carousel-wrapper"
        width={"100%"}
        flex={"1"}
        position={"relative"}
        margin={"3% 0 0 0"}
        overflow={"hidden"}
      >
        <Box
          display={"flex"}
          height={"100%"}
          gap={"2%"}
          transition={"transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"}
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / cardsVisible)}% - ${currentIndex * 0.66}%))`,
          }}
        >
          {currentData.map((member) => (
            <Box
              key={member.id}
              width={`calc(${100 / cardsVisible}% - 1.33%)`}
              minWidth={`calc(${100 / cardsVisible}% - 1.33%)`}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              background={"rgba(255, 255, 255, 0.02)"}
              border={"1px solid rgba(255, 255, 255, 0.05)"}
              borderRadius={"1rem"}
              overflow={"hidden"}
            >
              <Box width={"100%"} height={"45%"} position={"relative"}>
                <Image
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                  src={member.image}
                  alt={member.name}
                />
              </Box>

              <Box
                padding={"6%"}
                display={"flex"}
                flexDirection={"column"}
                flex={"1"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"flex-start"}
                  margin={"0 0 4% 0"}
                >
                  <Box>
                    <Text
                      color={theme.colors.white}
                      fontSize={"1.4dvw"}
                      fontWeight={700}
                      textTransform={"uppercase"}
                      lineHeight={"1.1"}
                    >
                      {member.name}
                    </Text>
                    <Text
                      color={"rgba(255, 255, 255, 0.5)"}
                      fontSize={"0.8dvw"}
                      fontWeight={600}
                      textTransform={"uppercase"}
                      letterSpacing={"0.05dvw"}
                      margin={"2% 0 0 0"}
                    >
                      {member.role}
                    </Text>
                  </Box>
                  <Text
                    color={"rgba(255, 255, 255, 0.3)"}
                    fontSize={"0.7dvw"}
                    fontWeight={500}
                  >
                    {member.since}
                  </Text>
                </Box>

                <Box
                  width={"100%"}
                  height={"1px"}
                  background={"rgba(255, 255, 255, 0.1)"}
                  margin={"4% 0"}
                />

                <Text
                  color={"rgba(255, 255, 255, 0.8)"}
                  fontSize={"0.8dvw"}
                  fontWeight={500}
                  margin={"0 0 4% 0"}
                >
                  {member.course}
                </Text>

                <Text
                  color={"rgba(255, 255, 255, 0.5)"}
                  fontSize={"0.85dvw"}
                  fontWeight={400}
                  lineHeight={"1.5"}
                  flex={"1"}
                >
                  {member.description}
                </Text>

                <Box display={"flex"} gap={"15px"} margin={"6% 0 0 0"}>
                  <Box
                    as="a"
                    href={member.linkedin}
                    target="_blank"
                    color={"rgba(255, 255, 255, 0.6)"}
                    transition={"color 0.3s ease"}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e: any) =>
                      (e.currentTarget.style.color = theme.colors.white)
                    }
                    onMouseLeave={(e: any) =>
                      (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")
                    }
                  >
                    <LinkedinIcon />
                  </Box>
                  <Box
                    as="a"
                    href={member.github}
                    target="_blank"
                    color={"rgba(255, 255, 255, 0.6)"}
                    transition={"color 0.3s ease"}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e: any) =>
                      (e.currentTarget.style.color = theme.colors.white)
                    }
                    onMouseLeave={(e: any) =>
                      (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")
                    }
                  >
                    <GithubIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          position={"absolute"}
          top={"50%"}
          left={"2%"}
          transform={"translateY(-50%)"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"3.5dvw"}
          height={"3.5dvw"}
          borderRadius={"50%"}
          background={"rgba(255, 255, 255, 0.05)"}
          border={"1px solid rgba(255, 255, 255, 0.1)"}
          cursor={currentIndex === 0 ? "default" : "pointer"}
          opacity={currentIndex === 0 ? 0 : 1}
          transition={"all 0.3s ease"}
          style={{
            backdropFilter: "blur(10px)",
            pointerEvents: currentIndex === 0 ? "none" : "auto",
          }}
          onClick={handlePrev}
          color={theme.colors.white}
          zIndex={10}
        >
          <ArrowLeft />
        </Box>

        <Box
          position={"absolute"}
          top={"50%"}
          right={"2%"}
          transform={"translateY(-50%)"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"3.5dvw"}
          height={"3.5dvw"}
          borderRadius={"50%"}
          background={"rgba(255, 255, 255, 0.05)"}
          border={"1px solid rgba(255, 255, 255, 0.1)"}
          cursor={currentIndex >= maxIndex ? "default" : "pointer"}
          opacity={currentIndex >= maxIndex ? 0 : 1}
          transition={"all 0.3s ease"}
          style={{
            backdropFilter: "blur(10px)",
            pointerEvents: currentIndex >= maxIndex ? "none" : "auto",
          }}
          onClick={handleNext}
          color={theme.colors.white}
          zIndex={10}
        >
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
};

export default Members;
