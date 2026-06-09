'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppStore } from '@/store/useAppStore';
import { ArrowLeft, Box, CheckCircle2, Wand2 } from 'lucide-react';

export function Step2GloConfig() {
  const { gloConfig, updateGloConfig, setStep, setIsAnalyzing, setAnalysisComplete } = useAppStore();

  const handleRunAnalysis = () => {
    setStep(3);
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    
    // Simulate AI processing time
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">GLO Constraints</h2>
        <p className="text-sm text-slate-500 font-medium">Define layout constraints for Ground Level Offices only.</p>
      </div>

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

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setStep(1)} className="h-11 rounded-xl font-bold tracking-wide transition-all px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back 
        </Button>
        <Button onClick={handleRunAnalysis} className="h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold tracking-wide shadow-md transition-all px-8 border-2 border-transparent">
          <Wand2 className="w-4 h-4 mr-2 text-blue-400" />
          Get my recommendation
        </Button>
      </div>
    </div>
  );
}
