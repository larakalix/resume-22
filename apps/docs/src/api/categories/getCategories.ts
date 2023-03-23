import client from "../../../sanity/client";
import { CategoryProps } from "../../interfaces";

export const getCategories = async (): Promise<CategoryProps[]> => {
  const categories_query = `*[_type == "category"] | order(order asc)`;

  return (await client.fetch(categories_query)) as Array<CategoryProps>;
};
