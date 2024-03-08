export interface Option {
  value: string;
  label: string;
}

export interface NestedSelectProps {
  options: Option[];
  onChange: (value: string) => void;
}
