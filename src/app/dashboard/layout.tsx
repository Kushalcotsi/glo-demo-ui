import React from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { WillScotLogo } from '@/components/ui/WillScotLogo';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10 shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.1)]">
        {children}
      </main>
    </div>
  );
}
