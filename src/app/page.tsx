import React from 'react';
import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Building2, User, Lock, Command } from 'lucide-react';
import { WillScotLogo } from '@/components/ui/WillScotLogo';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="h-screen w-screen overflow-hidden flex font-sans relative">
      
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0 bg-slate-50 flex items-center justify-center overflow-hidden">
        <Image 
          src="https://wsmm.bynder.com/transform/94514224-0755-4115-9af2-46b1f5dcbdd9/storage-nav" 
          alt="Conteneurs standards" 
          fill
          priority
          className="object-cover opacity-90 object-left origin-left scale-125" 
        />
        {/* Gradient Overlay to ensure text and card are readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent" />
      </div>

      {/* Left Side: Brand / Visuals */}
      <div className="hidden md:flex flex-1 flex-col justify-center relative z-10 p-12 lg:p-24">
        <div>
          <div className="flex items-center mb-8 text-white drop-shadow-lg">
            <WillScotLogo className="w-48 h-auto" />
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight max-w-xl drop-shadow-lg">
            AI-Powered Deal Configuration.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-slate-200 max-w-lg leading-relaxed drop-shadow-md">
            Accelerate your sales pipeline. Instantly generate accurate quotes and intelligent unit recommendations directly from your active CRM opportunities.
          </p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-sm mx-auto space-y-8">
          
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">Access Platform</h2>
            <p className="text-sm text-slate-500">Authenticate to access your configuration workspace.</p>
          </div>

          <Card className="border-slate-200 shadow-xl shadow-slate-200/40 rounded-2xl bg-white overflow-hidden">
            <CardContent className="p-8">
              <form className="space-y-6">
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-slate-400" />
                      </div>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@company.com" 
                        className="pl-10 h-11 rounded-xl bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-sm font-medium text-slate-700">Password</Label>
                      <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-4 w-4 text-slate-400" />
                      </div>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-10 h-11 rounded-xl bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" className="rounded-md border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Remember this device
                  </label>
                </div>

                <Link href="/dashboard" className="w-full">
                  <Button type="button" className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide shadow-md transition-all text-sm">
                    Sign In 
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

              </form>
            </CardContent>
          </Card>

          <p className="text-center text-xs font-medium text-slate-500">
            Don't have an enterprise account? <a href="#" className="text-blue-600 font-bold hover:underline">Request access</a>
          </p>
          
        </div>
      </div>
      
    </div>
  );
}
