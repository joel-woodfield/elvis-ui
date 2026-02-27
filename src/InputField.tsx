interface InputFieldProps {
  label: string;
  value?: string;
  onChange?: (newValue: string) => void;
}

export function InputField({ label, value, onChange }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 text-sm">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="p-2 rounded bg-white border border-gray-300"
      />
    </div>
  );
}
