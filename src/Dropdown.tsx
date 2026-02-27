interface DropdownGroup<T extends string> {
  label: string;
  options: readonly T[];
}

interface DropdownProps<T extends string> {
  label: string;
  options?: readonly T[];
  groupedOptions?: readonly DropdownGroup<T>[];
  activeOption: T;
  onChange: (option: T) => void;
}

export function Dropdown<T extends string>({
  label,
  options = [],
  groupedOptions = [],
  activeOption,
  onChange,
}: DropdownProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 text-sm">{label}</label>
      <select
        value={activeOption}
        onChange={(e) => onChange(e.target.value as T)}
        className="p-2 rounded bg-white border border-gray-300"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        {groupedOptions.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
