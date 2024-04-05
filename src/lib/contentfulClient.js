import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});
export const getAllEntries = async (limit = 10) => {
  try {
    const allEntries = await client.getEntries({
      content_type: 'blog',
      limit,
    });

    return allEntries.items;
  } catch (error) {
    console.error(error);
  }
};
