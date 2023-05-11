import { MutableRefObject, useEffect, useState } from "react";

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
