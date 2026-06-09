'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';
import { ArrowLeft, CheckCircle2, FileText, Send, Building2, Briefcase } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Step4Review() {
  const { crmData, gloConfig, setStep } = useAppStore();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Final Quote Review</h2>
        <p className="text-sm text-slate-500 font-medium">Verify the AI-selected product against the CRM opportunity.</p>
      </div>

      <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white">
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <CardTitle className="text-base font-bold text-slate-800">Deal Summary</CardTitle>
              <CardDescription className="text-xs font-medium">Ready for CPQ system export</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-8">
          
          {/* Selected Product Highlight */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Selected Solution</p>
                <h3 className="text-lg font-extrabold text-slate-900">GLO 25x10 Open Bay</h3>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-500">Est. Base Rate</p>
              <p className="text-xl font-black text-slate-900">$1,027<span className="text-sm font-medium text-slate-500">/mo</span></p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CRM Context */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center border-b border-slate-100 pb-2">
                <Briefcase className="w-3.5 h-3.5 mr-2 text-slate-400" />
                Sales Metadata
              </h4>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Client / Opp</dt>
                  <dd className="text-xs font-bold text-slate-800">{crmData.clientName}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Account Type</dt>
                  <dd className="text-xs font-bold text-slate-800">{crmData.customer_account_type}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Sales Group & Region</dt>
                  <dd className="text-xs font-bold text-slate-800">{crmData.sales_group} - {crmData.region}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Billing Periods</dt>
                  <dd className="text-xs font-bold text-slate-800">{crmData.billing_periods} Periods</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Avg Discount</dt>
                  <dd className="text-xs font-bold text-slate-800">{crmData.avg_discount_pct}%</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Delivery Distance</dt>
                  <dd className="text-xs font-bold text-slate-800">{crmData.delivery_distance} miles</dd>
                </div>
              </dl>
            </div>

            {/* Config Context */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center border-b border-slate-100 pb-2">
                <Building2 className="w-3.5 h-3.5 mr-2 text-slate-400" />
                Technical Constraints
              </h4>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Building Style</dt>
                  <dd className="text-xs font-bold text-slate-800">Ground Level Office</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Primary Application</dt>
                  <dd className="text-xs font-bold text-slate-800">{gloConfig.primaryUse}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Capacity Requirement</dt>
                  <dd className="text-xs font-bold text-slate-800">{gloConfig.capacityNeeded}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">Storage Combo</dt>
                  <dd className="text-xs font-bold text-slate-800">{gloConfig.needStorageCombo}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-xs font-medium text-slate-500">VAPS Recommended</dt>
                  <dd className="text-xs font-bold text-blue-600">Lunchroom Package</dd>
                </div>
              </dl>
            </div>
          </div>

        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(3)} className="h-11 rounded-xl font-bold tracking-wide transition-all px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Prediction
        </Button>
        <Button className="h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 font-bold tracking-wide shadow-md transition-all px-8">
          <Send className="w-4 h-4 mr-2 text-emerald-500" />
          Export to CPQ Salesforce
        </Button>
      </div>
    </div>
  );
}
