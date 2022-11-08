import client from "../../../sanity/client";
import { HeaderLinkProps } from "../../interfaces";

export const getLinks = async (): Promise<HeaderLinkProps[]> => {
    const links_query = `*[ _type == "headerLink"]`;

    return (await client.fetch(links_query)) as Array<HeaderLinkProps>;
};
