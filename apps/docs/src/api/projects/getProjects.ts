import client from "../../../sanity/client";
import { ProjectProps } from "../../interfaces";

interface GetProjectProps {
  highlight: boolean;
}

export const getProjects = async ({
  highlight,
}: GetProjectProps): Promise<ProjectProps[]> => {
  const query = highlight
    ? `*[_type == "project" && highlightOnHomepage == true] | order(order)`
    : `*[ _type == "project"] | order(order)`;

  return (await client.fetch(query)) as Array<ProjectProps>;
};
