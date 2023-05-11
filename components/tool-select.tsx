import { motion } from "framer-motion";
import { Tool } from "../app/page";

const tools: Tool[] = ["teams", "pick"];

export const ToolSelect = ({
  selected,
  onSelect,
}: {
  selected: Tool;
  onSelect: (tool: Tool) => void;
}) => {
  return (
    <div className="flex gap-2 self-center rounded-lg border border-gray-300 p-1 text-sm text-gray-400">
      {tools.map((tool) => (
        <div
          key={tool}
          className={[
            "relative cursor-pointer rounded-md px-2 py-1 transition-colors hover:text-gray-600",
            tool === selected ? "text-gray-600" : "",
          ].join(" ")}
          onClick={() => onSelect(tool)}
        >
          {tool === selected && (
            <motion.div
              className="absolute inset-0 -z-10 rounded-md bg-slate-200"
              layoutId="selected-tool"
            />
          )}
          {upperCaseFirst(tool)}
        </div>
      ))}
    </div>
  );
};

function upperCaseFirst(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
