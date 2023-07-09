import { motion } from "framer-motion";
import { useFocus, useHover } from "../utils/hooks";
import { useRef } from "react";

export const UpIcon = ({ onClick }: { onClick: VoidFunction }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isButtonHovered = useHover(buttonRef);
  const isButtonFocused = useFocus(buttonRef);
  const shouldAnimate = isButtonHovered || isButtonFocused;

  return (
    <button
      className="h-4 w-4 rounded p-0 text-transparent outline-none transition focus:text-gray-400 group-hover:text-gray-400"
      onClick={(event) => {
        event.currentTarget.blur();
        onClick();
      }}
      ref={buttonRef}
    >
      <motion.svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: shouldAnimate ? -4 : 0 }}
      >
        <path
          d="M32.0383 3.17057C32.0376 2.066 31.1416 1.17116 30.037 1.17188C28.9325 1.17259 28.0376 2.06861 28.0383 3.17318L32.0383 3.17057ZM30.0389 4.00013L28.0389 4.00144L30.0389 4.00013ZM30.0402 6.00013L28.0402 6.00144L30.0402 6.00013ZM30.0408 7.00013L28.0408 7.00144L30.0408 7.00013ZM30.0415 8.00013L32.0415 7.99883L30.0415 8.00013ZM30.0421 9.00013L32.0421 8.99883L30.0421 9.00013ZM30.0428 10.0001L32.0428 10.0001L32.0428 9.99883L30.0428 10.0001ZM28.0428 28.963C28.0428 30.0676 28.9382 30.963 30.0428 30.963C31.1474 30.963 32.0428 30.0676 32.0428 28.963L28.0428 28.963ZM32.0428 29.0001C32.0428 27.8956 31.1474 27.0001 30.0428 27.0001C28.9382 27.0001 28.0428 27.8956 28.0428 29.0001L32.0428 29.0001ZM28.0428 57.0002C28.0428 58.1047 28.9382 59.0002 30.0428 59.0002C31.1474 59.0002 32.0428 58.1047 32.0428 57.0002L28.0428 57.0002ZM28.0383 3.17318L28.0389 4.00144L32.0389 3.99883L32.0383 3.17057L28.0383 3.17318ZM28.0389 4.00144L28.0395 5.00144L32.0395 4.99883L32.0389 3.99883L28.0389 4.00144ZM28.0395 5.00144L28.0402 6.00144L32.0402 5.99883L32.0395 4.99883L28.0395 5.00144ZM28.0402 6.00144L28.0408 7.00144L32.0408 6.99883L32.0402 5.99883L28.0402 6.00144ZM28.0408 7.00144L28.0415 8.00144L32.0415 7.99883L32.0408 6.99883L28.0408 7.00144ZM28.0415 8.00144L28.0421 9.00144L32.0421 8.99883L32.0415 7.99883L28.0415 8.00144ZM28.0421 9.00144L28.0428 10.0014L32.0428 9.99883L32.0421 8.99883L28.0421 9.00144ZM28.0428 10.0001L28.0428 28.963L32.0428 28.963L32.0428 10.0001L28.0428 10.0001ZM28.0428 29.0001L28.0428 57.0002L32.0428 57.0002L32.0428 29.0001L28.0428 29.0001Z"
          fill="currentColor"
        />
        <path
          d="M58 29L33.7123 4.71231C31.6621 2.66206 28.3379 2.66205 26.2877 4.71231L2 29"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </button>
  );
};
