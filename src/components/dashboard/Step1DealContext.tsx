'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppStore } from '@/store/useAppStore';
import { ArrowRight, Briefcase } from 'lucide-react';

export function Step1DealContext() {
  const { crmData, updateCrmData, setStep } = useAppStore();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Deal Context</h2>
        <p className="text-sm text-slate-500 font-medium">Input the requirements for this opportunity.</p>
      </div>

      <Card className="border-slate-200 shadow-sm rounded-2xl bg-white overflow-visible">
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <CardTitle className="text-base font-bold text-slate-800">Sales Intelligence</CardTitle>
              <CardDescription className="text-xs font-medium">Data required for accurate AI predictive scoring</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-6">
            
            <div className="space-y-2 md:col-span-3 pb-2 border-b border-slate-100">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Client & Opportunity Context</Label>
              <Select value={crmData.clientName} onValueChange={(val) => updateCrmData('clientName', val || '')}>
                <SelectTrigger className="bg-white border-slate-200 focus:ring-blue-600 h-10 rounded-xl font-medium w-full md:w-1/2">
                  <SelectValue placeholder="Select active opportunity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Turner Construction (Opp-8921)">Turner Construction (Opp-8921)</SelectItem>
                  <SelectItem value="PCL Builders (Opp-8922)">PCL Builders (Opp-8922)</SelectItem>
                  <SelectItem value="Skanska USA (Opp-8923)">Skanska USA (Opp-8923)</SelectItem>
                  <SelectItem value="Create New Profile...">+ Create New Client Profile...</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Account Type</Label>
              <Select value={crmData.customer_account_type} onValueChange={(val) => updateCrmData('customer_account_type', val || '')}>
                <SelectTrigger className="bg-slate-50 border-slate-200 focus:ring-blue-600 h-10 rounded-xl font-medium">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MONTHLY RECURRING">MONTHLY RECURRING</SelectItem>
                  <SelectItem value="ONE TIME">ONE TIME</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Region</Label>
              <Input value={crmData.region} onChange={(e) => updateCrmData('region', e.target.value)} className="bg-slate-50 border-slate-200 h-10 rounded-xl font-medium" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Division</Label>
              <Input value={crmData.division} onChange={(e) => updateCrmData('division', e.target.value)} className="bg-slate-50 border-slate-200 h-10 rounded-xl font-medium" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sales Group</Label>
              <Input value={crmData.sales_group} onChange={(e) => updateCrmData('sales_group', e.target.value)} className="bg-slate-50 border-slate-200 h-10 rounded-xl font-medium" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Quote Type</Label>
              <Select value={crmData.quote_type} onValueChange={(val) => updateCrmData('quote_type', val || '')}>
                <SelectTrigger className="bg-slate-50 border-slate-200 focus:ring-blue-600 h-10 rounded-xl font-medium">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Rent - Used">Rent - Used</SelectItem>
                  <SelectItem value="Rent - New">Rent - New</SelectItem>
                  <SelectItem value="Sale">Sale</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Owner Job Title</Label>
              <Input value={crmData.owner_job_title} onChange={(e) => updateCrmData('owner_job_title', e.target.value)} className="bg-slate-50 border-slate-200 h-10 rounded-xl font-medium" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Billing Periods</Label>
              <Input type="number" value={crmData.billing_periods} onChange={(e) => updateCrmData('billing_periods', e.target.value)} className="bg-slate-50 border-slate-200 h-10 rounded-xl font-medium" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Discount (%)</Label>
              <Input type="number" step="0.1" value={crmData.avg_discount_pct} onChange={(e) => updateCrmData('avg_discount_pct', e.target.value)} className="bg-slate-50 border-slate-200 h-10 rounded-xl font-medium" />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Delivery Distance (mi)</Label>
              <Input type="number" value={crmData.delivery_distance} onChange={(e) => updateCrmData('delivery_distance', e.target.value)} className="bg-slate-50 border-slate-200 h-10 rounded-xl font-medium" />
            </div>

          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={() => setStep(2)} className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide shadow-md transition-all px-8">
          Continue to Configuration
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
