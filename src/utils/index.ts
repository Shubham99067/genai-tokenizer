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

export const DEFAULT_CORPUS =
  "The quick brown fox jumps over the lazy dog. Natural language processing is a field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language. It involves various techniques like tokenization, parsing, and semantic analysis. Generative AI models learn from vast amounts of text data to create new and coherent content. They use sophisticated tokenizers to break down text into numerical representations.";
