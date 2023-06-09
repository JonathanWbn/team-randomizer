"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { TeamList } from "../components/team-list";
import { ToolSelect } from "../components/tool-select";
import { GroupButton } from "../components/group-button";
import { assignToGroup, findRandomMember, splitInGroups } from "../utils/team";
import { TeamCount } from "../components/team-count";
import { SelectedMember } from "../components/selected-member";
import { PickButton } from "../components/pick-button";
import useLocalStorageState from "use-local-storage-state";
import { CopyButton } from "../components/copy-button";
import { MemberInput } from "../components/member-input";

export type Member = { id: string; name: string };
export type Team = Member[];
export type Tool = "teams" | "pick";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [team, setTeam] = useLocalStorageState<Team>("team", {
    defaultValue: [],
  });
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
        <MemberInput onSubmit={handleCreate} ref={inputRef} />
        {picked && <SelectedMember member={picked} />}
        {groups && (
          <div className="flex flex-col gap-3">
            <TeamList
              team={groups[0]}
              onChange={handleChange}
              onMoveUp={handleMoveUp}
              onDelete={handleDelete}
            />
            <motion.div
              layoutId="group-divider"
              className="-mx-4 h-px bg-gradient-to-br from-[#7928CA]/50 to-[#FF0081]/50 shadow shadow-[#982abe]"
            />
            <TeamList
              team={groups[1]}
              onChange={handleChange}
              onMoveUp={handleMoveUp}
              onDelete={handleDelete}
            />
            <div className="self-end">
              <CopyButton groups={groups} />
            </div>
          </div>
        )}
        {!groups && (
          <div>
            <TeamList
              team={team.filter((member) => !picked || member.id !== picked.id)}
              onChange={handleChange}
              onDelete={handleDelete}
            />
            {!picked && <TeamCount team={team} onDelete={() => setTeam([])} />}
          </div>
        )}
      </div>
      <footer className="flex justify-end border-t bg-gray-50 px-4 py-3 text-xs text-gray-600">
        <div className="flex gap-3">
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

  function handleCreate(names: string[]) {
    const members = names.map(createMember);
    setTeam([...members, ...team]);
    if (groups) {
      setGroups(members.reduce(assignToGroup, groups));
    }
    inputRef.current?.focus();
  }

  function handleMoveUp(member: Member) {
    if (!groups) return;
    setGroups(groups.map((group) => moveUpMember(group, member)));
  }
}

function createMember(name: string): Member {
  return { id: Math.random().toString(), name };
}

function moveUpMember(team: Team, member: Member) {
  const index = team.findIndex((m) => m.id === member.id);
  if (index <= 0) return team;
  return [
    ...team.slice(0, index - 1),
    member,
    team[index - 1],
    ...team.slice(index + 1),
  ];
}
