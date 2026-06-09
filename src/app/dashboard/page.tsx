'use client';
import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { Step1DealContext } from '@/components/dashboard/Step1DealContext';
import { Step2GloConfig } from '@/components/dashboard/Step2GloConfig';
import { Step3Prediction } from '@/components/dashboard/Step3Prediction';
import { Step4Review } from '@/components/dashboard/Step4Review';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/dashboard/Header';

export default function DashboardPage() {
  const { currentStep } = useAppStore();

  return (
    <div className="flex flex-col h-full bg-slate-50/50">
      <Header 
        title="Quotes Prediction Engine" 
        subtitle="Live Internal Deal Configuration" 
      />

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div 
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold border-2 transition-colors ${
                    currentStep === step 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : currentStep > step 
                        ? 'bg-blue-100 border-blue-100 text-blue-700'
                        : 'bg-white border-slate-200 text-slate-400'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div className={`h-1 w-12 rounded-full ${currentStep > step ? 'bg-blue-100' : 'bg-slate-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Render Active Step */}
          {currentStep === 1 && <Step1DealContext />}
          {currentStep === 2 && <Step2GloConfig />}
          {currentStep === 3 && <Step3Prediction />}
          {currentStep === 4 && <Step4Review />}

        </div>
      </div>
    </div>
  );
}
