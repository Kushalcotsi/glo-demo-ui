'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Users, Settings, LogOut, Package } from 'lucide-react';
import { WillScotLogo } from '@/components/ui/WillScotLogo';

export function Sidebar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/dashboard' && pathname === '/dashboard') return true;
    if (path !== '/dashboard' && pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkClasses = (path: string) => {
    return isActive(path)
      ? "flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-blue-600/10 text-blue-600 font-bold"
      : "flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-slate-100 font-medium transition-colors text-slate-300";
  };

  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-full shrink-0 z-20">
      <div className="h-16 px-6 border-b border-slate-800 flex items-center justify-start shrink-0">
        <WillScotLogo className="text-white w-32 h-auto" />
      </div>

      <div className="p-4 flex-1 space-y-1">
        <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-4 mt-4 px-3">
          Internal Tools
        </div>
        
        <Link href="/dashboard" className={getLinkClasses('/dashboard')}>
          <Package className="w-4 h-4" />
          <span className="text-sm">Prediction Engine</span>
        </Link>
        <Link href="/dashboard/opportunities" className={getLinkClasses('/dashboard/opportunities')}>
          <LayoutDashboard className="w-4 h-4" />
          <span className="text-sm">My Opportunities</span>
        </Link>
        <Link href="/dashboard/quotes" className={getLinkClasses('/dashboard/quotes')}>
          <FileText className="w-4 h-4" />
          <span className="text-sm">Active Quotes</span>
        </Link>
        <Link href="/dashboard/customers" className={getLinkClasses('/dashboard/customers')}>
          <Users className="w-4 h-4" />
          <span className="text-sm">Customers</span>
        </Link>
      </div>

      <div className="p-4 border-t border-slate-800 space-y-1">
        <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-slate-100 font-medium transition-colors">
          <Settings className="w-4 h-4" />
          <span className="text-sm">Settings</span>
        </a>
        <a href="/" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-red-400 font-medium transition-colors">
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Sign Out</span>
        </a>
      </div>
    </div>
  );
}
