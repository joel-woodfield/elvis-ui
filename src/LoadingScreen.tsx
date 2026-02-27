export function LoadingScreen({ message }: { message: string }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50 z-50">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated loading spinner */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>

        {/* Loading message */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
            {message}...
          </h2>
        </div>
      </div>
    </div>
  );
}
