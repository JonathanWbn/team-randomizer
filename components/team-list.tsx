import { motion } from "framer-motion";
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
}) => (
  <div className="divide-y divide-dashed rounded-lg bg-white text-gray-900 drop-shadow-sm">
    {team.map((member) => (
      <motion.div
        key={member.id}
        className="group flex items-center gap-2 px-4 py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        layoutId={member.id}
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
  </div>
);
