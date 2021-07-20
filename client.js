import sanityClient from "@sanity/client";

export default sanityClient({
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: "1kz4vem3",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-03-25",
});
