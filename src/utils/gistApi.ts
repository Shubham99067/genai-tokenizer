// src/utils/gistApi.ts
const GIST_ID = import.meta.env.VITE_GIST_ID;
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const FILE_NAME = "vocab.json";

export async function fetchVocabFromGist(): Promise<Record<string, number>> {
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: { Authorization: `token ${TOKEN}` },
  });
  if (!res.ok) throw new Error("Failed to fetch vocab from Gist");

  const gist = await res.json();
  return JSON.parse(gist.files[FILE_NAME].content);
}

export async function updateVocabInGist(vocab: Record<string, number>) {
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: "PATCH",
    headers: {
      Authorization: `token ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      files: {
        [FILE_NAME]: {
          content: JSON.stringify(vocab, null, 2),
        },
      },
    }),
  });

  if (!res.ok) throw new Error("Failed to update vocab in Gist");
  return res.json();
}
