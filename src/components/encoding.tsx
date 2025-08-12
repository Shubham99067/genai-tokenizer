import { useState, useCallback } from "react";
import PromptInput from "./prompt-input";
import PromptOutput from "./prompt-output";

import { buildVocabulary, encode } from "../utils/tokenizer";
import type { EncodingProps } from "../utils/types";

const Encoding = ({ vocab, setVocab }: EncodingProps) => {
  const [input, setInput] = useState("");
  const [tokens, setTokens] = useState<number[]>([]);

  const handleEncode = useCallback(
    (text: string) => {
      setInput(text);

      if (!text.trim()) {
        setTokens([]);
        return;
      }

      const newVocab = buildVocabulary(text);
      setVocab(newVocab);
      setTokens(encode(text, newVocab));
    },
    [setVocab]
  );

  return (
    <>
      <p className="text-xl font-bold mt-4">Encode</p>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <PromptInput
          title="Text Input"
          placeholder="Insert your prompt..."
          rows={6}
          input={input}
          onInputChange={handleEncode}
        />

        <PromptOutput
          title="Tokens"
          type="encode"
          tokens={tokens}
          vocab={vocab}
        />
      </div>
    </>
  );
};

export default Encoding;
