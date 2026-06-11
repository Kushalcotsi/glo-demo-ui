import { create } from 'zustand';

interface AppState {
  currentStep: number;
  setStep: (step: number) => void;
  
  // CRM / Deal Context
  crmData: {
    clientName: string;
    customer_account_type: string;
    region: string;
    division: string;
    sales_group: string;
    quote_type: string;
    owner_job_title: string;
    billing_periods: string;
    avg_discount_pct: string;
    delivery_distance: string;
    days_to_submit: string;
    created_month: string;
    delivery_zone_missing: string;
  };
  updateCrmData: (field: string, value: string) => void;

  // GLO Configuration Context
  gloConfig: {
    primaryUse: string;
    capacityNeeded: string;
    needStorageCombo: string;
  };
  updateGloConfig: (field: string, value: string) => void;

  // Analysis State
  isAnalyzing: boolean;
  setIsAnalyzing: (status: boolean) => void;
  analysisComplete: boolean;
  setAnalysisComplete: (status: boolean) => void;

  // Selection
  selectedRecommendation: any;
  setSelectedRecommendation: (rec: any) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentStep: 1,
  setStep: (step) => set({ currentStep: step }),

  crmData: {
    clientName: "Turner Construction (Opp-8921)",
    customer_account_type: "MONTHLY RECURRING",
    region: "Mountain West",
    division: "Central",
    sales_group: "ISRC",
    quote_type: "Rent - Used",
    owner_job_title: "Sales Representative II",
    billing_periods: "13",
    avg_discount_pct: "5.0",
    delivery_distance: "150.0",
    days_to_submit: "0",
    created_month: "9",
    delivery_zone_missing: "1"
  },
  updateCrmData: (field, value) => set((state) => ({
    crmData: { ...state.crmData, [field]: value }
  })),

  gloConfig: {
    primaryUse: "Office & Meeting Space",
    capacityNeeded: "2-4 People",
    needStorageCombo: "No",
  },
  updateGloConfig: (field, value) => set((state) => ({
    gloConfig: { ...state.gloConfig, [field]: value }
  })),

  isAnalyzing: false,
  setIsAnalyzing: (status) => set({ isAnalyzing: status }),
  analysisComplete: false,
  setAnalysisComplete: (status) => set({ analysisComplete: status }),

  selectedRecommendation: null,
  setSelectedRecommendation: (rec) => set({ selectedRecommendation: rec }),
}));
