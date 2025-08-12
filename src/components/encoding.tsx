import { useState, useEffect } from "react";

import PromptInput from "./prompt-input";
import PromptOutput from "./prompt-output";

import { useVocabulary } from "../context/VocabularyContext";

import { encode } from "../utils/tokenizer";

const Encoding = () => {
  const { vocab, learnFromAdditionalText } = useVocabulary();
  const [input, setInput] = useState("");
  const [tokens, setTokens] = useState<number[]>([]);

  useEffect(() => {
    if (!input.trim()) {
      setTokens([]);
      return;
    }

    setTokens(encode(input, vocab));
  }, [input, vocab]);

  const handleInputChange = (text: string) => {
    setInput(text);
    learnFromAdditionalText(text);
  };

  return (
    <>
      <p className="text-xl font-bold mt-4">Encode</p>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <PromptInput
          title="Text Input"
          placeholder="Insert your prompt..."
          rows={6}
          input={input}
          onInputChange={handleInputChange}
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
