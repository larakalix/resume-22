import client from "../../../sanity/client";
import { SkillsProps } from "../../interfaces";

export const getSkills = async (): Promise<SkillsProps[]> => {
  const skills_query = `*[ _type == "skills"]`;

  return (await client.fetch(skills_query)) as Array<SkillsProps>;
};
