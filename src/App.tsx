import { useState } from "react";

import Navbar from "./components/navbar";
import Encoding from "./components/encoding";
import Decoding from "./components/decoding";
import Corpus from "./components/corpus";
import Footer from "./components/footer";

function App() {
  const [vocab, setVocab] = useState<Record<string, number>>({});

  return (
    <div className="flex flex-col gap-4 items-center max-w-4xl m-auto px-8">
      <Navbar vocab={vocab} />

      <h1 className="text-3xl font-extralight">
        Transform Your Text into AI-Ready Tokens - Instantly encode, decode, and
        visualize every token in your prompt.
      </h1>

      <Corpus />
      <Encoding vocab={vocab} setVocab={setVocab} />
      <Decoding vocab={vocab} />

      <Footer />
    </div>
  );
}

export default App;
