import { createClient } from "contentful";

export const client = createClient({
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
export const getEntryById = async (id) => {
  try {
    const entry  = await client.getEntry(id);
    return entry;
  } catch (err) {
    console.error(err);
  }
};
