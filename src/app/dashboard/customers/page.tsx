'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Plus, Building2, MapPin, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Header } from '@/components/dashboard/Header';

const mockCustomers = [
  { id: 'CUST-01', name: 'Turner Construction', industry: 'Commercial Construction', location: 'Denver, CO', activeDeals: 3 },
  { id: 'CUST-02', name: 'PCL Builders', industry: 'Infrastructure', location: 'Salt Lake City, UT', activeDeals: 1 },
  { id: 'CUST-03', name: 'Skanska USA', industry: 'Commercial Construction', location: 'Phoenix, AZ', activeDeals: 2 },
  { id: 'CUST-04', name: 'Kiewit Corp', industry: 'Energy & Infrastructure', location: 'Omaha, NE', activeDeals: 4 },
  { id: 'CUST-05', name: 'DPR Construction', industry: 'Healthcare Construction', location: 'Austin, TX', activeDeals: 1 },
  { id: 'CUST-06', name: 'Hensel Phelps', industry: 'Aviation', location: 'Greeley, CO', activeDeals: 0 },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState(mockCustomers);
  const [isOpen, setIsOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: '', industry: '', location: '' });

  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomer.name) return;
    
    const nextId = `CUST-${(customers.length + 1).toString().padStart(2, '0')}`;
    setCustomers([{ id: nextId, ...newCustomer, activeDeals: 0 }, ...customers]);
    setNewCustomer({ name: '', industry: '', location: '' });
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50/50">
      <Header 
        title="Customers Directory" 
        subtitle="Manage client accounts and contacts"
      >
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger render={<Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-9 px-4 rounded-lg" />}>
            <Plus className="w-4 h-4 mr-2" /> Add Customer
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white rounded-2xl border-slate-200">
            <form onSubmit={handleAddCustomer}>
              <DialogHeader className="mb-4">
                <DialogTitle className="text-xl font-extrabold text-slate-900">Add New Customer</DialogTitle>
                <DialogDescription className="text-xs font-medium text-slate-500">
                  Create a new client profile for the directory.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Company Name</Label>
                  <Input id="name" required value={newCustomer.name} onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} className="bg-slate-50 border-slate-200 h-10 rounded-xl" placeholder="e.g. Acme Corp" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Industry</Label>
                  <Input id="industry" required value={newCustomer.industry} onChange={(e) => setNewCustomer({ ...newCustomer, industry: e.target.value })} className="bg-slate-50 border-slate-200 h-10 rounded-xl" placeholder="e.g. Commercial Construction" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Headquarters Location</Label>
                  <Input id="location" required value={newCustomer.location} onChange={(e) => setNewCustomer({ ...newCustomer, location: e.target.value })} className="bg-slate-50 border-slate-200 h-10 rounded-xl" placeholder="e.g. Denver, CO" />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="h-10 rounded-xl border-slate-200 text-slate-600 font-bold">Cancel</Button>
                <Button type="submit" className="h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold">Save Customer</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </Header>

      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative w-96">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input placeholder="Search by customer name, ID, or location..." className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200 text-sm font-medium" />
            </div>
            <div className="text-sm font-bold text-slate-500">
              Showing {customers.length} accounts
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customers.map((customer) => (
              <Card key={customer.id} className="border-slate-200 shadow-sm rounded-2xl bg-white hover:border-blue-300 hover:shadow-md transition-all cursor-pointer overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                      {customer.id}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-1">{customer.name}</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{customer.industry}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-xs text-slate-600 font-medium">
                      <MapPin className="w-3.5 h-3.5 mr-2 text-slate-400" />
                      {customer.location}
                    </div>
                    <div className="flex items-center text-xs text-slate-600 font-medium">
                      <Phone className="w-3.5 h-3.5 mr-2 text-slate-400" />
                      +1 (555) 019-2834
                    </div>
                    <div className="flex items-center text-xs text-slate-600 font-medium">
                      <Mail className="w-3.5 h-3.5 mr-2 text-slate-400" />
                      procurement@{customer.name.toLowerCase().replace(/\s/g, '')}.com
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">Active Pipeline Deals</span>
                    <span className={`text-sm font-bold ${customer.activeDeals > 0 ? 'text-blue-600' : 'text-slate-400'}`}>
                      {customer.activeDeals}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
