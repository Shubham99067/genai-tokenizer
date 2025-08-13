import { useMemo } from "react";
import { RxClipboard } from "react-icons/rx";

import { colors, getTokenType } from "../utils";
import type { PromptOutputProps } from "../utils/types";

const PromptOutput = ({
  type,
  title,
  tokens = [],
  message,
  vocab,
}: PromptOutputProps) => {
  const isEncode = type === "encode" && tokens.length > 0 && vocab;

  const invVocab = useMemo(() => {
    if (!vocab) return {};

    return Object.fromEntries(
      Object.entries(vocab).map(([tok, id]) => [id, tok])
    );
  }, [vocab]);

  return (
    <div className="bg-linear-to-br from-blue-100/80 to-blue-100/40 md:w-1/2 p-4 rounded-md shadow-md/80 shadow-blue-500/20">
      <div className="flex justify-between items-center mb-1">
        <p className="text-md font-bold">{title}</p>
        {isEncode && (
          <p className="text-sm">
            {tokens.length} token{tokens.length > 1 && "s"}
          </p>
        )}
      </div>

      <div className="w-full min-h-34 bg-base-100 rounded-md overflow-auto mb-2">
        {isEncode ? (
          <div className="flex flex-wrap gap-4 p-2.5">
            {tokens.map((tokenId, index) => {
              const tokenStr = invVocab[tokenId];
              const displayToken = tokenStr === "\n" ? "↵" : tokenStr;
              const bgColor = colors[getTokenType(tokenStr)];

              return (
                <div className="relative" key={index}>
                  <p
                    style={{ backgroundColor: bgColor }}
                    className="px-1.5 whitespace-pre font-mono text-sm rounded-sm"
                  >
                    "{displayToken}"
                  </p>
                  <span className="absolute text-xs bottom-[-12px] left-0 text-slate-500">
                    {tokenId}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm font-mono p-2.5 whitespace-pre-wrap">
            {message}
          </p>
        )}
      </div>

      {isEncode && (
        <>
          <div className="flex justify-between items-center">
            <p className="text-md font-bold mb-1">Encoded Sequence:</p>
            <button
              className="btn bg-white hover:shadow-md/80 border-none btn-xs rounded-md shadow-md/40 shadow-blue-500/40"
              onClick={() => navigator.clipboard.writeText(tokens.join(", "))}
            >
              <RxClipboard /> Copy
            </button>
          </div>

          <div className="w-full min-h-11 bg-base-100 rounded-md">
            <p className="text-sm p-2.5">{tokens.join(", ")}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PromptOutput;
