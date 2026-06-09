'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';
import { ArrowLeft, CheckCircle2, ChevronRight, AlertTriangle, Zap, Package, Server, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function Step3Prediction() {
  const { setStep, isAnalyzing, analysisComplete, crmData, gloConfig } = useAppStore();

  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center py-24 space-y-6 animate-in fade-in duration-500">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-blue-600">
            <Server className="w-8 h-8 animate-pulse" />
          </div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-xl font-extrabold text-slate-900">Querying Inventory Matrix...</h3>
          <p className="text-sm font-medium text-slate-500">Cross-referencing {gloConfig.primaryUse} requirements against historical CRM performance.</p>
        </div>
      </div>
    );
  }

  if (!analysisComplete) return null;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center">
            <Zap className="w-5 h-5 mr-2 text-amber-500 fill-amber-500" />
            Prediction Engine Results
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-1">Live CRM x Inventory matching prediction.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Recommendation 1: High Fit */}
        <Card className="border-emerald-200 shadow-md shadow-emerald-100/50 rounded-2xl overflow-hidden bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between mb-2">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                TEST 1: Enterprise + Biz Dev + Short Term
              </div>
              <div className="bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse" />
                Likely
              </div>
            </div>
            <CardTitle className="text-xl font-extrabold text-slate-900">GLO 25x10 Open Bay</CardTitle>
            <CardDescription className="text-sm font-bold text-slate-500">$1,027 / mo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">Prediction Score</span>
                <span className="text-emerald-700">74.3 / 100</span>
              </div>
              <Progress value={74.3} className="h-2 bg-slate-100 [&>div]:bg-emerald-500" />
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-3">
              <div className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-700 leading-snug">
                  <span className="font-bold">Action:</span> Strong indicators for this profile. Recommend submitting immediately.
                </span>
              </div>
              <div className="flex items-start">
                <Package className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-700 leading-snug">
                  <span className="font-bold">VAPS Opportunity:</span> Professional Lunchroom Package shows a 75% historical attach rate for this configuration.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendation 2: Low Fit */}
        <Card className="border-red-200 shadow-sm rounded-2xl overflow-hidden bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between mb-2">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                TEST 2: {crmData.customer_account_type} + {crmData.sales_group} + Long Term
              </div>
              <div className="bg-red-50 border border-red-200 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5" />
                Low Probability
              </div>
            </div>
            <CardTitle className="text-xl font-extrabold text-slate-900">GLO COMBO 20 (w/ Storage)</CardTitle>
            <CardDescription className="text-sm font-bold text-slate-500">$747 / mo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">Prediction Score</span>
                <span className="text-red-600">31.8 / 100</span>
              </div>
              <Progress value={31.8} className="h-2 bg-slate-100 [&>div]:bg-red-500" />
            </div>

            <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 space-y-3">
              <div className="flex items-start text-red-800">
                <AlertTriangle className="w-4 h-4 mr-2 shrink-0 mt-0.5" />
                <span className="text-xs font-medium leading-snug">Route to Biz Dev (+20pp lift in conversion).</span>
              </div>
              <div className="flex items-start text-red-800">
                <AlertTriangle className="w-4 h-4 mr-2 shrink-0 mt-0.5" />
                <span className="text-xs font-medium leading-snug">Shorten term from {crmData.billing_periods} to 2–3 periods.</span>
              </div>
              <div className="flex items-start text-red-800">
                <AlertTriangle className="w-4 h-4 mr-2 shrink-0 mt-0.5" />
                <span className="text-xs font-medium leading-snug">High D&I cost — offer delivery discount (distance: {crmData.delivery_distance}mi).</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={() => setStep(2)} className="h-11 rounded-xl font-bold tracking-wide transition-all px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Edit Parameters
        </Button>
        <Button onClick={() => setStep(4)} className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide shadow-md transition-all px-8">
          Select Recommended & Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
