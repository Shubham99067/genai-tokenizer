export type Vocab = { [token: string]: number };
export type InvVocab = { [id: number]: string };

export type Colors = Record<string, string>;

export interface PromptInputProps {
  title: string;
  placeholder: string;
  rows?: number;
  characters?: number;
  tooltip?: string;
  input?: string;
  onInputChange: (value: string) => void;
}

export interface PromptOutputProps {
  title: string;
  type: "encode" | "decode";
  tokens?: number[];
  message?: string;
  vocab?: Record<string, number>;
}

export interface VocabularyContextValue {
  vocab: Vocab;
  corpus: string;
  setCorpus: (text: string) => void;
  learnVocabulary: () => void;
  learnFromAdditionalText: (text: string) => void;
  resetVocab: () => void;
  loading: boolean;
}
