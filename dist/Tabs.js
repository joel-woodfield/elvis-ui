import { jsx as _jsx } from "react/jsx-runtime";
export function Tabs({ tabs, activeTab, onChange }) {
    return (_jsx("div", { className: "flex mb-4 border-b border-gray-200", children: tabs.map((tab) => (_jsx("button", { onClick: () => onChange(tab), className: `px-5 py-1 cursor-pointer rounded ${activeTab === tab
                ? "text-orange-400 border-b-2 border-orange-400"
                : "text-gray-950 hover:bg-gray-200"}`, children: tab }, tab))) }));
}
//# sourceMappingURL=Tabs.js.map