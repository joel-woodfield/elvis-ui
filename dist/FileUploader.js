import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { Button } from './Button';
export function FileUploader({ label, onFileUpload }) {
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            onFileUpload(file);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("input", { type: "file", ref: fileInputRef, onChange: handleFileChange, className: "hidden", accept: ".csv" }), _jsx(Button, { label: label, onClick: handleButtonClick })] }));
}
//# sourceMappingURL=FileUploader.js.map