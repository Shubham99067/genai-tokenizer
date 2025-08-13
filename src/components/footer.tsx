import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row gap-4 justify-between items-center py-4">
      <p className="font-medium text-sm">Build with ❤️ by Vinay</p>

      <nav className="flex gap-4">
        <a href="https://github.com/n4ryn/genai-tokenizer" target="_blank">
          <BsGithub />
        </a>
        <a href="https://x.com/n4ryn_" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/n4ryn/" target="_blank">
          <BsLinkedin />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
