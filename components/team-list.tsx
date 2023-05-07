import { motion, AnimatePresence } from "framer-motion";
import { Member, Team } from "../app/page";
import { TrashIcon } from "./trash-icon";

export const TeamList = ({
  team,
  onChange,
  onDelete,
}: {
  team: Team;
  onChange: (member: Member) => void;
  onDelete: (member: Member) => void;
}) => {
  return (
    <>
      <div className="mt-3 divide-y divide-dashed rounded-lg bg-white text-gray-900 drop-shadow-sm">
        <AnimatePresence>
          {team.map((member) => (
            <motion.div
              key={member.id}
              className="group flex items-center gap-2 px-4 py-3"
              initial={{ y: -15 }}
              animate={{ y: 0 }}
              exit={{ opacity: 0.2 }}
            >
              <input
                value={member.name}
                className="grow tracking-wider placeholder:text-gray-300 focus:outline-none"
                onChange={(e) => {
                  onChange({ ...member, name: e.target.value });
                }}
                placeholder="Enter name"
              />
              <TrashIcon onClick={() => onDelete(member)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {team.length > 1 && (
        <motion.div
          className="mr-2 mt-2 text-right text-sm tracking-wide text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {team.length} members
        </motion.div>
      )}
    </>
  );
};
