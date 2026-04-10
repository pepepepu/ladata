import { useEffect, useState } from "react";
import { Box, Image } from "../../atoms";
import lettermark from "../../../assets/icons/lettermark.png";
import { HeaderButton } from "../../molecules";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "sobre",
      "projetos",
      "membros",
      "junte-se",
      "calendario",
      "contato",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      width={"100%"}
      height={"15dvh"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"25px 60px"}
      position={"fixed"}
      top={"0%"}
      left={"0%"}
      zIndex={100}
      background={"transparent"}
    >
      <Box
        height={"60%"}
        style={{ cursor: "pointer" }}
        onClick={() => handleScroll("hero")}
      >
        <Image src={lettermark} height={"100%"} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        height={"100%"}
        gap={"3%"}
        width={"100%"}
      >
        <HeaderButton
          text="Sobre"
          onClick={() => handleScroll("sobre")}
          isActive={activeSection === "sobre"}
        />
        <HeaderButton
          text="Projetos"
          onClick={() => handleScroll("projetos")}
          isActive={activeSection === "projetos"}
        />
        <HeaderButton
          text="Membros"
          onClick={() => handleScroll("membros")}
          isActive={activeSection === "membros"}
        />
        <HeaderButton
          text="Calendário"
          onClick={() => handleScroll("calendario")}
          isActive={activeSection === "calendario"}
        />
        <HeaderButton
          text="Junte-se a Nós"
          onClick={() => handleScroll("junte-se")}
          isActive={activeSection === "junte-se"}
        />
        <HeaderButton
          text="Contato"
          onClick={() => handleScroll("contato")}
          isActive={activeSection === "contato"}
        />
      </Box>
    </Box>
  );
};

export default Header;
