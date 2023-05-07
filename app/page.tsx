"use client";
import { useState } from "react";

import { Input } from "../components/input";
import { TeamList } from "../components/team-list";
import { ToolSelect } from "../components/tool-select";

export type Member = { id: string; name: string };
export type Team = Member[];
export type Tool = "teams" | "member";

export default function Page() {
  const [team, setTeam] = useState<Team>([]);
  const [tool, setTool] = useState<Tool>("teams");

  return (
    <div className="mx-auto flex max-w-5xl gap-8 px-8 py-8">
      <div className="w-96">
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
      <div className="flex grow items-start justify-center">
        <ToolSelect tool={tool} onSelect={setTool} />
      </div>
    </div>
  );
}
