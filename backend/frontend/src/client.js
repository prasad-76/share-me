import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
 projectId: import.meta.env.VITE_REACT_APP_SANITY_ID,
 dataset: "production",
 apiVersion: "2024-02-13",
 useCdn: true,
 token: import.meta.env.VITE_REACT_APP_SANITY_API_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)