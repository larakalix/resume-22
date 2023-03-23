import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.NEXT_API_ID,
  dataset: "production",
  apiVersion: "2021-08-18",
  useCdn: true,
});
