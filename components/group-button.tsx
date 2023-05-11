import { useRef } from "react";
import { useHover } from "../utils";
import { MemberIcon } from "./member-icon";

export const GroupButton = ({ onClick }: { onClick: VoidFunction }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isButtonHovered = useHover(buttonRef);
  const shouldAnimate = isButtonHovered;

  return (
    <button
      className="relative w-24 rounded-lg bg-gradient-to-br from-[#7928CA] to-[#FF0081] text-[#982abe] shadow shadow-[#982abe]/40 outline-none transition-all hover:shadow-md hover:shadow-[#982abe]/40"
      ref={buttonRef}
      onClick={onClick}
    >
      <div className="absolute inset-0.5 rounded-md bg-white" />
      <MemberIcon x={shouldAnimate ? -5 : 5} />
      <MemberIcon x={shouldAnimate ? 36 : 16} />
      <MemberIcon x={shouldAnimate ? 6 : 27} />
      <MemberIcon x={shouldAnimate ? 47 : 38} />
    </button>
  );
};
