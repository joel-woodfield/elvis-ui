import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Dropdown({ label, options = [], groupedOptions = [], activeOption, onChange, }) {
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("label", { className: "text-gray-700 text-sm", children: label }), _jsxs("select", { value: activeOption, onChange: (e) => onChange(e.target.value), className: "p-2 rounded bg-white border border-gray-300", children: [options.map((option) => (_jsx("option", { value: option, children: option }, option))), groupedOptions.map((group) => (_jsx("optgroup", { label: group.label, children: group.options.map((option) => (_jsx("option", { value: option, children: option }, option))) }, group.label)))] })] }));
}
//# sourceMappingURL=Dropdown.js.map