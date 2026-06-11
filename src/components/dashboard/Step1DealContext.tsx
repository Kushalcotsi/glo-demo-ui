'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppStore } from '@/store/useAppStore';
import { ArrowRight, Briefcase, Box, CheckCircle2, Wand2 } from 'lucide-react';

export function Step1DealContext() {
  const { crmData, updateCrmData, gloConfig, updateGloConfig, setStep, setIsAnalyzing, setAnalysisComplete } = useAppStore();

  const handleRunAnalysis = () => {
    setStep(2);
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    
    // Simulate AI processing time
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2500);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Deal Context & Constraints</h2>
          <p className="text-sm text-slate-500 font-medium">Input the requirements and define layout constraints for this opportunity.</p>
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

        <Card className="border-slate-200 shadow-sm rounded-2xl bg-white overflow-visible">
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-slate-800">Unit Profile</CardTitle>
                <CardDescription className="text-xs font-medium">Scoping to GLO matrix attributes</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              
              <div className="space-y-3">
                <div>
                  <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Building Style / Elevation Preference</Label>
                  <p className="text-xs text-slate-400 mt-1 mb-2">Locked to Ground Set as per customer request.</p>
                </div>
                <div className="h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center px-3 cursor-not-allowed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                  <span className="text-sm font-bold text-slate-700">Ground Level Office (GLO)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Primary Workspace Application</Label>
                  <p className="text-xs text-slate-400 mt-1 mb-2">What is the core function of this unit?</p>
                </div>
                <Select value={gloConfig.primaryUse} onValueChange={(val) => updateGloConfig('primaryUse', val || '')}>
                  <SelectTrigger className="bg-white border-slate-200 focus:ring-blue-600 h-10 rounded-xl font-medium">
                    <SelectValue placeholder="Select application" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Office & Meeting Space">Office & Meeting Space</SelectItem>
                    <SelectItem value="Education & Social">Education & Social</SelectItem>
                    <SelectItem value="Security / Guard">Security / Guard</SelectItem>
                    <SelectItem value="Sanitation">Sanitation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div>
                  <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Capacity & Footprint (Length)</Label>
                  <p className="text-xs text-slate-400 mt-1 mb-2">Estimate the physical length required.</p>
                </div>
                <Select value={gloConfig.capacityNeeded} onValueChange={(val) => updateGloConfig('capacityNeeded', val || '')}>
                  <SelectTrigger className="bg-white border-slate-200 focus:ring-blue-600 h-10 rounded-xl font-medium">
                    <SelectValue placeholder="Select capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Small (10' - 18')">Small (10' - 18')</SelectItem>
                    <SelectItem value="Medium (20' - 25')">Medium (20' - 25')</SelectItem>
                    <SelectItem value="Large (30' - 40')">Large (30' - 40')</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div>
                  <Label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Office / Storage Combo?</Label>
                  <p className="text-xs text-slate-400 mt-1 mb-2">Does the unit require a split storage bay?</p>
                </div>
                <Select value={gloConfig.needStorageCombo} onValueChange={(val) => updateGloConfig('needStorageCombo', val || '')}>
                  <SelectTrigger className="bg-white border-slate-200 focus:ring-blue-600 h-10 rounded-xl font-medium">
                    <SelectValue placeholder="Select requirement" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="No">No (Open Bay Office)</SelectItem>
                    <SelectItem value="Yes">Yes (Combo Unit)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleRunAnalysis} className="h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold tracking-wide shadow-md transition-all px-8 border-2 border-transparent">
          <Wand2 className="w-4 h-4 mr-2 text-blue-400" />
          Get my recommendation
        </Button>
      </div>
    </div>
  );
}

