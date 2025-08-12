import { RxInfoCircled } from "react-icons/rx";

import { useVocabulary } from "../context/VocabularyContext";

const Corpus = () => {
  const { corpus, setCorpus, learnVocabulary } = useVocabulary();

  return (
    <div className="bg-linear-to-br from-blue-100/80 to-blue-100/20 w-full p-4 rounded-md flex flex-col md:flex-row justify-between shadow-md/80 shadow-blue-500/20">
      <div className="flex md:flex-col justify-between items-center mb-4 md:mb-0 md:items-start w-full md:w-1/3">
        <p className="text-xl font-bold md:mt-4">
          Corpus for Vocabulary Learning{" "}
          <span
            className="tooltip font-light"
            data-tip="The corpus (paragraphs, sentences, etc) is used to build the vocabulary. Use a large corpus to train the vocabulary effectively."
          >
            <RxInfoCircled className="pt-1.5" />
          </span>
        </p>

        <button
          className="btn bg-white shadow-xl/30 border-none btn-md rounded-md hover:shadow-xl/60 shadow-blue-500/40"
          onClick={learnVocabulary}
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
