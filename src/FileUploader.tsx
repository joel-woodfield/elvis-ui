import { useRef } from 'react';
import { Button } from './Button';

interface FileUploaderProps {
  label: string;
  onFileUpload: (file: File) => void;
}

export function FileUploader({ label, onFileUpload }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".csv"
      />

      <Button label={label} onClick={handleButtonClick} />
    </>
  );
}
