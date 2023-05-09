import { motion } from "framer-motion";
import { Member } from "../app/page";

export const SelectedMember = ({ member }: { member: Member }) => (
  <motion.div
    key={member.id}
    className="relative rounded-lg bg-gradient-to-br from-[#007CF0] to-[#00DFD8] px-4 py-3 tracking-wider text-[#0087b6] drop-shadow"
    layoutId={member.id}
  >
    <div className="relative z-10">{member.name}</div>
    <div className="absolute inset-0.5 rounded-md bg-white" />
  </motion.div>
);
