import { useState, useCallback } from "react";

import { buildVocabulary } from "../utils/tokenizer";
import type { Vocab } from "../utils/types";

/**
 * Hook for managing corpus and vocabulary state with persistence.
 */
export function useVocabulary(initialText = "") {
  const [vocab, setVocab] = useState<Vocab>(() =>
    initialText.trim() ? buildVocabulary(initialText) : {}
  );
  const [corpus, setCorpus] = useState(initialText);

  /**
   * Update corpus and rebuild vocab automatically.
   */
  const updateVocabFromText = useCallback((text: string) => {
    setCorpus(text);
    if (!text.trim()) {
      setVocab({});
      return;
    }
    setVocab(buildVocabulary(text));
  }, []);

  /**
   * Rebuild vocab from current corpus.
   */
  const rebuildVocab = useCallback(() => {
    setVocab(buildVocabulary(corpus));
  }, [corpus]);

  return {
    vocab,
    corpus,
    setCorpus: updateVocabFromText,
    rebuildVocab,
  };
}
