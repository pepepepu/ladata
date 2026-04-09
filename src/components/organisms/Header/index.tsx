import { theme } from "../../../style/THEME/theme";
import { Box, Image } from "../../atoms";
import { HeaderButtom } from "../../molecules";

import lettermark from "../../../assets/icons/lettermark.png";

const Header = () => {
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
      background={theme.colors.black}
    >
      <Image src={lettermark} height={"60%"} />
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        height={"100%"}
        gap={"3%"}
        width={"100%"}
      >
        <HeaderButtom text="Sobre" onClick={() => {}} />
        <HeaderButtom text="Projetos" onClick={() => {}} />
        <HeaderButtom text="Membros" onClick={() => {}} />
        <HeaderButtom text="Junte-se a Nós" onClick={() => {}} />
        <HeaderButtom text="Calendário" onClick={() => {}} />
        <HeaderButtom text="Contato" onClick={() => {}} />
      </Box>
    </Box>
  );
};

export default Header;
