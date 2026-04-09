import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { theme } from "../../../style/THEME/theme";
import { Button, Text } from "../../atoms";

interface HeaderButtonProps {
  text: string;
  onClick: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, onClick }) => {
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.set(text2Ref.current, { yPercent: 100 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(text1Ref.current, {
      yPercent: -100,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(text2Ref.current, {
      yPercent: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(text1Ref.current, {
      yPercent: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
    gsap.to(text2Ref.current, {
      yPercent: 100,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <Button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: "transparent",
        border: "none",
        padding: "0%",
        cursor: "pointer",
        overflow: "hidden",
        display: "inline-flex",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "grid",
          position: "relative",
        }}
      >
        <div
          ref={text1Ref}
          style={{
            gridArea: "1 / 1",
            lineHeight: "1.2",
            padding: "2% 0%",
          }}
        >
          <Text
            textTransform={"uppercase"}
            color={theme.colors.white}
            fontWeight={400}
            fontSize={".8dvw"}
          >
            {text}
          </Text>
        </div>
        <div
          ref={text2Ref}
          style={{
            gridArea: "1 / 1",
            lineHeight: "1.2",
            padding: "2% 0%",
          }}
        >
          <Text
            textTransform={"uppercase"}
            color={theme.colors.white}
            fontWeight={700}
            fontSize={".8dvw"}
          >
            {text}
          </Text>
        </div>
      </div>
    </Button>
  );
};

export default HeaderButton;
