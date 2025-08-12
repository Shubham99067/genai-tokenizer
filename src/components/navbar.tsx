import { RxGithubLogo } from "react-icons/rx";
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
        <p className="text-xs font-mono">
          Vocabulary Size:{" "}
          <span className="font-bold">{Object.keys(vocab).length}</span>
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
