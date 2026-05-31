import { BottomNav } from "./BottomNav";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 pb-24 pt-6">
        {children}
      </div>

      <BottomNav />
    </div>
  );
}