export type Vocab = { [token: string]: number };
export type InvVocab = { [id: number]: string };

export type Colors = Record<string, string>;

export interface DecodingProps {
  vocab: Vocab;
}

export interface EncodingProps extends DecodingProps {
  setVocab: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

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

export interface CorpusProps {
  setVocab: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}
