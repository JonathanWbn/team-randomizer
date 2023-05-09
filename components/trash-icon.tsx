import { motion } from "framer-motion";
import { useRef } from "react";
import { useFocus, useHover } from "../utils";

export const TrashIcon = ({ onClick }: { onClick: VoidFunction }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isButtonHovered = useHover(buttonRef);
  const isButtonFocused = useFocus(buttonRef);
  const shouldAnimate = isButtonHovered || isButtonFocused;

  return (
    <button
      className="flex h-4 w-4 flex-col items-center rounded p-0 text-transparent outline-none transition focus:text-gray-600 group-hover:text-gray-600"
      onClick={onClick}
      ref={buttonRef}
    >
      <motion.svg
        width="54"
        height="12"
        viewBox="0 0 54 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: shouldAnimate ? -4 : 0, rotate: shouldAnimate ? 10 : 0 }}
      >
        <path
          d="M52 10L48 10L6 10H2"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.855 9.99865L13.2913 8.75167C12.8123 9.35231 12.7197 10.1742 13.053 10.8664C13.3864 11.5586 14.0867 11.9986 14.855 11.9986V9.99865ZM39.1447 9.99865V11.9986C39.913 11.9986 40.6133 11.5586 40.9467 10.8664C41.28 10.1742 41.1874 9.35231 40.7084 8.75167L39.1447 9.99865ZM20.9255 2.38647V0.386475C20.3168 0.386475 19.7413 0.663634 19.3618 1.13949L20.9255 2.38647ZM33.0742 2.38647L34.6379 1.1395C34.2584 0.663634 33.6829 0.386475 33.0742 0.386475V2.38647ZM14.855 11.9986L39.1447 11.9986V7.99865L14.855 7.99865V11.9986ZM16.4186 11.2456L22.4891 3.63345L19.3618 1.13949L13.2913 8.75167L16.4186 11.2456ZM20.9255 4.38647L33.0742 4.38647V0.386475L20.9255 0.386475V4.38647ZM31.5106 3.63345L37.5811 11.2456L40.7084 8.75167L34.6379 1.1395L31.5106 3.63345Z"
          fill="currentColor"
        />
      </motion.svg>
      <svg
        width="46"
        height="52"
        viewBox="0 0 46 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.3735 46.4144L43.9482 2.49731C43.9759 2.23141 43.7673 2 43.5 2L2.5 2C2.23266 2 2.0241 2.23141 2.0518 2.49731L6.6265 46.4144C6.83876 48.4521 8.55628 50 10.605 50L35.395 50C37.4437 50 39.1612 48.4521 39.3735 46.4144Z"
          fill="transparent"
        />
        <path
          d="M2 2L6.6265 46.4144C6.83876 48.4521 8.55628 50 10.605 50L35.395 50C37.4437 50 39.1612 48.4521 39.3735 46.4144L44 2"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
