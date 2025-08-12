import { RiDeleteBinLine } from "react-icons/ri";
import { RxInfoCircled } from "react-icons/rx";

interface Props {
  title: string;
  placeholder: string;
  rows?: number;
  characters?: number;
  tooltip?: string;
  input?: string;
  setInput: (value: string) => void;
}

const PromptInput = ({
  title,
  placeholder,
  rows = 2,
  tooltip,
  input,
  setInput,
}: Props) => {
  return (
    <div className="bg-linear-to-br from-blue-100/80 to-blue-100/20 md:w-1/2 p-4 rounded-md flex flex-col justify-between">
      <div>
        <div className="flex gap-2 items-center mb-1">
          <p className="text-md font-bold">{title}</p>
          {tooltip && (
            <div className="tooltip" data-tip={tooltip}>
              <RxInfoCircled />
            </div>
          )}
        </div>

        <textarea
          value={input}
          placeholder={placeholder}
          className="textarea textarea-md font-mono w-full rounded-md border-none focus:border-none"
          rows={rows}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-xs font-medium">{prompt.length} Characters</p>

        <button
          className="btn bg-white hover:shadow-md/80 border-none btn-xs rounded-md shadow-md/40 shadow-blue-500/40"
          onClick={() => setInput("")}
        >
          <RiDeleteBinLine /> Clear
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
