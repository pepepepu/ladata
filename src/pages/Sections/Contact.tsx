import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Box, Text } from "../../components";
import { theme } from "../../style/THEME/theme";

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            tl.fromTo(
              ".contact-reveal-text",
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
                ".contact-accent-line",
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
                ".contact-item",
                { opacity: 0, x: 30 },
                {
                  opacity: 1,
                  x: 0,
                  duration: 1.2,
                  stagger: 0.15,
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
      id="contato"
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
        width={"50%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        padding={"0 0 0 8%"}
      >
        <Text
          className="contact-reveal-text"
          color={theme.colors.white}
          fontSize={"6dvw"}
          fontWeight={400}
          lineHeight={"0.9"}
          letterSpacing={-5}
          style={{ display: "block" }}
        >
          Vamos
        </Text>
        <Text
          className="contact-reveal-text"
          color={theme.colors.white}
          fontSize={"6dvw"}
          fontWeight={900}
          lineHeight={"0.9"}
          textTransform={"uppercase"}
          style={{ display: "block" }}
        >
          Conectar?
        </Text>

        <Box
          className="contact-accent-line"
          width={"20%"}
          height={"2px"}
          background={"rgba(255, 255, 255, 0.5)"}
          margin={"5% 0"}
        />

        <Text
          className="contact-reveal-text"
          color={"rgba(255, 255, 255, 0.7)"}
          fontSize={"1.2dvw"}
          fontWeight={400}
          lineHeight={"1.4"}
          maxWidth={"80%"}
          style={{ display: "block" }}
        >
          Tem interesse em parcerias, projetos de pesquisa, ou quer entender
          mais sobre como a ciência de dados pode transformar o seu cenário?
          Fale com a gente.
        </Text>
      </Box>

      <Box
        width={"50%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        padding={"0 8% 0 5%"}
        gap={"2dvw"}
      >
        <Box
          as="a"
          href="mailto:ladata@dcomp.ufs.br"
          className="contact-item"
          display={"flex"}
          alignItems={"center"}
          gap={"1.5dvw"}
          padding={"2dvw"}
          background={"rgba(255, 255, 255, 0.03)"}
          border={"1px solid rgba(255, 255, 255, 0.05)"}
          borderRadius={"1rem"}
          style={{ textDecoration: "none", cursor: "pointer" }}
          transition={"all 0.3s ease"}
        >
          <Box color={theme.colors.white}>
            <MailIcon />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"0.3dvw"}>
            <Text
              color={"rgba(255, 255, 255, 0.5)"}
              fontSize={"0.8dvw"}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              Email Direto
            </Text>
            <Text
              color={theme.colors.white}
              fontSize={"1.2dvw"}
              fontWeight={500}
            >
              ladata@dcomp.ufs.br
            </Text>
          </Box>
        </Box>

        <Box
          className="contact-item"
          display={"flex"}
          alignItems={"center"}
          gap={"1.5dvw"}
          padding={"2dvw"}
          background={"rgba(255, 255, 255, 0.03)"}
          border={"1px solid rgba(255, 255, 255, 0.05)"}
          borderRadius={"1rem"}
        >
          <Box color={theme.colors.white}>
            <MapPinIcon />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"0.3dvw"}>
            <Text
              color={"rgba(255, 255, 255, 0.5)"}
              fontSize={"0.8dvw"}
              fontWeight={600}
              textTransform={"uppercase"}
            >
              Sede Administrativa
            </Text>
            <Text
              color={theme.colors.white}
              fontSize={"1dvw"}
              fontWeight={500}
              lineHeight={"1.4"}
            >
              Departamento de Computação (DCOMP)
              <br />
              Universidade Federal de Sergipe (UFS)
              <br />
              São Cristóvão, SE
            </Text>
          </Box>
        </Box>

        <Box
          className="contact-item"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"1.5dvw 2dvw"}
          background={"rgba(255, 255, 255, 0.03)"}
          border={"1px solid rgba(255, 255, 255, 0.05)"}
          borderRadius={"1rem"}
        >
          <Text
            color={"rgba(255, 255, 255, 0.8)"}
            fontSize={"1dvw"}
            fontWeight={600}
          >
            Acompanhe nossas redes:
          </Text>
          <Box display={"flex"} gap={"1dvw"}>
            <Box
              as="a"
              href="https://linkedin.com"
              target="_blank"
              color={theme.colors.white}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"0.8dvw"}
              background={"rgba(255, 255, 255, 0.05)"}
              borderRadius={"50%"}
              transition={"all 0.3s ease"}
              style={{ cursor: "pointer" }}
            >
              <LinkedInIcon />
            </Box>
            <Box
              as="a"
              href="https://instagram.com"
              target="_blank"
              color={theme.colors.white}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"0.8dvw"}
              background={"rgba(255, 255, 255, 0.05)"}
              borderRadius={"50%"}
              transition={"all 0.3s ease"}
              style={{ cursor: "pointer" }}
            >
              <InstagramIcon />
            </Box>
            <Box
              as="a"
              href="https://github.com"
              target="_blank"
              color={theme.colors.white}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              padding={"0.8dvw"}
              background={"rgba(255, 255, 255, 0.05)"}
              borderRadius={"50%"}
              transition={"all 0.3s ease"}
              style={{ cursor: "pointer" }}
            >
              <GitHubIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
