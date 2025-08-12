import Navbar from "./components/navbar";
import Encoding from "./components/encoding";
import Decoding from "./components/decoding";

function App() {
  return (
    <div className="flex flex-col gap-4 items-center max-w-4xl m-auto px-8">
      <Navbar />

      <h1 className="text-3xl font-extralight">
        Transform Your Text into AI-Ready Tokens - Instantly encode, decode, and
        visualize every token in your prompt.
      </h1>

      <Encoding />
      <Decoding />
    </div>
  );
}

export default App;
