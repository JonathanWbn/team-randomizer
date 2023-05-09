"use client";
import { useEffect, useState } from "react";

import { Input } from "../components/input";
import { TeamList } from "../components/team-list";
import { ToolSelect } from "../components/tool-select";
import { GroupIcon } from "../components/group-icon";
import { assignToGroup, splitInGroups } from "../utils";
import { TeamCount } from "../components/team-count";

export type Member = { id: string; name: string };
export type Team = Member[];
export type Tool = "group" | "pick";

export default function Page() {
  const [team, setTeam] = useState<Team>([]);
  const [tool, setTool] = useState<Tool>("group");
  const [groups, setGroups] = useState<Team[]>();

  return (
    <div className="mx-auto mt-8 flex max-w-lg flex-col gap-4">
      <div className="flex justify-between">
        <ToolSelect tool={tool} onSelect={setTool} />
        <GroupIcon
          disabled={team.length < 2}
          onClick={() => setGroups(splitInGroups(team))}
        />
      </div>
      <Input onSubmit={handleCreate} />
      {groups ? (
        groups.map((group, index) => (
          <TeamList
            key={index}
            team={group}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <div>
          <TeamList
            team={team}
            onChange={handleChange}
            onDelete={handleDelete}
          />
          <TeamCount team={team} />
        </div>
      )}
    </div>
  );

  function handleChange(member: Member) {
    setTeam(team.map((m) => (m.id === member.id ? member : m)));
    setGroups(
      groups?.map((g) => g.map((m) => (m.id === member.id ? member : m)))
    );
  }

  function handleDelete(member: Member) {
    setTeam(team.filter((m) => m.id !== member.id));
    const newGroups = groups?.map((g) => g.filter((m) => m.id !== member.id));

    if (newGroups?.some((group) => group.length === 0)) {
      setGroups(undefined);
    } else {
      setGroups(newGroups);
    }
  }

  function handleCreate(name: string) {
    const member = { id: Math.random().toString(), name };
    setTeam([member, ...team]);
    if (groups) {
      setGroups(assignToGroup(groups, member));
    }
  }
}
