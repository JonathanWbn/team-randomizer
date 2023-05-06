"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TrashIcon } from "./trash-icon";

type Member = {
  id: string;
  name: string;
};

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [team, setTeam] = useState<Member[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mx-auto max-w-xl px-8 py-8">
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Add team member"
          autoFocus
          className="block w-full rounded-xl border-0 px-5 py-4 pr-14 tracking-wider text-gray-900 drop-shadow-sm transition placeholder:text-gray-400 hover:drop-shadow-md focus:ring-0 focus:drop-shadow-md"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (!input) return;
              setTeam([{ id: Math.random().toString(), name: input }, ...team]);
              setInput("");
            }
          }}
        />
        <div
          className="absolute inset-y-0 right-0 flex py-3 pr-3 hover:cursor-pointer"
          onClick={() => {
            inputRef.current?.focus();
            if (!input) return;
            setTeam([{ id: Math.random().toString(), name: input }, ...team]);
            setInput("");
          }}
        >
          <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-xs text-gray-400">
            ↵
          </kbd>
        </div>
      </div>
      <div className="mt-3 divide-y divide-dashed rounded-lg bg-white text-gray-900 drop-shadow-sm">
        <AnimatePresence>
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              className="group flex items-center gap-2 px-5 py-3"
              initial={{ y: -15 }}
              animate={{ y: 0 }}
              exit={{ opacity: 0.2 }}
            >
              <input
                value={member.name}
                className="grow tracking-wider placeholder:text-gray-300 focus:outline-none"
                onChange={(e) => {
                  setTeam(
                    team.map((m) =>
                      m.id === member.id ? { ...m, name: e.target.value } : m
                    )
                  );
                }}
                placeholder="Enter name"
              />
              <button
                onClick={() => {
                  setTeam(team.filter((m) => m.id !== member.id));
                }}
                className="cursor-pointer rounded p-1 text-white transition focus:text-gray-600 focus:outline focus:outline-gray-600 group-hover:text-gray-600"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
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
    </div>
  );
}
