import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Box, Text } from "../../components";
import { theme } from "../../style/THEME/theme";

const mockEvents = [
  {
    id: "e1",
    date: 5,
    title: "Reunião de Alinhamento",
    location: "Sala DCOMP",
    time: "14:00",
    description: "Encontro mensal da diretoria para alinhamento de metas.",
  },
  {
    id: "e2",
    date: 15,
    title: "Expocomp 2026",
    location: "Auditório UFS",
    time: "08:00 - 18:00",
    description: "Apresentação dos projetos gamificados e estande da LADATA.",
  },
  {
    id: "e3",
    date: 22,
    title: "Workshop de Python",
    location: "Laboratório 3",
    time: "16:00",
    description:
      "Treinamento prático sobre manipulação de dados com Pandas e NumPy.",
  },
  {
    id: "e4",
    date: 28,
    title: "Submissão SGD",
    location: "Portal FAPESE",
    time: "23:59",
    description:
      "Prazo final para envio do relatório do Sistema de Gestão de Demandas.",
  },
];

const months = [
  "JANEIRO",
  "FEVEREIRO",
  "MARÇO",
  "ABRIL",
  "MAIO",
  "JUNHO",
  "JULHO",
  "AGOSTO",
  "SETEMBRO",
  "OUTUBRO",
  "NOVEMBRO",
  "DEZEMBRO",
];

const daysOfWeek = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

