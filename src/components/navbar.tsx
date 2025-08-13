import { RxGithubLogo } from "react-icons/rx";

import { PiBrain } from "react-icons/pi";

import { useVocabulary } from "../context/VocabularyContext";

const Navbar = () => {
  const { vocab } = useVocabulary();

  return (
    <div className="navbar flex justify-between mb-2">
      <a href="/" className="text-xl font-bold">
        <span className="text-blue-500/80 bg-[#FAF8DF] pl-2 py-2">GenAi</span>
        Tokenizer
      </a>

      <div className="flex items-center gap-4">
        <button
          className="btn btn-outline btn-sm bg-white hover:shadow-xl/70 border-blue-400 hover:bg-blue-50/40 rounded-md shadow-xl/40 shadow-blue-500/40"
          onClick={() =>
            window.open(
              "https://gist.github.com/n4ryn/e2cbc161f9f7ae45fbd4e3f5d5d5e8e4",
              "_blank"
            )
          }
        >
          <PiBrain />
          <span className="font-black">{Object.keys(vocab).length}</span> vocab
          tokens
        </button>

        <button
          className="btn btn-outline btn-sm bg-white hover:shadow-xl/70 border-blue-400 hover:bg-blue-50/40 rounded-md shadow-xl/40 shadow-blue-500/40"
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
