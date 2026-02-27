import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Radio({ label, options, activeOption, onChange }) {
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [label && _jsx("label", { className: "text-gray-700 text-sm", children: label }), _jsx("div", { className: "flex gap-4", children: options.map((option) => (_jsxs("label", { className: "flex items-center gap-1", children: [_jsx("input", { type: "radio", value: option, checked: activeOption === option, onChange: () => onChange(option) }), option] }, option))) })] }));
}
//# sourceMappingURL=Radio.js.map