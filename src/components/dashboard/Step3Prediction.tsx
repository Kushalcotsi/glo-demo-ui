'use client';
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';
import { ArrowLeft, CheckCircle2, ChevronRight, AlertTriangle, Zap, Package, Server, ArrowRight, FileText, Send, Building2, Briefcase, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function Step3Prediction() {
  const { setStep, isAnalyzing, analysisComplete, crmData, gloConfig, selectedRecommendation, setSelectedRecommendation } = useAppStore();

  // Auto-select the AI choice when analysis completes if nothing is selected
  useEffect(() => {
    if (analysisComplete && !selectedRecommendation) {
      setSelectedRecommendation(recommendations[1]); // The AI choice
    }
  }, [analysisComplete, selectedRecommendation, setSelectedRecommendation]);

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

  const recommendations = [
    {
      id: 1,
      title: "GLO 20x8 Standard",
      price: "$850",
      score: 52.4,
      tag: "Acceptable",
      tagColor: "bg-slate-100 text-slate-700 border-slate-200",
      progressClass: "[&>div]:bg-slate-500",
      scoreColor: "text-slate-600",
      topBorder: "bg-slate-400",
      cardClass: "border-slate-200 shadow-sm",
      isAiChoice: false,
      actions: [
        { icon: <CheckCircle2 className="w-4 h-4 text-slate-400 mr-2 shrink-0 mt-0.5" />, text: "Basic compliance with requirements." },
        { icon: <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />, text: "Missing optimal space for Lunchroom Package." }
      ]
    },
    {
      id: 2,
      title: "GLO 25x10 Open Bay",
      price: "$1,027",
      score: 74.3,
      tag: "High Probability",
      tagColor: "bg-blue-100 text-blue-800 border-blue-200",
      progressClass: "[&>div]:bg-blue-600",
      scoreColor: "text-blue-700",
      topBorder: "bg-blue-600",
      cardClass: "border-blue-500 ring-2 ring-blue-500/20 shadow-xl relative z-10 transform md:-translate-y-2",
      isAiChoice: true,
      actions: [
        { icon: <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />, text: "Strong indicators for this profile. Recommend submitting immediately." },
        { icon: <Package className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" />, text: "VAPS Opportunity: Professional Lunchroom Package shows a 75% historical attach rate." }
      ]
    },
    {
      id: 3,
      title: "GLO COMBO 20",
      price: "$747",
      score: 31.8,
      tag: "Low Probability",
      tagColor: "bg-red-50 text-red-700 border-red-200",
      progressClass: "[&>div]:bg-red-500",
      scoreColor: "text-red-600",
      topBorder: "bg-red-500",
      cardClass: "border-red-200 shadow-sm",
      isAiChoice: false,
      actions: [
        { icon: <AlertTriangle className="w-4 h-4 text-red-500 mr-2 shrink-0 mt-0.5" />, text: "Route to Biz Dev (+20pp lift in conversion)." },
        { icon: <AlertTriangle className="w-4 h-4 text-red-500 mr-2 shrink-0 mt-0.5" />, text: "High D&I cost — offer delivery discount." }
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center">
            <Zap className="w-5 h-5 mr-2 text-amber-500 fill-amber-500" />
            Prediction Engine Results
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-1">Live CRM x Inventory matching prediction. Select a solution to proceed.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {recommendations.map((rec) => (
          <Card 
            key={rec.id} 
            className={`overflow-hidden bg-white relative flex flex-col transition-all cursor-pointer ${rec.cardClass} ${selectedRecommendation?.id === rec.id ? 'ring-2 ring-blue-600' : 'hover:border-blue-300'}`}
            onClick={() => setSelectedRecommendation(rec)}
          >
            {rec.isAiChoice && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-b-lg uppercase tracking-wider flex items-center z-20 shadow-md">
                <Sparkles className="w-3 h-3 mr-1" /> AI Choice
              </div>
            )}
            <div className={`absolute top-0 left-0 w-full h-1 ${rec.topBorder}`} />
            
            <CardHeader className={`pb-4 ${rec.isAiChoice ? 'pt-8' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`border text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center ${rec.tagColor}`}>
                  {rec.isAiChoice && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-1.5 animate-pulse" />}
                  {rec.tag}
                </div>
              </div>
              <CardTitle className="text-xl font-extrabold text-slate-900">{rec.title}</CardTitle>
              <CardDescription className="text-sm font-bold text-slate-500">{rec.price} <span className="font-normal">/ mo</span></CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 flex-1 flex flex-col">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600">Prediction Score</span>
                  <span className={rec.scoreColor}>{rec.score} / 100</span>
                </div>
                <Progress value={rec.score} className={`h-2 bg-slate-100 ${rec.progressClass}`} />
              </div>

              <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 space-y-3 flex-1">
                {rec.actions.map((action, idx) => (
                  <div key={idx} className="flex items-start">
                    {action.icon}
                    <span className="text-xs font-medium text-slate-700 leading-snug">
                      {action.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={selectedRecommendation?.id === rec.id ? "default" : "outline"}
                className={`w-full h-11 rounded-xl font-bold tracking-wide transition-all ${
                  selectedRecommendation?.id === rec.id 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedRecommendation(rec);
                }}
              >
                {selectedRecommendation?.id === rec.id ? 'Selected' : 'Select Solution'}
                {selectedRecommendation?.id === rec.id && <CheckCircle2 className="w-4 h-4 ml-2" />}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedRecommendation && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white mt-8">
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
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Selected Solution</p>
                    <h3 className="text-lg font-extrabold text-slate-900">{selectedRecommendation.title}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-500">Est. Base Rate</p>
                  <p className="text-xl font-black text-slate-900">{selectedRecommendation.price}<span className="text-sm font-medium text-slate-500">/mo</span></p>
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

          <div className="flex justify-between pt-8">
            <Button variant="outline" onClick={() => setStep(1)} className="h-11 rounded-xl font-bold tracking-wide transition-all px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Edit Parameters
            </Button>
            <Button className="h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 font-bold tracking-wide shadow-md transition-all px-8">
              <Send className="w-4 h-4 mr-2 text-emerald-500" />
              Export to CPQ Salesforce
            </Button>
          </div>
        </div>
      )}
      
      {!selectedRecommendation && (
        <div className="flex justify-start pt-8">
          <Button variant="outline" onClick={() => setStep(1)} className="h-11 rounded-xl font-bold tracking-wide transition-all px-8 border-slate-200 text-slate-600 hover:bg-slate-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Edit Parameters
          </Button>
        </div>
      )}
    </div>
  );
}
