'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter, Download, MoreHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mockQuotes = [
  { id: 'QT-2026-001', client: 'Turner Construction', product: 'GLO 25x10 Open Bay', status: 'Sent', total: '$1,027/mo', date: '2026-06-08' },
  { id: 'QT-2026-002', client: 'PCL Builders', product: 'GLO COMBO 20', status: 'Draft', total: '$747/mo', date: '2026-06-09' },
  { id: 'QT-2026-003', client: 'Skanska USA', product: '40x8 HQ Ground Level', status: 'Approved', total: '$1,850/mo', date: '2026-06-05' },
  { id: 'QT-2026-004', client: 'Kiewit Corp', product: '30\' OPEN BAY OFFICE', status: 'Expired', total: '$1,120/mo', date: '2026-05-20' },
];

export default function QuotesPage() {
  return (
    <div className="flex flex-col h-full bg-slate-50/50">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
        <div>
          <h1 className="text-lg font-bold text-slate-900">Active Quotes</h1>
          <p className="text-xs font-medium text-slate-500">View and manage generated CPQ quotes</p>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <Card className="border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4 flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-base font-bold text-slate-800">Quote Ledger</CardTitle>
                <CardDescription className="text-xs font-medium">Recent quotes generated from the Prediction Engine.</CardDescription>
              </div>
              <div className="flex space-x-2">
                <div className="relative w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input placeholder="Search quote ID or client..." className="pl-9 h-9 rounded-lg bg-white border-slate-200 text-sm" />
                </div>
                <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg border-slate-200">
                  <Filter className="w-4 h-4 text-slate-500" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow className="border-slate-100 hover:bg-transparent">
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Quote ID</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Client Name</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Primary Product</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Status</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Total / Rate</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Generated</TableHead>
                    <TableHead className="text-right py-3"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockQuotes.map((quote) => (
                    <TableRow key={quote.id} className="border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
                      <TableCell className="font-bold text-blue-600 text-sm py-4">{quote.id}</TableCell>
                      <TableCell className="font-semibold text-slate-900 text-sm">{quote.client}</TableCell>
                      <TableCell className="text-slate-600 text-sm font-medium">{quote.product}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={`text-xs font-bold py-0.5 px-2 ${
                            quote.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                            quote.status === 'Sent' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            quote.status === 'Expired' ? 'bg-red-50 text-red-700 border-red-200' :
                            'bg-slate-100 text-slate-700 border-slate-300'
                          }`}
                        >
                          {quote.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-bold text-slate-700 text-sm">{quote.total}</TableCell>
                      <TableCell className="text-slate-500 text-sm font-medium">{quote.date}</TableCell>
                      <TableCell className="text-right flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-700">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
