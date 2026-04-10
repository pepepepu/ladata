import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Box, Text } from "../../components";
import { theme } from "../../style/THEME/theme";

const ArrowRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const JoinUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let ctx: gsap.Context;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            tl.fromTo(
              ".join-reveal-text",
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
            ).fromTo(
              ".join-form-element",
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.1,
              },
              "-=1",
            );
          }, containerRef);

          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      ctx?.revert();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      gsap.fromTo(
        ".join-success-element",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "expo.out", stagger: 0.1 },
      );
    }
  };

  return (
    <Box
      id="junte-se"
      ref={containerRef}
      height={"100dvh"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      borderTop={"1px solid rgba(255, 255, 255, 0.1)"}
      position={"relative"}
      overflow={"hidden"}
      padding={"0 8%"}
    >
      <Box
        width={"100%"}
        maxWidth={"60dvw"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
        zIndex={2}
      >
        {!isSubmitted ? (
          <>
            <Text
              className="join-reveal-text"
              color={theme.colors.white}
              fontSize={"6dvw"}
              fontWeight={400}
              lineHeight={"0.9"}
              letterSpacing={-5}
              style={{ display: "block" }}
            >
              Acompanhe o
            </Text>
            <Text
              className="join-reveal-text"
              color={theme.colors.white}
              fontSize={"6dvw"}
              fontWeight={900}
              lineHeight={"0.9"}
              textTransform={"uppercase"}
              style={{ display: "block" }}
            >
              Ecossistema
            </Text>

            <Box
              className="join-reveal-text"
              width={"10%"}
              height={"2px"}
              background={"rgba(255, 255, 255, 0.5)"}
              margin={"5% 0"}
            />

            <Text
              className="join-reveal-text"
              color={"rgba(255, 255, 255, 0.7)"}
              fontSize={"1.2dvw"}
              fontWeight={400}
              lineHeight={"1.6"}
              maxWidth={"80%"}
              margin={"0 0 6% 0"}
              style={{ display: "block" }}
            >
              Inscreva-se em nossa newsletter para ser o primeiro a saber sobre
              novos processos seletivos, eventos abertos e insights em Ciência
              de Dados desenvolvidos pela LADATA.
            </Text>

            <Box
              as="form"
              className="join-form-element"
              onSubmit={handleSubmit}
              display={"flex"}
              width={"100%"}
              maxWidth={"40dvw"}
              background={"rgba(255, 255, 255, 0.03)"}
              border={"1px solid rgba(255, 255, 255, 0.1)"}
              borderRadius={"4rem"}
              padding={"0.5rem"}
              alignItems={"center"}
              transition={"border-color 0.3s ease"}
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Box
                as="input"
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
                background={"transparent"}
                border={"none"}
                color={theme.colors.white}
                fontSize={"1dvw"}
                flex={"1"}
                padding={"0 1.5rem"}
                style={{ outline: "none" }}
              />
              <Box
                as="button"
                type="submit"
                background={theme.colors.white}
                color={"black"}
                border={"none"}
                borderRadius={"3rem"}
                padding={"1rem 2rem"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"0.5rem"}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
              >
                <Text
                  color={"black"}
                  fontSize={"0.9dvw"}
                  fontWeight={700}
                  textTransform={"uppercase"}
                >
                  Inscrever
                </Text>
                <ArrowRight />
              </Box>
            </Box>
          </>
        ) : (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"2rem"}
          >
            <Box
              className="join-success-element"
              color={theme.colors.white}
              background={"rgba(255, 255, 255, 0.1)"}
              padding={"2rem"}
              borderRadius={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <CheckIcon />
            </Box>
            <Text
              className="join-success-element"
              color={theme.colors.white}
              fontSize={"3dvw"}
              fontWeight={800}
              textTransform={"uppercase"}
            >
              Bem-vindo à rede
            </Text>
            <Text
              className="join-success-element"
              color={"rgba(255, 255, 255, 0.7)"}
              fontSize={"1.2dvw"}
              fontWeight={400}
            >
              Seu e-mail foi cadastrado com sucesso. Em breve você receberá
              nossas novidades.
            </Text>
          </Box>
        )}
      </Box>

      <Box
        position={"absolute"}
        bottom={"-20%"}
        right={"-10%"}
        width={"50dvw"}
        height={"50dvw"}
        background={
          "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)"
        }
        borderRadius={"50%"}
        zIndex={1}
        style={{ pointerEvents: "none" }}
      />
    </Box>
  );
};

export default JoinUs;
