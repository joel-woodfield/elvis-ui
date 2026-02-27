import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function InputField({ label, value, onChange, readonly = false, rows, }) {
    const commonClasses = "p-2 rounded border border-gray-300 w-full";
    const bgClass = readonly ? "bg-gray-100" : "bg-white";
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("label", { className: "text-gray-700 text-sm", children: label }), rows && rows > 1 ? (_jsx("textarea", { value: value, rows: rows, readOnly: readonly, onChange: (e) => onChange && onChange(e.target.value), className: `${commonClasses} ${bgClass} resize-none` })) : (_jsx("input", { type: "text", value: value, readOnly: readonly, onChange: (e) => onChange && onChange(e.target.value), className: `${commonClasses} ${bgClass}` }))] }));
}
//# sourceMappingURL=InputField.js.map