'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Search, Filter, MoreHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Header } from '@/components/dashboard/Header';

const mockOpportunities = [
  { id: 'OPP-8921', client: 'Turner Construction', stage: 'Negotiation', value: '$24,500', closeDate: '2026-06-25', region: 'Mountain West' },
  { id: 'OPP-8922', client: 'PCL Builders', stage: 'Proposal Sent', value: '$12,200', closeDate: '2026-06-28', region: 'Central' },
  { id: 'OPP-8923', client: 'Skanska USA', stage: 'Qualification', value: '$45,000', closeDate: '2026-07-15', region: 'East Coast' },
  { id: 'OPP-8924', client: 'Kiewit Corp', stage: 'Closed Won', value: '$18,900', closeDate: '2026-06-01', region: 'Mountain West' },
  { id: 'OPP-8925', client: 'DPR Construction', stage: 'Discovery', value: '$8,400', closeDate: '2026-07-20', region: 'Southwest' },
];

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col h-full bg-slate-50/50">
      <Header 
        title="My Opportunities" 
        subtitle="Manage your active pipeline and deals"
      >
        <Link href="/dashboard">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-9 px-4 rounded-lg">
            <Plus className="w-4 h-4 mr-2" /> New Quote
          </Button>
        </Link>
      </Header>

      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <Card className="border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4 flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="text-base font-bold text-slate-800">Active Pipeline</CardTitle>
                <CardDescription className="text-xs font-medium">All open opportunities assigned to you.</CardDescription>
              </div>
              <div className="flex space-x-2">
                <div className="relative w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input placeholder="Search clients or ID..." className="pl-9 h-9 rounded-lg bg-white border-slate-200 text-sm" />
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
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Opp ID</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Client Name</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Stage</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Est. Value</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Region</TableHead>
                    <TableHead className="text-[10px] font-bold text-slate-500 uppercase tracking-widest py-3">Close Date</TableHead>
                    <TableHead className="text-right py-3"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOpportunities.map((opp) => (
                    <TableRow key={opp.id} className="border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
                      <TableCell className="font-bold text-slate-700 text-sm py-4">{opp.id}</TableCell>
                      <TableCell className="font-semibold text-slate-900 text-sm">{opp.client}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={`text-xs font-bold py-0.5 px-2 ${
                            opp.stage === 'Closed Won' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                            opp.stage === 'Negotiation' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                            'bg-blue-50 text-blue-700 border-blue-200'
                          }`}
                        >
                          {opp.stage}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-bold text-slate-700 text-sm">{opp.value}</TableCell>
                      <TableCell className="text-slate-500 text-sm font-medium">{opp.region}</TableCell>
                      <TableCell className="text-slate-500 text-sm font-medium">{opp.closeDate}</TableCell>
                      <TableCell className="text-right">
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
