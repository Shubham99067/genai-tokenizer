import { RxGithubLogo } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between mb-2">
      <a href="/" className="text-xl font-bold ">
        Token
        <span className="text-blue-500/80 bg-[#FAF8DF] pr-2 py-2">izer</span>
      </a>

      <div className="flex items-center gap-4">
        <button
          className="btn bg-white hover:shadow-xl/70 border-none btn-sm rounded-md shadow-xl/40 shadow-blue-500/40"
          onClick={() =>
            window.open("https://github.com/n4ryn/genai-custom-tokenizer")
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
