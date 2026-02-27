interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 cursor-pointer bg-orange-200 rounded hover:bg-orange-300 border border-gray-300"
    >
      {label}
    </button>
  );
}
