import { RxGithubLogo } from "react-icons/rx";

import type { Vocab } from "../utils/types";

const Navbar = ({ vocab }: { vocab: Vocab }) => {
  return (
    <div className="navbar flex justify-between mb-2">
      <a href="/" className="text-xl font-bold">
        Token
        <span className="text-blue-500/80 bg-[#FAF8DF] pr-2 py-2">izer</span>
      </a>

      <div className="flex items-center gap-4">
        <p className="text-xs font-mono">
          Current Vocab Size: {Object.keys(vocab).length}
        </p>
        <button
          className="btn bg-white hover:shadow-xl/70 border-none btn-sm rounded-md shadow-xl/40 shadow-blue-500/40"
          onClick={() =>
            window.open("https://github.com/n4ryn/genai-tokenizer", "_blank")
          }
        >
          <RxGithubLogo />
          Github
        </button>
      </div>
    </div>
  );
};

export default Navbar;
