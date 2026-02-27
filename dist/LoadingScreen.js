import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function LoadingScreen({ message }) {
    return (_jsx("div", { className: "fixed inset-0 flex flex-col items-center justify-center bg-slate-50 z-50", children: _jsxs("div", { className: "flex flex-col items-center space-y-6", children: [_jsx("div", { className: "relative flex items-center justify-center", children: _jsx("div", { className: "w-16 h-16 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" }) }), _jsx("div", { className: "text-center", children: _jsxs("h2", { className: "text-xl font-semibold text-slate-800 tracking-tight", children: [message, "..."] }) })] }) }));
}
//# sourceMappingURL=LoadingScreen.js.map