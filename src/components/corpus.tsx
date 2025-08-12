import { useVocabulary } from "../hooks/useVocabulary";

const Corpus = () => {
  const { corpus, setCorpus, rebuildVocab } = useVocabulary(
    `The quick brown fox jumps over the lazy dog. Natural language processing is a field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language. It involves various techniques like tokenization, parsing, and semantic analysis. Generative AI models learn from vast amounts of text data to create new and coherent content. They use sophisticated tokenizers to break down text into numerical representations.`
  );

  return (
    <div className="bg-linear-to-br from-blue-100/80 to-blue-100/20 w-full p-4 rounded-md flex flex-col md:flex-row justify-between">
      <div className="flex md:flex-col justify-between items-center mb-4 md:mb-0 md:items-start w-full md:w-1/3">
        <p className="text-xl font-bold md:mt-4">
          Corpus for Vocabulary Learning
        </p>
        <button
          className="btn bg-white hover:shadow-2xl/70 border-none btn-md rounded-md shadow-xl/60 shadow-blue-500/40"
          onClick={rebuildVocab}
        >
          Learn Vocabulary
        </button>
      </div>

      <textarea
        value={corpus}
        onChange={(e) => setCorpus(e.target.value)}
        placeholder="Insert your corpus here to train your vocabulary..."
        className="textarea textarea-md font-mono w-full md:w-2/3 rounded-md border-none focus:border-none"
        rows={6}
      />
    </div>
  );
};

export default Corpus;
