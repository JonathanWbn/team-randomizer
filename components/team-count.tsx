import { motion } from "framer-motion";
import { Team } from "../app/page";

export const TeamCount = ({ team }: { team: Team }) =>
  team.length > 1 ? (
    <motion.div
      className="mr-2 mt-2 text-right text-sm tracking-wide text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {team.length} members
    </motion.div>
  ) : null;
