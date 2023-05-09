import { motion } from "framer-motion";
import { useRef } from "react";
import { useFocus, useHover } from "../utils";

export const PickButton = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: VoidFunction;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isButtonHovered = useHover(buttonRef);
  const shouldAnimate = isButtonHovered;

  return (
    <motion.button
      className="relative w-24 rounded-lg bg-gradient-to-br from-[#007CF0] to-[#00DFD8] text-[#0087b6] shadow shadow-[#0087b6]/40 transition-all hover:shadow-md hover:shadow-[#0087b6]/40"
      initial={{ opacity: disabled ? 0 : 1 }}
      animate={{ opacity: disabled ? 0 : 1 }}
      ref={buttonRef}
      onClick={onClick}
    >
      <div className="absolute inset-0.5 rounded-md bg-white" />
      <MemberIcon x={shouldAnimate ? 23 : 5} />
      <MemberIcon x={shouldAnimate ? 35 : 16} />
      <MemberIcon x={shouldAnimate ? -5 : 27} />
      <MemberIcon x={shouldAnimate ? 47 : 38} />
    </motion.button>
  );
};

const MemberIcon = ({ x }: { x: number }) => (
  <motion.svg
    width="52"
    height="20"
    viewBox="0 0 52 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ x }}
    animate={{ x }}
    className="absolute left-0 top-2"
  >
    <path
      d="M46 61L6.00001 61C3.79087 61 2 59.2091 2 57C2 50.3836 6.10481 44.4615 12.3003 42.1395L13.5304 41.6785C21.5704 38.6651 30.4296 38.6651 38.4696 41.6785L39.6997 42.1395C45.8952 44.4615 50 50.3836 50 57C50 59.2091 48.2091 61 46 61Z"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M19.9015 29.8673C23.7294 31.8336 28.2706 31.8336 32.0985 29.8673C35.6611 28.0373 38.2136 24.7042 39.0516 20.7878L39.2752 19.7425C40.1322 15.7375 39.2168 11.5576 36.7644 8.27737L36.4053 7.79702C33.9525 4.51632 30.0962 2.5845 26 2.5845C21.9038 2.5845 18.0475 4.51632 15.5947 7.79702L15.2356 8.27737C12.7832 11.5576 11.8678 15.7375 12.7248 19.7425L12.9484 20.7878C13.7864 24.7042 16.3389 28.0373 19.9015 29.8673Z"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);
