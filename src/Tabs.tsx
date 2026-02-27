interface TabsProps<T extends string> {
  tabs: readonly T[];
  activeTab: T; 
  onChange: (tab: T) => void;
}

export function Tabs<T extends string>({ tabs, activeTab, onChange }: TabsProps<T>) {
  return (
    <div className="flex mb-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-5 py-1 cursor-pointer rounded ${
            activeTab === tab
              ? "text-orange-400 border-b-2 border-orange-400"
              : "text-gray-950 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
