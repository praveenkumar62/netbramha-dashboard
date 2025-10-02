import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import Info from '../assets/info.svg';

const accountsData = [
  { name: 'Closed credit cards', value: 4, color: '#7E79DD', type: 'Closed' },
  { name: 'Closed loans', value: 1, color: '#FDE866', type: 'Closed' },
  { name: 'Open credit cards', value: 2, color: '#99DBEA', type: 'Open' },
  { name: 'Open loans', value: 6, color: '#67D995', type: 'Open' },
];

export default function Accounts() {
  const [accountsTab, setAccountsTab] = useState('All');

  const filteredAccounts = accountsData.filter(item => {
    if (accountsTab === 'All') return true;
    return item.type === accountsTab;
  });

  const totalAccounts = filteredAccounts.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="shadow-[0_4px_20px_rgba(0,58,87,0.05)] rounded-lg border-t border-[#00A6CA] pt-6 pb-2 px-6 bg-white">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-custom-blue-1 font-bold text-lg flex items-center">
          Your Accounts
          <img src={Info} alt="accounts" width={24} height={24} className="inline-block cursor-pointer ml-2" />
        </h2>
        
        <div className="flex bg-[#F7F9FA] rounded-md">
          <button
            onClick={() => setAccountsTab('All')}
            className={`px-5 py-1 rounded-md text-sm transition-colors ${
              accountsTab === 'All'
                ? 'bg-custom-blue-2 text-white'
                : 'text-secondary-black'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setAccountsTab('Open')}
            className={`px-5 py-1 rounded-md text-sm transition-colors ${
              accountsTab === 'Open'
                ? 'bg-custom-blue-2 text-white'
                : 'text-secondary-black'
            }`}
          >
            Open
          </button>
          <button
            onClick={() => setAccountsTab('Closed')}
            className={`px-5 py-1 rounded-md text-sm transition-colors ${
              accountsTab === 'Closed'
                ? 'bg-custom-blue-2 text-white'
                : 'text-secondary-black'
            }`}
          >
            Closed
          </button>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-64 h-64 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={filteredAccounts}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={100}
                dataKey="value"
              >
                {filteredAccounts.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-20">
            <p className="text-sm text-primary-black font-bold">Total Accounts</p>
            <p className="text-base text-primary-black mt-1">{totalAccounts}</p>
          </div>
        </div>

        <div className="flex-1">
          <ul className="space-y-5 pr-3">
            {filteredAccounts.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="text-primary-black font-bold text-sm">{item.name}</span>
                </div>
                <span className="text-primary-black text-base">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}