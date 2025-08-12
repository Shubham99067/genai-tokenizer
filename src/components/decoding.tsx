import { useState, useCallback } from "react";
import PromptInput from "./prompt-input";
import PromptOutput from "./prompt-output";

import { decode } from "../utils/tokenizer";
import type { DecodingProps } from "../utils/types";

const Decoding = ({ vocab }: DecodingProps) => {
  const [input, setInput] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const handleDecode = useCallback(
    (text: string) => {
      setInput(text);

      if (!text.trim()) {
        setDecodedText("");
        return;
      }

      const ids = text
        .split(",")
        .map((s) => parseInt(s.trim(), 10))
        .filter((x) => !isNaN(x));

      setDecodedText(decode(ids, vocab));
    },
    [vocab]
  );

  return (
    <>
      <p className="text-xl font-bold mt-4">Decode</p>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <PromptInput
          title="Tokens Input"
          placeholder="Insert comma-separated tokens..."
          tooltip="Enter comma-separated integers values (e.g., 323, 5)"
          input={input}
          rows={4}
          onInputChange={handleDecode}
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
