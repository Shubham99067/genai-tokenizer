import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal items-center py-4">
      <aside className="grid-flow-col items-center">
        <p>Build with ❤️ by Vinay</p>
      </aside>

      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
