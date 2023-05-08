import { MutableRefObject, useEffect, useState } from "react";
import { Team } from "./app/page";

export function splitInGroups(team: Team) {
  const shuffledTeam = [...team].sort(() => Math.random() - 0.5);

  const round = Math.random() > 0.5 ? Math.ceil : Math.floor;
  const splitIndex = round(shuffledTeam.length / 2);

  const groups = [
    shuffledTeam.slice(0, splitIndex),
    shuffledTeam.slice(splitIndex),
  ];

  return groups;
}

export function useHover(ref: MutableRefObject<HTMLElement>) {
  const [value, setValue] = useState(false);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref]);
  return value;
}

export function useFocus(ref: MutableRefObject<HTMLElement>) {
  const [value, setValue] = useState(false);
  const handleFocus = () => setValue(true);
  const handleBlur = () => setValue(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("focus", handleFocus);
      node.addEventListener("blur", handleBlur);
      return () => {
        node.removeEventListener("focus", handleFocus);
        node.removeEventListener("blur", handleBlur);
      };
    }
  }, [ref]);
  return value;
}
