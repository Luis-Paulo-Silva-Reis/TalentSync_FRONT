import React, { useState } from "react";
import "../styles/SearchJob.css";

export interface Option {
  value: string;
  label: string;
}

interface NestedSelectProps {
  options: Option[] | undefined;
  onChange: (value: string) => void;
  label: string; // Adicionando a propriedade label
}

const NestedSelect: React.FC<NestedSelectProps> = ({
  options,
  onChange,
  label,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

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
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default NestedSelect;
