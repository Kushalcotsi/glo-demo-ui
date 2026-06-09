import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export function Header({ title, subtitle, children }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-30 shadow-sm">
      <div className="flex items-center">
        <div>
          <h1 className="text-lg font-bold text-slate-900">{title}</h1>
          <p className="text-xs font-medium text-slate-500">{subtitle}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {children}
        <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden md:block">
            <div className="text-xs font-bold text-slate-900">Sales Rep II</div>
            <div className="text-[10px] font-medium text-slate-500">ISRC - Central</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-slate-100">
            SR
          </div>
        </div>
      </div>
    </header>
  );
}
