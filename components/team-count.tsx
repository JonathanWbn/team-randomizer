import { motion } from "framer-motion";
import { Team } from "../app/page";
import { TrashIcon } from "./trash-icon";

export const TeamCount = ({
  team,
  onDelete,
}: {
  team: Team;
  onDelete: VoidFunction;
}) =>
  team.length > 1 ? (
    <div className="group mr-1 mt-3 flex items-center justify-end gap-2">
      <motion.div
        className="text-sm tracking-wide text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {team.length} members
      </motion.div>
      <TrashIcon onClick={onDelete} />
    </div>
  ) : null;
