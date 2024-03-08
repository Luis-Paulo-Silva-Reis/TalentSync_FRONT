// NestedSelect.tsx
import React, { useState } from 'react';

export interface Option {
  value: string;
  label: string;
}

interface NestedSelectProps {
  options: Option[] | undefined;
  onChange: (value: string) => void;
}


const NestedSelect: React.FC<NestedSelectProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="">Escolha uma opção</option>
      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};

export default NestedSelect;
