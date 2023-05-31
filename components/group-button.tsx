import { useRef } from "react";
import { useHover } from "../utils/hooks";
import { MemberIcon } from "./member-icon";

export const GroupButton = ({ onClick }: { onClick: VoidFunction }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isButtonHovered = useHover(buttonRef);
  const shouldAnimate = isButtonHovered;

  return (
    <button
      className="relative w-24 rounded-lg bg-gradient-to-br from-[#7928CA] to-[#FF0081] text-[#982abe] shadow shadow-[#982abe]/40 outline-none transition-all hover:shadow-md hover:shadow-[#982abe]/40 focus:shadow-lg focus:shadow-[#982abe]/40"
      ref={buttonRef}
      onClick={onClick}
      tabIndex={2}
    >
      <div className="absolute inset-0.5 rounded-md bg-white" />
      <MemberIcon x={shouldAnimate ? 6 : -5} />
      <MemberIcon x={shouldAnimate ? -5 : 36} />
      <MemberIcon x={shouldAnimate ? 47 : 6} />
      <MemberIcon x={shouldAnimate ? 36 : 47} />
    </button>
  );
};
