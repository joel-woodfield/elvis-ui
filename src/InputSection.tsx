interface InputSectionProps {
  label: string;
  children?: React.ReactNode;
}

export function InputSection({ label, children }: InputSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="text-s font-semibold tracking-wide text-slate-600">
          {label}
        </div>
        {/* <div className="h-px flex-1 bg-slate-300" /> */}
      </div>
      {children}
    </section>
  );
}
