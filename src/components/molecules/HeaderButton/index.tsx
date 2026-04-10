import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import { theme } from "../../../style/THEME/theme";
import { Button, Text } from "../../atoms";

interface HeaderButtonProps {
  text: string;
  onClick: () => void;
  isActive?: boolean;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  onClick,
  isActive = false,
}) => {
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const isBold = isActive || isHovered;

  useLayoutEffect(() => {
    gsap.set(text1Ref.current, { yPercent: isBold ? -100 : 0 });
    gsap.set(text2Ref.current, { yPercent: isBold ? 0 : 100 });
  }, []);

  useEffect(() => {
    if (isBold) {
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
    } else {
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
    }
  }, [isBold]);

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
