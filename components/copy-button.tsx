import copy from "copy-to-clipboard";
import { ClipboardIcon } from "./clipboard-icon";
import { Team } from "../app/page";
import { motion } from "framer-motion";
import { useHover } from "../utils/hooks";
import { useEffect, useRef, useState } from "react";

export const CopyButton = ({ groups }: { groups: Team[] }) => {
  const [hasJustCopied, setHasJustCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isButtonHovered = useHover(buttonRef);

  useEffect(() => {
    if (hasJustCopied) {
      const timeoutRef = setTimeout(() => setHasJustCopied(false), 2000);
      return () => clearTimeout(timeoutRef);
    }
  }, [hasJustCopied]);

  const groupsAsText = groups
    .map((group) => group.map((member) => member.name).join("\n"))
    .join("\n-----------\n");

  return (
    <div className="flex items-center">
      <motion.div
        className="mr-2 text-sm font-light text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasJustCopied ? 1 : 0 }}
      >
        Copied!
      </motion.div>
      <motion.button
        ref={buttonRef}
        className={[
          "cursor-pointer transition-colors",
          hasJustCopied
            ? "text-[#982abe]"
            : "text-gray-400 hover:text-gray-600",
        ].join(" ")}
        onClick={() => {
          copy(groupsAsText, { format: "text/plain" });
          setHasJustCopied(true);
        }}
        animate={{ rotate: hasJustCopied ? -25 : isButtonHovered ? -15 : 0 }}
      >
        <ClipboardIcon />
      </motion.button>
    </div>
  );
};
