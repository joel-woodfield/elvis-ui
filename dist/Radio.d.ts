interface RadioProps<T extends string> {
    label?: string;
    options: readonly T[];
    activeOption: T;
    onChange: (option: T) => void;
}
export declare function Radio<T extends string>({ label, options, activeOption, onChange }: RadioProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Radio.d.ts.map