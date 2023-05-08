import { motion } from "framer-motion";
import { Tool } from "../app/page";

export const ToolSelect = ({
  tool,
  onSelect,
}: {
  tool: Tool;
  onSelect: (tool: Tool) => void;
}) => {
  return (
    <div className="flex gap-2 self-center rounded-lg border border-gray-200 p-1 text-sm text-gray-400">
      <ToolItem
        tool="group"
        onClick={() => onSelect("group")}
        isSelected={tool === "group"}
      />
      <ToolItem
        tool="pick"
        onClick={() => onSelect("pick")}
        isSelected={tool === "pick"}
      />
    </div>
  );
};

const ToolItem = ({
  tool,
  isSelected,
  onClick,
}: {
  tool: Tool;
  onClick: VoidFunction;
  isSelected: boolean;
}) => {
  return (
    <div
      className={[
        "relative cursor-pointer rounded-md px-2 py-1 transition-colors hover:text-gray-600",
        isSelected ? "text-gray-600" : "",
      ].join(" ")}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 -z-10 rounded-md bg-slate-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: isSelected ? 1 : 0 }}
      />
      {upperCaseFirst(tool)}
    </div>
  );
};

function upperCaseFirst(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
