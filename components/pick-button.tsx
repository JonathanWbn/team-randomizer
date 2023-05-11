import { useRef } from "react";
import { useHover } from "../utils";
import { MemberIcon } from "./member-icon";

export const PickButton = ({ onClick }: { onClick: VoidFunction }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isButtonHovered = useHover(buttonRef);
  const shouldAnimate = isButtonHovered;

  return (
    <button
      className="relative w-24 rounded-lg bg-gradient-to-br from-[#007CF0] to-[#00DFD8] text-[#0087b6] shadow shadow-[#0087b6]/40 transition-all hover:shadow-md hover:shadow-[#0087b6]/40"
      ref={buttonRef}
      onClick={onClick}
    >
      <div className="absolute inset-0.5 rounded-md bg-white" />
      <MemberIcon x={shouldAnimate ? 23 : 5} />
      <MemberIcon x={shouldAnimate ? 35 : 16} />
      <MemberIcon x={shouldAnimate ? -5 : 27} />
      <MemberIcon x={shouldAnimate ? 47 : 38} />
    </button>
  );
};
