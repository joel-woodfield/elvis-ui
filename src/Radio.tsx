interface RadioProps<T extends string> {
  label?: string;
  options: readonly T[];
  activeOption: T;
  onChange: (option: T) => void;
}

export function Radio<T extends string>({ label, options, activeOption, onChange }: RadioProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-gray-700 text-sm">{label}</label>}
      <div className="flex gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-1">
            <input
              type="radio"
              value={option}
              checked={activeOption === option}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