const Calendar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const remainingCells = (7 - (cells.length % 7)) % 7;
  const fullGrid: (number | null)[] = [
    ...cells,
    ...Array(remainingCells).fill(null),
  ];

  useEffect(() => {
    let ctx: gsap.Context;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

            tl.fromTo(
              ".calendar-title",
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
              ".calendar-cell",
              { opacity: 0, scale: 0.95 },
              {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.02,
              },
              "-=1",
            );
          }, containerRef);

          observer.disconnect();
        }
      },
      { threshold: 0.2 },
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
      id="calendario"
      ref={containerRef}
      minHeight={"100dvh"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      borderTop={"1px solid rgba(255, 255, 255, 0.1)"}
      position={"relative"}
      padding={"10dvh 8% 5% 8%"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        zIndex={2}
      >
        <Text
          className="calendar-title"
          color={theme.colors.white}
          fontSize={"5dvw"}
          fontWeight={900}
          lineHeight={"0.9"}
          textTransform={"uppercase"}
          style={{ display: "block" }}
        >
          Agenda
        </Text>
        <Box
          className="calendar-title"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
        >
          <Text
            color={"rgba(255, 255, 255, 0.5)"}
            fontSize={"1dvw"}
            fontWeight={600}
            textTransform={"uppercase"}
            letterSpacing={"0.2dvw"}
          >
            {currentYear}
          </Text>
          <Text
            color={theme.colors.white}
            fontSize={"2dvw"}
            fontWeight={800}
            textTransform={"uppercase"}
            letterSpacing={"0.1dvw"}
          >
            {months[currentMonth]}
          </Text>
        </Box>
      </Box>

      <Box
        width={"100%"}
        flex={"1"}
        display={"flex"}
        flexDirection={"column"}
        margin={"4% 0 0 0"}
        zIndex={2}
      >
        <Box
          display={"grid"}
          width={"100%"}
          margin={"0 0 1% 0"}
          style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
        >
          {daysOfWeek.map((day, idx) => (
            <Text
              key={`header-${idx}`}
              color={"rgba(255, 255, 255, 0.4)"}
              fontSize={"0.8dvw"}
              fontWeight={600}
              textTransform={"uppercase"}
              letterSpacing={"0.1dvw"}
              textAlign={"center"}
            >
              {day}
            </Text>
          ))}
        </Box>

        <Box
          display={"grid"}
          width={"100%"}
          flex={"1"}
          padding={"20px"}
          style={{
            gridTemplateColumns: "repeat(7, 1fr)",
            gridAutoRows: "1fr",
            gap: "1px",
            backgroundColor: "transparent",
          }}
          border={"1px solid rgba(255, 255, 255, 0.1)"}
        >
          {fullGrid.map((day, index) => {
            const event = day ? mockEvents.find((e) => e.date === day) : null;
            const isHovered = hoveredEventId === event?.id;
            const columnIndex = index % 7;

            let popupStyle: React.CSSProperties = {
              bottom: "100%",
              marginBottom: "15px",
              pointerEvents: "none",
              opacity: isHovered ? 1 : 0,
              visibility: isHovered ? "visible" : "hidden",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            };

            if (columnIndex === 0 || columnIndex === 1) {
              popupStyle.left = "0%";
              popupStyle.transformOrigin = "bottom left";
              popupStyle.transform = isHovered
                ? "translate(0%, 0) scale(1)"
                : "translate(0%, 10px) scale(0.95)";
            } else if (columnIndex === 5 || columnIndex === 6) {
              popupStyle.right = "0%";
              popupStyle.transformOrigin = "bottom right";
              popupStyle.transform = isHovered
                ? "translate(0%, 0) scale(1)"
                : "translate(0%, 10px) scale(0.95)";
            } else {
              popupStyle.left = "50%";
              popupStyle.transformOrigin = "bottom center";
              popupStyle.transform = isHovered
                ? "translate(-50%, 0) scale(1)"
                : "translate(-50%, 10px) scale(0.95)";
            }

            return (
              <Box
                key={`cell-${index}`}
                className="calendar-cell"
                background={event ? "rgba(255, 255, 255, 0.25)" : "transparent"}
                padding={"1dvw"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                position={"relative"}
                zIndex={isHovered ? 50 : 1}
                style={{
                  cursor: event ? "pointer" : "default",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={() => event && setHoveredEventId(event.id)}
                onMouseLeave={() => setHoveredEventId(null)}
              >
                <Text
                  color={
                    event ? theme.colors.white : "rgba(255, 255, 255, 0.3)"
                  }
                  fontSize={"1.2dvw"}
                  fontWeight={event ? 700 : 400}
                >
                  {day || ""}
                </Text>

                {event && (
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"0.5dvw"}
                    margin={"10% 0 0 0"}
                  >
                    <Box
                      width={"6px"}
                      height={"6px"}
                      borderRadius={"50%"}
                      background={theme.colors.white}
                    />
                    <Text
                      color={theme.colors.white}
                      fontSize={"0.7dvw"}
                      fontWeight={600}
                      textTransform={"uppercase"}
                      truncate
                    >
                      {event.title}
                    </Text>
                  </Box>
                )}

                {/* Popup ancorado na célula */}
                {event && (
                  <Box
                    position={"absolute"}
                    style={popupStyle}
                    background={"rgba(20, 20, 20, 0.95)"}
                    border={"1px solid rgba(255, 255, 255, 0.15)"}
                    borderRadius={"1rem"}
                    padding={"1.5rem"}
                    minWidth={"250px"}
                    width={"max-content"}
                    maxWidth={"22vw"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"0.8rem"}
                    boxShadow={"0 20px 40px rgba(0,0,0,0.5)"}
                  >
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      gap={"0.2rem"}
                    >
                      <Text
                        color={"rgba(255, 255, 255, 0.5)"}
                        fontSize={"0.7dvw"}
                        fontWeight={600}
                        textTransform={"uppercase"}
                        letterSpacing={"0.05dvw"}
                      >
                        {event.date} de {months[currentMonth]} • {event.time}
                      </Text>
                      <Text
                        color={theme.colors.white}
                        fontSize={"1.1dvw"}
                        fontWeight={800}
                        lineHeight={"1.1"}
                      >
                        {event.title}
                      </Text>
                    </Box>

                    <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <Text
                        color={"rgba(255, 255, 255, 0.8)"}
                        fontSize={"0.8dvw"}
                      >
                        {event.location}
                      </Text>
                    </Box>

                    <Box
                      height={"1px"}
                      width={"100%"}
                      background={"rgba(255, 255, 255, 0.1)"}
                    />

                    <Text
                      color={"rgba(255, 255, 255, 0.7)"}
                      fontSize={"0.85dvw"}
                      lineHeight={"1.4"}
                      fontWeight={400}
                      whiteSpace="normal"
                    >
                      {event.description}
                    </Text>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
