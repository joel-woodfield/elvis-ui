interface TabsProps<T extends string> {
    tabs: readonly T[];
    activeTab: T;
    onChange: (tab: T) => void;
}
export declare function Tabs<T extends string>({ tabs, activeTab, onChange }: TabsProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tabs.d.ts.map