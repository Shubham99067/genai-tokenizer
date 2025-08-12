import { SPECIAL_TOKENS, VOCAB_STORAGE_KEY } from ".";
import type { InvVocab, Vocab } from "./types";

/**
 * Tokenizes text while preserving spaces, tabs, and newlines.
 */
function tokenize(text: string): string[] {
  return text.match(/\r\n|\n|\t| |\r|[!?.,;:'"(){}\[\]]|\w+/g) || [];
}

/**
 * Load vocab from localStorage.
 */
function loadVocab(): Vocab | null {
  const stored = localStorage.getItem(VOCAB_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

/**
 * Save vocab to localStorage.
 */
function saveVocab(vocab: Vocab): void {
  localStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(vocab));
}

/**
 * Build vocabulary from input text (persists to localStorage).
 */
export function buildVocabulary(text: string): Vocab {
  let vocab: Vocab = loadVocab() || {};
  let idx = Object.keys(vocab).length;

  // Add special tokens if vocab is empty
  if (idx === 0) {
    for (const token of SPECIAL_TOKENS) {
      vocab[token] = idx++;
    }
  }

  // Add new tokens from text
  for (const token of tokenize(text)) {
    if (!(token in vocab)) {
      vocab[token] = idx++;
    }
  }

  saveVocab(vocab);
  return vocab;
}

/**
 * Encode input text into list of token IDs.
 */
export function encode(text: string, vocab: Vocab): number[] {
  return tokenize(text).map((token) =>
    token in vocab ? vocab[token] : vocab["<UNK>"]
  );
}

/**
 * Decode list of token IDs back into text.
 */
export function decode(tokenIds: number[], vocab: Vocab): string {
  const invVocab: InvVocab = Object.fromEntries(
    Object.entries(vocab).map(([token, id]) => [id, token])
  );

  return tokenIds
    .map((id) => (invVocab[id] === "\n" ? "\n" : invVocab[id] || "<UNK>"))
    .join("");
}
