"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { Input } from "../components/input";
import { TeamList } from "../components/team-list";
import { ToolSelect } from "../components/tool-select";
import { GroupButton } from "../components/group-button";
import { assignToGroup, findRandomMember, splitInGroups } from "../utils/team";
import { TeamCount } from "../components/team-count";
import { SelectedMember } from "../components/selected-member";
import { PickButton } from "../components/pick-button";

export type Member = { id: string; name: string };
export type Team = Member[];
export type Tool = "teams" | "pick";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [team, setTeam] = useState<Team>([]);
  const [tool, setTool] = useState<Tool>("teams");
  const [groups, setGroups] = useState<Team[]>();
  const [picked, setPicked] = useState<Member>();

  return (
    <div className="flex h-screen flex-col pt-24">
      <div className="mx-auto flex w-screen max-w-lg grow flex-col gap-4 px-2">
        <div className="flex justify-between">
          <ToolSelect selected={tool} onSelect={handleSelect} />
          {tool === "teams" && <GroupButton onClick={handleGroupButton} />}
          {tool === "pick" && <PickButton onClick={handlePickButton} />}
        </div>
        <Input onSubmit={handleCreate} ref={inputRef} />
        {picked && <SelectedMember member={picked} />}
        {groups && (
          <div className="flex flex-col gap-3">
            <TeamList
              team={groups[0]}
              onChange={handleChange}
              onDelete={handleDelete}
            />
            <motion.div
              layoutId="group-divider"
              className="-mx-4 h-px bg-gradient-to-br from-[#7928CA]/50 to-[#FF0081]/50 shadow shadow-[#982abe]"
            />
            <TeamList
              team={groups[1]}
              onChange={handleChange}
              onDelete={handleDelete}
            />
          </div>
        )}
        {!groups && (
          <div>
            <TeamList
              team={team.filter((member) => !picked || member.id !== picked.id)}
              onChange={handleChange}
              onDelete={handleDelete}
            />
            {!picked && <TeamCount team={team} />}
          </div>
        )}
      </div>
      <footer className="flex justify-between border-t bg-gray-50 px-4 py-3 text-xs text-gray-600">
        <p className="leading-5">
          &copy; {new Date().getFullYear()} teamgenerator.io | No rights
          reserved, I&apos;ll do that later.
        </p>
        <div className="flex gap-2">
          <a
            href="https://jwieben.notion.site/Impressum-7be1b0e1a1384c1cb9362bd1aef963d1"
            target="_blank"
            className="hover:text-black"
          >
            imprint
          </a>
          <a
            href="https://github.com/JonathanWbn/team-randomizer"
            target="_blank"
            className="hover:text-black"
          >
            source
          </a>
          <a
            href="https://jonathanwieben.com/"
            target="_blank"
            className="hover:text-black"
          >
            author
          </a>
        </div>
      </footer>
    </div>
  );

  function handleSelect(tool: Tool) {
    setTool(tool);
    setGroups(undefined);
    setPicked(undefined);
    inputRef.current?.focus();
  }

  function handleGroupButton() {
    try {
      setGroups(splitInGroups(team, groups));
    } catch {
      inputRef.current?.focus();
    }
  }

  function handlePickButton() {
    try {
      setPicked(findRandomMember(team, picked));
    } catch {
      inputRef.current?.focus();
    }
  }

  function handleChange(member: Member) {
    setTeam(team.map((m) => (m.id === member.id ? member : m)));
    setGroups(
      groups?.map((g) => g.map((m) => (m.id === member.id ? member : m)))
    );
  }

  function handleDelete(member: Member) {
    setTeam(team.filter((m) => m.id !== member.id));
    const updatedGroups = groups?.map((g) =>
      g.filter((m) => m.id !== member.id)
    );
    if (updatedGroups?.some((group) => group.length === 0)) {
      setGroups(undefined);
    } else {
      setGroups(updatedGroups);
    }
  }

  function handleCreate(name: string) {
    const member = { id: Math.random().toString(), name };
    setTeam([member, ...team]);
    if (groups) {
      setGroups(assignToGroup(groups, member));
    }
    inputRef.current?.focus();
  }
}
