import { Member, Team } from "../app/page";

export function findRandomMember(team: Team, previousPick?: Member): Member {
  if (team.length === 0) {
    throw new Error("Team is empty");
  }

  if (team.length === 1) {
    return team[0];
  }

  const randomIndex = Math.floor(Math.random() * team.length);
  const randomMember = team[randomIndex];

  if (randomMember === previousPick) {
    return findRandomMember(team, previousPick);
  }

  return randomMember;
}

export function splitInGroups(team: Team, previousGroups?: Team[]) {
  if (team.length < 2) {
    throw new Error("Team is too small");
  }

  const shuffledTeam = [...team].sort(() => Math.random() - 0.5);

  const round = Math.random() > 0.5 ? Math.ceil : Math.floor;
  const splitIndex = round(shuffledTeam.length / 2);

  const groups = [
    shuffledTeam.slice(0, splitIndex),
    shuffledTeam.slice(splitIndex),
  ];

  if (JSON.stringify(groups) === JSON.stringify(previousGroups)) {
    return splitInGroups(team, previousGroups);
  }

  return groups;
}

export function assignToGroup(groups: Team[], member: Member) {
  const [group1, group2] = groups;

  if (group1.length <= group2.length) {
    return [group1.concat(member), group2];
  } else {
    return [group1, group2.concat(member)];
  }
}
