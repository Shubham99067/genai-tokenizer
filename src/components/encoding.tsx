import PromptInput from "./prompt-input";
import PromptOutput from "./prompt-output";

const Encoding = () => {
  const tokens = ["Hello", " ", "World", " "];

  return (
    <>
      <p className="text-xl font-bold mt-4">Encode</p>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <PromptInput
          title="Text Input"
          placeholder="Insert your prompt..."
          rows={6}
        />

        <PromptOutput title="Tokens" type="encode" tokens={tokens} />
      </div>
    </>
  );
};

export default Encoding;
