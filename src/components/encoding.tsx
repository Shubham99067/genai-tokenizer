import { useState } from "react";

import PromptInput from "./prompt-input";
import PromptOutput from "./prompt-output";

const Encoding = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <p className="text-xl font-bold mt-4">Encode</p>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <PromptInput
          title="Text Input"
          placeholder="Insert your prompt..."
          rows={6}
          input={input}
          setInput={setInput}
        />

        <PromptOutput title="Tokens" type="encode" tokens={input.split(" ")} />
      </div>
    </>
  );
};

export default Encoding;
