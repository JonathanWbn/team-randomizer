"use client";
import { useState } from "react";

import { Input } from "../components/input";
import { TeamList } from "../components/team-list";
import { ToolSelect } from "../components/tool-select";
import { GroupIcon } from "../components/group-icon";

export type Member = { id: string; name: string };
export type Team = Member[];
export type Tool = "group" | "pick";

export default function Page() {
  const [team, setTeam] = useState<Team>([]);
  const [tool, setTool] = useState<Tool>("group");

  return (
    <div className="mx-auto mt-8 flex max-w-lg flex-col gap-4">
      <div className="flex justify-between">
        <ToolSelect tool={tool} onSelect={setTool} />
        <GroupIcon disabled={team.length < 2} />
      </div>
      <Input
        onSubmit={(value) => {
          setTeam([{ id: Math.random().toString(), name: value }, ...team]);
        }}
      />
      <TeamList
        team={team}
        onChange={(member) => {
          setTeam(team.map((m) => (m.id === member.id ? member : m)));
        }}
        onDelete={(member) => {
          setTeam(team.filter((m) => m.id !== member.id));
        }}
      />
    </div>
  );
}
