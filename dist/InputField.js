import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function InputField({ label, value, onChange }) {
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("label", { className: "text-gray-700 text-sm", children: label }), _jsx("input", { type: "text", value: value, onChange: (e) => onChange && onChange(e.target.value), className: "p-2 rounded bg-white border border-gray-300" })] }));
}
//# sourceMappingURL=InputField.js.map