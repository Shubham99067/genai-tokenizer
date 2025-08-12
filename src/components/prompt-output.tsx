interface Props {
  title: string;
  type: "encode" | "decode";
  tokens: string[];
}

const PromptOutput = ({ type, title, tokens }: Props) => {
  return (
    <div className="bg-linear-to-br from-blue-100/80 to-blue-100/40 md:w-1/2 p-4 rounded-md">
      <div className="flex justify-between align-baseline items-center mb-1">
        <p className="text-md font-bold">{title}</p>
        {type === "encode" && (
          <p className="text-sm">
            {tokens.length} token{tokens.length > 1 && "s"}
          </p>
        )}
      </div>

      <div className="w-full min-h-34 bg-base-100 rounded-md overflow-scroll mb-2">
        {type === "encode" && (
          <div className="flex flex-wrap gap-4 p-2.5">
            {tokens.map((token, index) => (
              <div className="relative">
                <p className={`bg-[#E8FBE1] px-1.5`} key={index}>
                  "{token}"
                </p>
                <span className="absolute text-xs bottom-[-12px] right-0 text-slate-500">
                  {token.length * 34}
                </span>
              </div>
            ))}
          </div>
        )}

        {type === "decode" && (
          <p className="text-sm p-2.5">{tokens.join("")}</p>
        )}
      </div>

      {type === "encode" && (
        <>
          <p className="text-md font-bold mb-1">Encoded Sequence:</p>
          <div className="w-full min-h-11 bg-base-100 rounded-md">
            <p className="text-sm p-2.5">
              {tokens.map((token, index) => (
                <span key={index}>{token.length}, </span>
              ))}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PromptOutput;
