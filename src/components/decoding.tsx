import { useState, useCallback, useEffect } from "react";

import PromptInput from "./prompt-input";
import PromptOutput from "./prompt-output";

import { useVocabulary } from "../context/VocabularyContext";

import { decode } from "../utils/tokenizer";

const Decoding = () => {
  const { vocab } = useVocabulary();
  const [input, setInput] = useState("");
  const [decodedText, setDecodedText] = useState("");

  useEffect(() => {
    if (!input.trim()) {
      setDecodedText("");
      return;
    }

    const ids = input
      .split(",")
      .map((s) => parseInt(s.trim(), 10))
      .filter((x) => !isNaN(x));

    setDecodedText(decode(ids, vocab));
  }, [input, vocab]);

  const handleInputChange = useCallback((text: string) => {
    setInput(text);
  }, []);

  return (
    <>
      <p className="text-xl font-bold mt-4">Decode</p>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <PromptInput
          title="Tokens Input"
          placeholder="Insert comma-separated tokens..."
          tooltip="Enter comma-separated integer values (e.g., 323, 5)"
          input={input}
          rows={4}
          onInputChange={handleInputChange}
        />

        <PromptOutput
          title="Decoded Text"
          type="decode"
          message={decodedText}
        />
      </div>
    </>
  );
};

export default Decoding;
