interface DropdownGroup<T extends string> {
    label: string;
    options: readonly T[];
}
interface DropdownProps<T extends string> {
    label: string;
    options?: readonly T[];
    groupedOptions?: readonly DropdownGroup<T>[];
    activeOption: T;
    onChange: (option: T) => void;
}
export declare function Dropdown<T extends string>({ label, options, groupedOptions, activeOption, onChange, }: DropdownProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Dropdown.d.ts.map