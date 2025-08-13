import Corpus from "./components/corpus";
import Decoding from "./components/decoding";
import Encoding from "./components/encoding";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import { VocabularyProvider } from "./context/VocabularyContext";

function App() {
  return (
    <VocabularyProvider>
      <div className="flex flex-col gap-4 items-center max-w-4xl m-auto px-4 md:px-8">
        <Navbar />

        <h1 className="text-3xl font-extralight">
          Transform your Text into AI-Ready Tokens - Instantly encode, decode,
          and visualize every token in your prompt.
        </h1>

        <div className="divider mt-1"></div>

        <Corpus />
        <Encoding />
        <Decoding />

        <div className="divider mb-0"></div>

        <Footer />
      </div>
    </VocabularyProvider>
  );
}

export default App;
