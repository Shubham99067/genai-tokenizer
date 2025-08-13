import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { buildVocabulary } from "../utils/tokenizer";
import type { Vocab, VocabularyContextValue } from "../utils/types";

import { DEFAULT_CORPUS, SPECIAL_TOKENS } from "../utils";
import { fetchVocabFromGist, updateVocabInGist } from "../utils/gistApi";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const gistVocab = await fetchVocabFromGist();
        setVocab(gistVocab);
      } catch (err) {
        console.error("Error loading vocab from gist:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const learnVocabulary = useCallback(async () => {
    if (!corpus.trim()) {
      setVocab({});
      await updateVocabInGist({});
      return;
    }
    const newVocab = buildVocabulary(corpus, vocab, updateVocabInGist);
    setVocab(newVocab);
  }, [corpus, vocab]);

  const learnFromAdditionalText = useCallback(
    async (text: string) => {
      if (!text.trim()) return;
      const mergedVocab = { ...vocab };

      const tokens =
        text.match(/\r\n|\n|\t| |\r|[!?.,;:'"(){}\[\]]|\w+/g) || [];

      let idx = Object.keys(mergedVocab).length;

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
      await updateVocabInGist(mergedVocab);
    },
    [vocab]
  );

  const resetVocab = useCallback(async () => {
    setCorpus("");
    setVocab({});
    await updateVocabInGist({});
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
        loading,
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
