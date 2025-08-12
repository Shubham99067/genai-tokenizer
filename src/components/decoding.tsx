import { useState } from "react";

import PromptInput from "./prompt-input";
import PromptOutput from "./prompt-output";

const Decoding = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <p className="text-xl font-bold mt-4">Decode</p>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <PromptInput
          title="Tokens Input"
          placeholder="Insert comma-separated tokens..."
          tooltip="Enter comma-separated values (e.g., 323, 5)"
          input={input}
          setInput={setInput}
        />

        <PromptOutput title="Tokens" type="decode" tokens={input.split(" ")} />
      </div>
    </>
  );
};

export default Decoding;
