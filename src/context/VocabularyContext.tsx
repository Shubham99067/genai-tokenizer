import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { buildVocabulary } from "../utils/tokenizer";
import type { Vocab, VocabularyContextValue } from "../utils/types";
import { DEFAULT_CORPUS } from "../utils";

const VOCAB_STORAGE_KEY = "custom_tokenizer_vocab";
const VocabularyContext = createContext<VocabularyContextValue | undefined>(
  undefined
);

export const VocabularyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [corpus, setCorpus] = useState<string>(DEFAULT_CORPUS);
  const [vocab, setVocab] = useState<Vocab>({});

  useEffect(() => {
    const savedVocab = localStorage.getItem(VOCAB_STORAGE_KEY);
    if (savedVocab) {
      try {
        setVocab(JSON.parse(savedVocab));
      } catch {
        console.warn("Failed to parse vocab from localStorage");
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(vocab).length > 0) {
      localStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(vocab));
    }
  }, [vocab]);

  const learnVocabulary = useCallback(() => {
    if (!corpus.trim()) {
      setVocab({});
      localStorage.removeItem(VOCAB_STORAGE_KEY);
      return;
    }
    const newVocab = buildVocabulary(corpus);
    setVocab(newVocab);
  }, [corpus]);

  const learnFromAdditionalText = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      const mergedVocab = { ...vocab };

      const tokens =
        text.match(/\r\n|\n|\t| |\r|[!?.,;:'"(){}\[\]]|\w+/g) || [];

      let idx = Object.keys(mergedVocab).length;

      const SPECIAL_TOKENS = ["<PAD>", "<UNK>", "<CLS>", "<SEP>", "<MASK>"];
      for (const token of SPECIAL_TOKENS) {
        if (!(token in mergedVocab)) {
          mergedVocab[token] = idx++;
        }
      }

      for (const token of tokens) {
        if (!(token in mergedVocab)) {
          mergedVocab[token] = idx++;
        }
      }

      setVocab(mergedVocab);
    },
    [vocab]
  );

  const resetVocab = useCallback(() => {
    setCorpus("");
    setVocab({});
    localStorage.removeItem(VOCAB_STORAGE_KEY);
  }, []);

  return (
    <VocabularyContext.Provider
      value={{
        vocab,
        corpus,
        setCorpus,
        learnVocabulary,
        learnFromAdditionalText,
        resetVocab,
      }}
    >
      {children}
    </VocabularyContext.Provider>
  );
};

export function useVocabulary() {
  const context = useContext(VocabularyContext);
  if (!context) {
    throw new Error("useVocabulary must be used within a VocabularyProvider");
  }
  return context;
}
