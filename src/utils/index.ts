import type { Colors } from "./types";

export const colors: Colors = {
  word: "#E8FBE1",
  number: "#ECE3FC",
  punctuation: "#FCEBF6",
  special: "#FAF8DF",
  whitespace: "#DDF2FD",
};

export const getTokenType = (token: string): keyof typeof colors => {
  if (["<PAD>", "<UNK>", "<CLS>", "<SEP>", "<MASK>"].includes(token)) {
    return "special";
  }
  if (/^\d+$/.test(token)) return "number";
  if (/^[\s]+$/.test(token)) return "whitespace";
  if (/^[.,;:!?'"()[\]{}]+$/.test(token)) return "punctuation";
  return "word";
};

export const SPECIAL_TOKENS = ["<PAD>", "<UNK>", "<CLS>", "<SEP>", "<MASK>"];
export const VOCAB_STORAGE_KEY = "custom_tokenizer_vocab";
