import React, { useState, useEffect } from "react";
import "../styles/SearchJob.css";

export interface Option {
  value: string;
  label: string;
}

interface NestedSelectProps {
  options: Option[] | Promise<Option[]>;
  onChange: (value: string) => void;
  label: string;
}

const NestedSelect: React.FC<NestedSelectProps> = ({
  options,
  onChange,
  label,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [resolvedOptions, setResolvedOptions] = useState<Option[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isPromise = (val: any): val is Promise<Option[]> => {
      return val && typeof val.then === "function";
    };

    const handlePromise = async (promise: Promise<Option[]>) => {
      try {
        const optionsData = await promise;
        setResolvedOptions(optionsData);
      } catch (error) {
        console.error("Erro ao obter opções:", error);
      }
    };

    // Verifica se options é uma Promise e a trata adequadamente
    if (isPromise(options)) {
      handlePromise(options);
    } else {
      // Se options for um array, apenas atualize resolvedOptions
      setResolvedOptions(options);
    }
  }, [options]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div className="SearchJobForm">
      <label htmlFor={label}>{label}</label>
      <select id={label} value={selectedOption} onChange={handleSelectChange}>
        <option value="">Escolha uma opção</option>
        {resolvedOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NestedSelect;
