# GenAi-Tokenizer 🧠

An interactive tokenizer playground to explore how text breaks into tokens, how unique token IDs are assigned, and how decoding works — all powered by a custom tokenizer with a clean UI built on DaisyUI and Tailwind CSS.

## Features

- **Corpus Learning:** Type or paste large paragraphs to _learn_ vocabulary dynamically.
- **Real-time Vocabulary:** Vocabulary builds live with corpus input, stored persistently in `localStorage`.
- **Encoding:** Instantly see tokens and their assigned IDs as you type or paste text.
- **Decoding:** Decode by entering comma-separated token IDs, showing the original text.
- **Token Visualization:** View tokens with color-coded types (words, punctuation, whitespace, etc.).
- **Custom Tokenizer Logic:** Pure JS tokenizer with no external dependencies, designed for transparency and customization.

## Tech Stack

- React + TypeScript + Vite for fast development and type safety.
- Tailwind CSS + DaisyUI for responsive, accessible styling.
- LocalStorage-backed vocabulary persistence to keep vocab consistent across sessions.

## Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
git clone https://github.com/n4ryn/genai-tokenizer.git
cd genai-tokenizer
npm install
npm run dev
```

To build and preview:

```bash
npm run build
npm run preview
```

## Usage Tips

- **Corpus:** Use the default corpus or type your own text — vocabulary updates live and is saved locally.
- **Encoding:** Enter any text prompt to see how it tokenizes and converts into IDs.
- **Decoding:** Input comma-separated IDs to see the corresponding decoded text.
- **Clear & Reset:** Use clear buttons to reset inputs; vocabulary is managed centrally to reflect updates app-wide.

## Tokenizer Details

- **Token Types Recognized:** words, numbers, punctuation, whitespace, special tokens.
- **Vocabulary Management:** Vocabulary stored centrally using a React hook with localStorage persistence.
- **Encoding:** Assigns incremental numeric IDs per unique token, reusing existing vocab IDs.
- **Decoding:** Maps numeric IDs back to tokens; unknown IDs render as `[UNK]`.
- **Performance:** Vocabulary memoized and updated efficiently to prevent unnecessary recomputation and re-renders.

## For suggestions or issues, feel free to:

- Open an issue on [GitHub Issues](https://github.com/n4ryn/genai-tokenizer/issues).
- Reach out to me on [Twitter](https://x.com/n4ryn_) or [LinkedIn](https://www.linkedin.com/in/n4ryn/).

## Badges

[![GitHub Stars](https://img.shields.io/github/stars/n4ryn/genai-tokenizer?style=for-the-badge&color=1a1b27&logo=github&logoColor=FFFFFF)](https://github.com/n4ryn/namaste-dsa/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/n4ryn/genai-tokenizer?style=for-the-badge&color=1a1b27&logo=github&logoColor=FFFFFF)](https://github.com/n4ryn/namaste-dsa/network)
