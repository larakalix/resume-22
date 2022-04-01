import { GraphQLClient } from "graphql-request";

export const DATOCMS_HEADERS = {
    authorization: `Bearer ${process.env.NEXT_DATO_CMS_TOKEN}`,
};

export const request = ({ query, variables, preview }: any) => {
    const endpoint = preview
        ? `https://graphql.datocms.com/preview`
        : `https://graphql.datocms.com/`;
    const client = new GraphQLClient(endpoint, {
        headers: DATOCMS_HEADERS,
    });

    return client.request(query, variables);
};
